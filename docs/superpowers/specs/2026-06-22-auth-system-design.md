# Spec — Système d'authentification Spark Learning
**Date :** 2026-06-22  
**Statut :** Approuvé  
**Approche retenue :** Hybride localStorage + Firebase (Option B)

---

## 1. Contexte & Objectifs

Spark Learning est une SPA Vanilla JS hébergée sur GitHub Pages (statique). Toute la progression est actuellement stockée en `localStorage` (locale à l'appareil).

**Trois objectifs :**
- **A) Synchronisation** — l'élève retrouve sa progression sur n'importe quel appareil
- **B) Contrôle d'accès** — accès via code de classe fourni par un enseignant
- **C) Suivi enseignant** — le prof voit la progression complète de ses élèves

---

## 2. Stack technique

| Service | Usage |
|---|---|
| **Firebase Authentication** | Connexion par téléphone (SMS OTP) ou email/mot de passe |
| **Firestore** | Base de données : profils, classes, progression |
| **SDK via CDN** | Pas de bundler — chargement via `<script>` dans `index.html` |

SDK chargé dans `index.html` avant tous les autres scripts :
```html
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore-compat.js"></script>
```

---

## 3. Rôles & Statuts

| Rôle | Description |
|---|---|
| `student` | Élève — accès à l'app normale après inscription |
| `teacher` | Enseignant — accès après approbation admin |
| `admin` | Toi — cumule admin + enseignant, compte créé manuellement dans Firestore |

| Statut | Description |
|---|---|
| `active` | Compte opérationnel |
| `pending` | Enseignant en attente d'approbation |
| `rejected` | Demande enseignant refusée |

**Compte admin :** créé une seule fois directement dans Firestore (pas via le flux d'inscription). Rôle `admin`, statut `active`.

---

## 4. Modèle de données Firestore

### `users/{uid}`
```json
{
  "role": "student | teacher | admin",
  "status": "active | pending | rejected",
  "displayName": "string",
  "phone": "string | null",
  "email": "string | null",
  "classes": ["classCode1", "classCode2"],
  "createdAt": "timestamp",
  "approvedAt": "timestamp | null",
  "approvedBy": "uid | null"
}
```

### `classes/{classCode}`
```json
{
  "teacherId": "uid",
  "name": "string",
  "students": ["uid1", "uid2"],
  "createdAt": "timestamp"
}
```
Le `classCode` est la clé du document (ex: `MATHS-TS1`). Généré par l'enseignant, unique dans Firestore.

### `progress/{uid}`
```json
{
  "progress": {},
  "tracking": {},
  "streak": {},
  "flashcards": {},
  "lastSync": "timestamp"
}
```
Miroir des clés `sparkProgress`, `sparkTracking`, `sparkStreak`, `sparkFlashcards` de `localStorage`.

---

## 5. Nouveaux fichiers

```
js/auth/
  authService.js        — Firebase init, login, logout, état auth courant
  authGuard.js          — vérifie auth + statut avant d'afficher l'app

js/sync/
  syncService.js        — intercepte les writes storage.js → pousse vers Firestore

js/views/
  authView.js           — pages Inscription / Connexion (modale centrée)
  teacherDashboard.js   — tableau de bord enseignant (classes + élèves)
  adminPanel.js         — gestion comptes pending + tous les comptes
```

**Principe de non-régression :** `storage.js` n'est pas modifié dans son API publique. `syncService.js` wrappe les méthodes critiques après le chargement.

---

## 6. Flux d'authentification

### Inscription
```
1. Choix méthode : téléphone (SMS OTP) | email + mot de passe
2. Vérification Firebase Authentication
3. Sélection rôle : Élève | Enseignant
   ├── Élève     → statut 'active' → saisie code(s) de classe → app
   └── Enseignant → statut 'pending' → message d'attente affiché
                    → visible dans le panel admin à la prochaine connexion
                    → admin approuve/refuse → accès débloqué
4. Profil créé dans Firestore users/{uid}
```

### Connexion
```
Téléphone → OTP → app   |   Email → mot de passe → app
→ authGuard vérifie status : si 'pending' → écran d'attente
```

### Rejoindre une classe (élève)
- À l'inscription ET depuis son profil à tout moment
- Saisit un code → Firestore vérifie l'existence → ajoute uid dans `classes/{code}.students` et code dans `users/{uid}.classes`
- Un élève peut appartenir à plusieurs classes

---

## 7. Flux Enseignant

```
Tableau de bord
├── [+ Créer une classe] → saisit un nom → code généré automatiquement
├── Liste de ses classes
└── Par classe → liste des élèves
    └── Par élève → progression complète (modules, scores, streak, lacunes)
```

Un enseignant peut créer et gérer plusieurs classes. Chaque classe a un code unique.

---

## 8. Flux Admin

```
Panel Admin
├── Onglet "En attente" → liste des comptes teacher pending
│   └── [Approuver] → status:'active' | [Refuser] → status:'rejected'
└── Onglet "Tous les comptes" → recherche, changement de rôle, désactivation

Navigation
├── Panel Admin (accueil)
├── Tableau de bord Enseignant
└── App Spark normale
```

---

## 9. Stratégie de synchronisation

### Données synchronisées
| Clé localStorage | Firestore field | Priorité |
|---|---|---|
| `sparkProgress` | `progress` | Critique |
| `sparkTracking` | `tracking` | Critique |
| `sparkStreak` | `streak` | Importante |
| `sparkFlashcards` | `flashcards` | Secondaire |

### Données non synchronisées (locales uniquement)
- `sparkTheme` — préférence visuelle
- `sparkRecent` — historique local
- `sparkExStreak` — recalculable

### Mécanisme
1. `syncService.js` wrappe les méthodes write de `storage.js` au chargement
2. Après chaque write local → `Firestore.set(progress/{uid}, data, {merge:true})` ← non-bloquant
3. À l'init de l'app → compare `lastSync` Firestore vs `localStorage` → prend le plus récent
4. **Offline** : le SDK Firebase met les writes en file d'attente et les envoie automatiquement à la reconnexion

---

## 10. UI / Charte graphique

- Même charte que `maintenance.html` : fond `#0f0f1a`, card arrondie, couleurs CSS variables (`--primary`, etc.)
- Page auth : modale centrée avec deux onglets **Connexion / Inscription**
- Pas de page dédiée — l'auth remplace l'app si non connecté, l'app s'affiche dès la connexion confirmée

---

## 11. Hors scope (v1)

- Notifications push (approbation enseignant = message affiché à la prochaine connexion)
- Export PDF de la progression
- Paiement / abonnement
- Plusieurs admins
- Suppression de compte en self-service
