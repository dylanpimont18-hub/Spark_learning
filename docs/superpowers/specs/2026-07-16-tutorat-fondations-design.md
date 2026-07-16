# Spec — Tutorat privé, Phase 1 : Fondations
**Date :** 2026-07-16
**Statut :** Approuvé
**Contexte projet :** Dylan et Simon donnent des cours particuliers de Maths / Physique-Chimie / SI en dehors de Spark Learning. Ils veulent un espace privé (2 personnes) sur le site pour suivre leurs élèves de cours particuliers : fiche élève, historique des séances, notation manuelle a posteriori.

Cette phase pose la structure de données et l'interface de suivi manuel, **sans IA**. Une phase 2 viendra brancher un générateur de contenu IA (formulaire → PDF envoyé par email) sur cette même structure.

---

## 1. Contexte & objectifs

- Les élèves de cours particuliers sont **indépendants** des comptes élève/classe Spark Learning existants (pas d'inscription, créés directement par Dylan/Simon).
- L'espace doit être strictement privé : visible et utilisable uniquement par Dylan et Simon.
- Objectif de cette phase : pouvoir créer un élève, enregistrer une séance (date, matière, sujet, difficultés observées), et noter la séance a posteriori (1 à 10 + remarques) — sans aucune génération automatique de contenu.

## 2. Accès & sécurité

Nouveau champ booléen sur le document utilisateur existant, indépendant du champ `role` (`student|teacher|admin`) :

```
users/{uid}: {
  ...champs existants,
  tutorAccess: true   // absent par défaut ; ajouté manuellement en Firestore, comme le rôle admin
}
```

- Pas de nouveau système d'auth : réutilise Firebase Authentication / Firestore existant.
- Pas de flux d'inscription self-service pour ce champ — créé manuellement dans Firestore pour les 2 comptes (Dylan, Simon), à l'image du compte `admin`.
- Un compte peut cumuler `tutorAccess: true` avec n'importe quel `role` existant (ex: Dylan reste `admin` ET a `tutorAccess: true`). Simon peut avoir un compte minimal (`role` sans rapport, ou absent, + `tutorAccess: true`).
- `js/auth/authGuard.js` expose `AuthGuard.isTutor()` (lit `tutorAccess` sur le profil déjà chargé, pas de requête Firestore supplémentaire).
- Nouveau lien nav "Tutorat" dans `_setupCommonListeners()` (`js/app.js`), visible uniquement si `AuthGuard.isTutor()`.

## 3. Modèle de données Firestore

### `tutoringStudents/{studentId}`
```json
{
  "firstName": "string",
  "lastName": "string",
  "level": "string",
  "subjects": ["Maths", "Physique-Chimie", "SI"],
  "contact": { "parentEmail": "string|null", "parentPhone": "string|null", "studentEmail": "string|null" },
  "generalNotes": "string",
  "archived": false,
  "createdAt": "timestamp",
  "createdBy": "uid"
}
```

### `tutoringSessions/{sessionId}`
```json
{
  "studentId": "string",
  "tutorUid": "uid",
  "date": "timestamp",
  "subject": "string",
  "topic": "string",
  "difficultiesObserved": "string",
  "status": "draft | rated",
  "rating": "number 1-10 | null",
  "ratingRemarks": "string | null",
  "createdAt": "timestamp"
}
```

Notes de conception :
- `status` reste à 2 valeurs pour cette phase. La phase 2 étendra ce champ (`planned` → `generated` → `rated`) et ajoutera `pdfUrl`/`mdUrl` sans migration nécessaire (champs absents tant que non utilisés).
- `archived` permet le soft delete d'un élève (voir §5) sans perdre l'historique de séances.
- Historique d'un élève = requête `tutoringSessions` filtrée par `studentId`, triée par `date` décroissant.

### Règles Firestore (ajout à `firestore.rules`)
```
function isTutor() {
  return isSignedIn() && getUserData().tutorAccess == true;
}

match /tutoringStudents/{studentId} {
  allow read, write: if isTutor();
}

match /tutoringSessions/{sessionId} {
  allow read, write: if isTutor();
}
```
Collections entièrement fermées à `isTutor()` — aucune lecture publique, aucun accès élève/enseignant/admin classique.

## 4. Vues & navigation

```
js/views/tutoring/tutoringHome.js     — liste des élèves (cartes), recherche par nom, "+ Ajouter un élève"
js/views/tutoring/tutoringStudent.js  — fiche élève : notes générales + historique séances + "+ Nouvelle séance"
```

- Route `/tutorat` → `tutoringHome` : grille des élèves non archivés, recherche client-side par nom. Formulaire d'ajout minimal (prénom, nom, niveau, matières, contact optionnel).
- Route `/tutorat/:studentId` → `tutoringStudent` :
  - Notes générales éditables en haut de page.
  - Liste chronologique des séances (plus récente en premier). Chaque séance affiche date/matière/sujet/difficultés.
  - Si `status == 'draft'` : bouton "Noter cette séance" → formulaire note (1-10) + remarques → passe en `status: 'rated'`.
  - Bouton "+ Nouvelle séance" → formulaire (date, matière, sujet, difficultés observées) → crée un doc `tutoringSessions` en `status: 'draft'`. Pas d'IA à ce stade (la phase 2 ajoutera un bouton "Générer un cours" sur ce même formulaire).
- Style : réutilise les classes et variables CSS existantes (`.card`, `--primary`, etc.) — aucun nouveau système visuel.

## 5. Gestion des erreurs & cas limites

- **Élève sans séance** : état vide explicite ("Aucune séance pour l'instant"), pas de liste vide silencieuse.
- **Suppression d'un élève** : soft delete uniquement (`archived: true`). Pas de suppression définitive dans cette phase — évite de perdre un historique par erreur de clic ; un élève archivé disparaît de `tutoringHome` mais ses séances restent consultables en base.
- **Séance non notée** : jamais bloquant. Un tutor peut créer plusieurs séances `draft` sans les noter immédiatement ; la notation est un geste manuel, jamais obligatoire.
- **Accès concurrent** (Dylan et Simon éditent la même fiche simultanément) : pas de verrouillage, dernier `update` gagne — cohérent avec le reste du site (aucune gestion de conflit ailleurs non plus), risque négligeable à 2 utilisateurs.

## 6. Validation

Pas de framework de test automatisé sur ce projet (vanilla JS sans build) — validation manuelle :
- Ajouter `tutorAccess: true` à un compte de test en Firestore local, vérifier que le lien "Tutorat" apparaît et qu'un compte sans ce champ ne le voit pas.
- Vérifier dans la console Firebase que les règles bloquent un compte élève/enseignant tentant d'accéder aux collections `tutoring*`.
- Créer un élève, une séance, la noter, rafraîchir la page → tout persiste.
- Archiver un élève → disparaît de `tutoringHome`, ses séances restent accessibles si on navigue directement vers sa fiche.

## 7. Hors scope (Phase 1)

- Génération de contenu par IA (formulaire → Cloud Function → Claude → PDF → email) — **Phase 2**.
- Archivage PDF/Markdown des cours générés — **Phase 2**.
- Suppression définitive d'un élève ou d'une séance.
- Export/impression de l'historique de séances.
- Plusieurs tutors au-delà de Dylan et Simon.
