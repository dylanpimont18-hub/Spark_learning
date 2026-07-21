# Spec — Tutorat privé : test de positionnement pour nouveaux élèves

**Date :** 2026-07-21
**Statut :** Approuvé
**Contexte projet :** Nouvelle brique du sous-projet Tutorat privé (voir `docs/superpowers/specs/2026-07-16-tutorat-fondations-design.md` et `docs/superpowers/specs/2026-07-16-tutorat-phase2-generateur-design.md`, déjà implémentées). Quand Simon ou Dylan prennent en charge un nouvel élève, ils veulent pouvoir lui envoyer un lien de test de positionnement (Maths et/ou Physique-Chimie) pour évaluer son niveau réel avant de bâtir le plan de cours — soit une remise à niveau d'abord (lacunes sur des notions d'années antérieures), soit un suivi direct du programme de la classe suivie.

**Exigence de qualité (contrainte héritée) :** même exigence zéro-erreur que le reste du sous-système tutorat (usage professionnel, élèves payants) — s'applique en particulier à la banque de questions calibrées, qui doit être relue avec le même sérieux que le contenu généré en Phase 2.

**Périmètre :** ce spec couvre l'infrastructure complète **et** l'écriture de la banque de questions pour les deux matières et tous les niveaux (6e → BTS), livrées ensemble en v1 (décision explicite : pas de MVP réduit avec banque partielle).

---

## 1. Architecture

Tout reste dans l'écosystème Firebase, sur le modèle de la Phase 2 :

- **Génération du lien** (côté tuteur, authentifié `isTutor()`) : bouton "Envoyer un test de positionnement" sur `js/views/tutoring/tutoringHome.js` (nouveau prospect, pas encore de fiche) et sur `js/views/tutoring/tutoringStudent.js` (fiche existante). Écrit un document dans une nouvelle collection Firestore `positioningTests`, via `TutoringService`. Le tuteur copie l'URL générée (`#/positionnement/<token>`, `token` = ID du document) et l'envoie manuellement (SMS, mail, WhatsApp...) — aucun envoi automatique.
- **Page de test** (côté élève, non authentifié) : nouvelle vue publique `js/views/positioning/positioningTest.js`. La route `positioning` est **absente** de la liste des vues protégées dans `js/app.js` (celles qui redirigent vers `home` si `!AuthGuard.isAuthenticated()`), donc accessible sans compte, comme `home`.
- **Cloud Functions (2ᵉ génération, `onCall`)** — nouvelles, seul point d'accès non authentifié à cette fonctionnalité :
  - `getPositioningLinkInfo({token})` → renvoie l'état minimal nécessaire à l'écran d'accueil (matières déjà complétées, nom déjà connu ou non). Ne révèle jamais de données internes tuteur.
  - `getPositioningQuestionBank({subject})` → renvoie la banque calibrée complète pour la matière choisie (thèmes, questions par palier de difficulté, options, bonne réponse). Source unique : voir §3.
  - `submitPositioningResult({token, subject, studentName?, studentLevel?, answers})` → valide le token, **regrade côté serveur** à partir de sa propre copie de la banque, rejoue l'algorithme de palier par thème (voir §4), écrit le résultat dans `positioningTests/{token}`.
  - Les trois fonctions rejettent un token inconnu avec une erreur générique, sans révéler s'il existe — évite l'énumération de tokens.
