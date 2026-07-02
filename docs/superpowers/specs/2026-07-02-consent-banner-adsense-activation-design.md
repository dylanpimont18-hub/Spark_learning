# Bannière de consentement + prêt-à-activer AdSense — Design

## Contexte

Spark Learning est en attente de validation Google AdSense ("Votre site est en cours d'examen en vue de diffuser des annonces"). Le site n'a aujourd'hui aucune bannière de consentement cookies, alors que la politique "EU User Consent Policy" de Google l'exige avant de servir de vraies pubs à un public UE (risque de suspension du compte, pas juste de la fonctionnalité). Objectif de ce chantier : que l'activation des vraies pubs, le jour où le compte est approuvé, se réduise à un minimum d'actions manuelles côté dashboard AdSense, sans code à écrire ce jour-là.

Décisions déjà actées avant ce document (voir mémoire `project_monetisation_spark_learning`) : contenu élève 100 % gratuit, pub non personnalisée uniquement, jamais dans les onglets d'apprentissage actif (cours/quiz/exercice/problème/évaluation/companion), pas de mécanique "regarder une pub pour soutenir/débloquer".

## Approche retenue

Bannière de consentement **maison, en Vanilla JS** (pas de service CMP tiers) : zéro nouveau compte externe à créer, zéro script tiers chargé, style qui suit exactement la charte graphique existante (`css/styles.css`). Les critères Google (refus aussi facile qu'acceptation) sont bien documentés et simples à implémenter correctement sans dépendre d'un service.

**Activation AdSense en emplacements manuels** (pas Auto ads) : Auto ads laisserait Google choisir dynamiquement où insérer les pubs par scan heuristique de la page — non fiable dans une SPA qui ne recharge jamais la page au changement de vue, avec un risque réel de violer la règle "jamais pendant l'apprentissage actif". Les emplacements manuels déjà codés (`renderAdSlot()` sur accueil/matières/modules) gardent un contrôle total, au prix de 3 actions manuelles côté dashboard le jour de l'approbation (voir Checklist plus bas) — irréductible, car Google ne génère les IDs d'ad units qu'après leur création manuelle dans le dashboard ; aucune API légère ne permet de les anticiper sans une intégration API AdSense complète (OAuth), disproportionnée ici.

## Architecture

- **`js/storage.js`** (existant, étendu) : `Storage.getConsent()` / `Storage.setConsent(category, granted)`. Persistance par **catégorie** (`'ads'` dès maintenant) plutôt qu'un booléen unique — la Semaine 4 du plan (`plan-fondations-monetisation.md`) prévoit Google Analytics, qui aura besoin du même mécanisme de consentement (catégorie `'analytics'`) ; cette forme de données évite un rework à ce moment-là, sans construire aujourd'hui une UI pour une catégorie qui n'existe pas encore.
- **`js/consent.js`** (nouveau, autonome — même esprit que `js/components/celebration.js`) :
  - `Consent.hasAdConsent()` — lit `Storage.getConsent('ads')`, retourne `true` uniquement si explicitement accordé (défaut sûr : absence de choix = pas de consentement).
  - `Consent.needsPrompt()` — vrai si aucun choix n'a jamais été enregistré.
  - `Consent.showBanner()` / `Consent.hideBanner()` — cycle de vie du DOM de la bannière (créée dynamiquement, pas de markup statique dans `index.html`, comme les toasts).
  - `Consent.accept()` / `Consent.reject()` — gestionnaires des boutons, persistent le choix, masquent la bannière, redéclenchent `initAdSlots()` si applicable.
  - `Consent.openPreferences()` — rouvre la bannière à la demande (lien footer), même après un choix déjà fait.
  - Appelé une fois au tout début du handler `DOMContentLoaded` de `js/app.js`, avant la bifurcation invité/enseignant/admin/élève, pour décider si la bannière doit s'afficher — un seul point d'appel, comportement identique quel que soit le rôle (même si dans la pratique enseignants/admins ne voient pas les emplacements pub, ils passent par le même navigateur soumis aux mêmes règles de cookies).
- **`js/adsConfig.js` / `js/components/adSlot.js`** (étendus) : `renderAdSlot()`/`initAdSlots()` vérifient `Consent.hasAdConsent()` en plus de `ADS_ENABLED` et du slot ID. Tant que `ADS_ENABLED` est `false` (aujourd'hui) : comportement inchangé, placeholder pointillé visible pour tous (mode dev, indépendant du consentement). Une fois `ADS_ENABLED` à `true` : si consentement refusé ou pas encore donné, `renderAdSlot()` ne rend **rien** (pas de placeholder, pas de nag) ; si accordé, la vraie pub s'affiche normalement.
- **Footer (`index.html`)** : nouveau bouton "Gérer mes préférences cookies" à côté du lien "Politique de confidentialité" existant, appelle `Consent.openPreferences()`.
- **`css/styles.css`** : nouvelles règles `.consent-banner` (bandeau pleine largeur, bas de page — pattern le plus reconnaissable, ne rentre pas en conflit visuel avec le bouton contact déjà ancré en coin), boutons "Accepter"/"Refuser" de poids visuel strictement égal (même taille, même niveau de contraste — pas un bouton primaire vs un lien discret).

## Comportement détaillé

1. Première visite, aucun choix enregistré → bannière affichée en bas de page après le rendu initial.
2. Texte court, tutoiement (cohérent avec `js/views/confidentialite.js`) : explique que les pubs sont non personnalisées, lien vers `#confidentialite` pour en savoir plus.
3. Clic "Accepter" ou "Refuser" → `Storage.setConsent('ads', true|false)`, bannière masquée, choix jamais redemandé automatiquement.
4. Lien footer "Gérer mes préférences cookies" → rouvre la bannière à tout moment, permet de changer d'avis.
5. Défaut sûr systématique : pas de consentement enregistré = traité comme refusé pour le rendu des pubs (jamais de pub chargée sans "oui" explicite).

## Checklist d'activation AdSense (jour de l'approbation)

Aucune de ces 3 actions ne touche à la logique JS (déjà prête après ce chantier) :
1. Créer les ad units dans le dashboard AdSense (emplacements : accueil, matières, modules).
2. Coller les 3 IDs obtenus dans `AD_SLOTS` (`js/adsConfig.js`).
3. Passer `ADS_ENABLED` à `true`, bump cache-busting (`?v=N`), déployer.

## Hors scope de ce chantier

- Page "Soutenir" / Ko-fi (tâche séparée de la Semaine 3).
- Intégration réelle de Google Analytics (Semaine 4) — seule la structure de données du consentement est préparée pour l'accueillir.
- Auto ads (explicitement écarté, voir Approche retenue).
