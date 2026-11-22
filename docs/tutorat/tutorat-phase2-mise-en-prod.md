# Tutorat privé — Phase 2 (générateur IA) : mise en prod manuelle

Le code est terminé et committé (voir `docs/superpowers/plans/2026-07-16-tutorat-phase2-generateur.md`, tâches 1-11 et 13/13, 29/29 tests passants dans `functions/`). Il reste 7 actions manuelles avant tout usage réel — aucune ne peut être faite par Claude (accès console, clé API, argent réel engagé). À faire dans l'ordre, chaque étape dépendant souvent de la précédente.

## 1. Passer sur le plan Firebase Blaze

Les Cloud Functions 2ᵉ génération + l'appel réseau sortant vers l'API Anthropic nécessitent le plan **Blaze** (pay-as-you-go) — le plan Spark (gratuit) ne le permet pas.

- [ ] Console Firebase → roue crantée (Paramètres du projet) → **Utilisation et facturation** → passer sur Blaze.
- Coût réel à anticiper : Cloud Functions (temps d'exécution, mémoire — la fonction est configurée en `2GiB` / `540s` max) + Cloud Storage (stockage des PDF) + Firestore (déjà en place, inchangé). Volume attendu = quelques générations/semaine → tarifs bas, mais plus gratuit à 100%.

## 2. Configurer la clé API Anthropic

- [ ] Récupérer une clé sur [console.anthropic.com](https://console.anthropic.com) (section API Keys) si besoin.
- [ ] Dans le dossier du projet, lancer :
  ```
  firebase functions:secrets:set ANTHROPIC_API_KEY
  ```
  Le CLI demande de coller la clé en saisie masquée. Stockée dans Google Secret Manager, jamais en dur dans le code — déjà câblé côté code (`functions/index.js` la lit via `defineSecret('ANTHROPIC_API_KEY')`).
- Chaque génération (rédaction + relecture + éventuel fix de compilation) consomme de vrais tokens Opus 4.8 facturés sur ce compte Anthropic.

## 3. Installer et configurer l'extension Firebase "Trigger Email"

- [ ] Console Firebase → **Extensions** → rechercher "Trigger Email" (éditeur Firebase) → Installer.
- [ ] Pendant la configuration :
  - **Collection Firestore à surveiller** : `mail` (c'est exactement ce que `functions/src/mailer.js` écrit).
  - **Paramètres SMTP** : un compte dédié — soit un compte Gmail avec un [mot de passe d'application](https://myaccount.google.com/apppasswords) (pas le mot de passe principal), soit un service comme SendGrid/Mailgun pour plus de volume/meilleure délivrabilité.
  - Champs `FROM`/`REPLY_TO` par défaut : le code n'en précise pas dans les documents `mail`, donc les valeurs par défaut de l'extension s'appliqueront.
- Étape uniquement dans la Console — pas de commande CLI équivalente.

## 4. Remplacer les adresses email placeholder

- [ ] Ouvrir `functions/src/mailer.js`, ligne 1 :
  ```js
  var TUTOR_EMAILS = ['dylan@spark-learning.example', 'simon@spark-learning.example'];
  ```
  Remplacer par les deux vraies adresses (destinataires du PDF généré avec succès).
- [ ] Committer le changement, puis redéployer les functions (`firebase deploy --only functions`) — inclus dans l'étape 5 si fait avant.

Pour l'email d'échec, rien à toucher : il part automatiquement à l'adresse `email` du document `users/{uid}` de la personne qui a cliqué "Générer un cours" (`generationRequestedBy`), déjà en base.

## 5. Déployer

- [ ] Lancer :
  ```
  firebase deploy --only functions,firestore:rules,storage
  ```
- **`functions`** : première fois que ce dossier est déployé — Firebase installe les dépendances npm dans l'environnement Cloud Build (Linux), ce qui déclenche automatiquement le téléchargement du binaire Tectonic via le script `postinstall` (normal, prévu pour tourner côté serveur, pas en local).
- **`firestore:rules`** : republie `firestore.rules` — probablement déjà à jour via le hook local `post-commit` qui déploie automatiquement les règles à chaque commit qui les touche ; ce flag sert surtout si les règles sont retouchées juste avant ce déploiement groupé.
- **`storage`** : première publication de `storage.rules` (nouveau fichier, jamais déployé jusqu'ici).

⚠️ Cette commande a un effet réel en production (facturation Blaze active).

## 6. Tests bout-en-bout

- [ ] **Test succès** — Fiche élève → "+ Nouvelle séance" → remplir avec 1-2 figures demandées → "Générer un cours". Attendu : badge "Génération en cours..." (spinner) quasi immédiatement, puis bascule vers "Cours généré" avec lien PDF cliquable fonctionnel, et réception de l'email par les deux adresses de l'étape 4.
- [ ] **Test échec** — Invalider temporairement la valeur du secret (`firebase functions:secrets:set ANTHROPIC_API_KEY` avec une fausse valeur, ou révoquer la clé côté console Anthropic), refaire une génération. Attendu : badge "Échec de la génération" avec message d'erreur court, email uniquement à la personne qui a cliqué (pas aux deux), bouton "Générer un cours" à nouveau disponible sur cette séance. **Remettre la vraie clé ensuite.**
- [ ] **Test régénération** — Sur une séance déjà `generated`, recliquer "Générer un cours". Attendu : l'ancien PDF est remplacé au même chemin Storage (pas de doublon), `generatedAt` mis à jour.

## 7. Relecture manuelle obligatoire

- [ ] Avant tout usage avec un élève payant : lire soi-même le contenu du premier PDF généré (maths, français, figures) — la contrainte "zéro erreur" du spec ne peut pas reposer uniquement sur la passe de relecture automatique d'Opus pour ce tout premier lot.

---

**Référence** : spec complet dans `docs/superpowers/specs/2026-07-16-tutorat-phase2-generateur-design.md`, plan d'implémentation détaillé dans `docs/superpowers/plans/2026-07-16-tutorat-phase2-generateur.md` (§ Task 12 pour la version condensée de cette checklist).