- **Firestore** — `positioningTests` : lecture/écriture réservées à `isTutor()` (comme `tutoringStudents`/`tutoringSessions`) pour tout accès **authentifié** (le tuteur, depuis l'espace tutorat). **Aucune règle publique** n'est ouverte : l'élève non authentifié ne touche jamais Firestore directement, uniquement les trois Cloud Functions ci-dessus (SDK Admin, contourne les règles).

## 2. Modèle de données

Nouvelle collection `positioningTests/{token}` :

```json
{
  "studentId": "string | null",
  "studentNameInput": "string | null",
  "studentLevelInput": "string | null",
  "createdBy": "uid",
  "createdAt": "timestamp",
  "results": {
    "maths": {
      "status": "not_started | completed",
      "themes": {
        "algebre": { "level": "string" },
        "geometrie": { "...": "..." }
      },
      "completedAt": "timestamp | null"
    },
    "physique": { "...": "même structure" }
  },
  "reviewed": "boolean"
}
```

Notes de conception :
- `studentId` peut être renseigné dès la création (fiche existante) ou après coup (le tuteur rattache un test standalone à une fiche créée à partir du résultat).
- `studentNameInput`/`studentLevelInput` ne sont utilisés **que** pour le flux standalone (pas de fiche au départ) — saisis par l'élève à l'écran d'accueil du test. Ils servent uniquement de métadonnées de contexte pour le rapport et le préremplissage d'une future fiche élève ; l'algorithme adaptatif ne s'en sert jamais pour choisir les questions (voir §4).
- `results.<subject>.status` passe de `not_started` (implicite, clé absente) à `completed` en une seule écriture serveur (pas d'état intermédiaire persistant côté Firestore, le test tourne en mémoire côté client jusqu'à soumission).
- Une matière déjà `completed` ne peut pas être re-soumise (`submitPositioningResult` rejette la double soumission).
- `reviewed` : mis à `true` par le tuteur une fois le rapport traité (fiche créée/rattachée), pour distinguer les tests encore "à traiter" sur `TutoringHome`.

### Règles Firestore (ajout)
```
match /positioningTests/{token} {
  allow read, write: if isTutor();
}
```
Aucune règle publique — cohérent avec le principe "tout accès non authentifié passe par les Cloud Functions".

## 3. Banque de questions

Organisée par matière → thème → palier de difficulté (échelle 1 à ~9, correspondant grossièrement à 6e → BTS) → 2-3 questions QCM par palier.

Thèmes proposés (ajustables lors de l'écriture si un découpage plus naturel apparaît) :
- **Maths** : Numérique/Calcul, Algèbre-Équations, Géométrie, Fonctions, Statistiques-Probabilités.
- **Physique-Chimie** : Mécanique, Électricité, Énergie, Matière/Chimie, Ondes-Optique.

**Source unique côté serveur** : la banque vit exclusivement dans `functions/src/positioningBank/{maths,physique}.js`, servie au client via `getPositioningQuestionBank`. Pas de copie dupliquée côté client — élimine le risque de désynchronisation entre deux banques sur un contenu aussi volumineux (~200-240 questions au total). Le client charge la banque de la matière choisie une fois au démarrage du test et fait tourner l'algorithme adaptatif en mémoire.

Aucune restriction de confidentialité sur la banque (les bonnes réponses sont envoyées au client) : il n'y a pas d'enjeu de triche côté élève, un résultat faussé ne pénalise que la qualité de son propre plan de cours.

Format QCM standard, cohérent avec le moteur de quiz existant (`js/engines/quizEngine.js`) mais banque et logique de notation indépendantes (pas de réutilisation du contenu pédagogique de `js/data/`, décision explicite : la banque de positionnement est calibrée spécifiquement pour l'évaluation, les quiz de cours ne le sont pas).

**Écriture du contenu** : la banque étant volumineuse, elle sera rédigée thème par thème (et relue) plutôt que d'un bloc, en gardant la même exigence de rigueur que le contenu généré en Phase 2. Le séquençage précis (ordre des thèmes/matières) sera détaillé dans le plan d'implémentation.

## 4. Algorithme adaptatif

Pour chaque thème d'une matière testée, palier indépendant ("staircase") :
1. Démarre à un palier médian (~palier 4-5, correspondant à 3e/2nde).
2. Bonne réponse → palier suivant ; mauvaise réponse → palier précédent.
3. S'arrête après 5-6 questions, le palier atteint devient le niveau estimé de ce thème.

Avec ~5 thèmes par matière, ça donne ~25-30 questions par matière testée, cohérent avec une durée cible de 25-35 minutes par matière.

Le client exécute cet algorithme en mémoire (aucune écriture Firestore pendant le test) pour choisir la question suivante à chaque étape. À la fin d'une matière, il envoie la séquence brute `{questionId, réponse}` à `submitPositioningResult`. **Le serveur ne fait jamais confiance au résultat calculé côté client** : il regrade chaque réponse depuis sa propre copie de la banque et rejoue la même logique de palier sur la séquence de bonnes/mauvaises réponses recalculées, pour obtenir les niveaux par thème définitifs.

Aucun feedback bonne/mauvaise réponse n'est affiché à l'élève pendant le test (juste une barre de progression neutre) — le diagnostic n'apparaît que dans le rapport tuteur, à la fin. Évite que l'élève ajuste sa stratégie en cours de route ; cohérent avec une logique d'évaluation plutôt que d'apprentissage (le ton socratique/encourageant des règles de contenu habituelles ne s'applique pas ici, ce n'est pas un module pédagogique).

## 5. Flux détaillé

1. **Génération du lien** — Le tuteur clique "Envoyer un test de positionnement" (depuis `TutoringHome` ou la fiche élève). Un document `positioningTests/{token}` est créé (avec `studentId` si applicable). L'URL est affichée pour copie manuelle.
2. **Accueil du test** — L'élève ouvre le lien. `getPositioningLinkInfo` renvoie l'état du lien. Si `studentId` absent, l'élève saisit son prénom/nom et sa classe (`studentLevelInput`) ; sinon ces champs sont déjà connus et l'écran passe directement au choix de matière.
3. **Choix de matière** — L'élève choisit Maths, Physique-Chimie, ou peut faire les deux à la suite (mais pas repasser une matière déjà `completed`).
4. **Test** — `getPositioningQuestionBank` charge la banque de la matière choisie ; l'algorithme de palier par thème tourne en mémoire côté client (~25-30 questions, pas de feedback affiché).
5. **Soumission** — `submitPositioningResult` regrade côté serveur, écrit `results.<subject>` dans le document. Écran de fin neutre pour l'élève ("Merci, ton résultat a bien été transmis").
6. **Consultation côté tuteur** — pas de notification email (décision explicite, simple consultation manuelle) :
   - Si `studentId` était déjà renseigné : le rapport apparaît directement dans une nouvelle section de la fiche élève (`js/views/tutoring/tutoringStudent.js`).
   - Sinon : une nouvelle liste "Tests de positionnement à traiter" sur `TutoringHome` liste les tests `completed` non `reviewed`, avec le nom/classe saisis par l'élève.
7. **Rapport** — pour chaque matière testée : niveau estimé par thème (badges, même style visuel que les badges de statut de génération existants), et un texte d'indication non tranché : lacunes détectées sur un ou plusieurs thèmes en retard significatif sur la classe déclarée → suggestion de remise à niveau ; sinon → suggestion de suivi direct du programme. Le tuteur reste seul décisionnaire (peut ajouter ses propres notes, comme pour les séances).
8. **Rattachement** (tests standalone uniquement) — bouton "Créer la fiche élève à partir de ce test" (préremplit nom + classe) ou "Rattacher à un élève existant" ; marque `reviewed: true`.

## 6. Tests & vérification

- Tests automatisés (`functions/test/`, pattern existant `node --test test/*.test.js`) :
  - Logique de palier par thème : séquences de réponses fixtures → niveau attendu.
  - Regrade serveur : réponses incohérentes/tamperées, double soumission sur une matière déjà `completed`, token inconnu.
  - Les trois Cloud Functions (`getPositioningLinkInfo`, `getPositioningQuestionBank`, `submitPositioningResult`).
- Vérification manuelle obligatoire avant usage réel (pas d'accès navigateur pour Claude) : parcours complet lien → test → soumission → rapport, sur les deux matières, avec au moins un cas standalone et un cas fiche existante.
- Relecture manuelle de la banque de questions par Dylan/Simon avant mise en prod (même exigence que la relecture du premier PDF généré en Phase 2).

## 7. Déploiement

`firebase deploy --only functions,firestore:rules` — nouvelles fonctions + nouvelle collection dans les règles. Coût réel (plan Blaze déjà actif depuis la Phase 2) — à confirmer avant exécution, comme pour les déploiements précédents.
