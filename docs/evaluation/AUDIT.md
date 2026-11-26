# Audit avant code — module d'évaluation en classe

26/11/2026 · étape 1 du cahier des charges ([CAHIER-DES-CHARGES.md](CAHIER-DES-CHARGES.md), §11)

## Verdict

**Firebase est confirmé** (projet `spark-learning-7d96b`, Hosting + Firestore + Auth), mais le dépôt présente **un écart bloquant** avec la stack recommandée : le projet est sur le **plan gratuit Spark**. Le passage à Blaze avait déjà été refusé (c'est pour cette raison que la connexion par SMS a été retirée). Or le cahier des charges repose entièrement sur des Cloud Functions, qui exigent Blaze. → Question Q1 de [QUESTIONS.md](../../QUESTIONS.md).

## Ce qui sera réutilisé

| Élément existant | Usage dans le module |
| --- | --- |
| Firebase SDK *compat* 10.12.2 chargé par CDN (`index.html`), `js/auth/firebase-config.js` | Même SDK, sans bundler |
| Compte admin (`users/{uid}.role == 'admin'`), `isAdmin()` dans `firestore.rules`, `AuthGuard` | Accès enseignant : aucun nouveau système de compte |
| `js/views/adminPanel.js` (onglets) | Nouvel onglet « Devoirs » : classes, banque, sessions, correction |
| `css/styles.css` (variables, thème sombre, accent `--fed`) | Toute l'interface, sans couleur en dur |
| KaTeX + `renderMath()` (`js/app.js`, macro `\cdotp`) | Énoncés et corrigés |
| `fr(value, decimals)` (`js/data/helpers.js`) | Affichage des valeurs tirées avec la virgule française |
| Routeur pushState (`buildPath` / `_parseRouteParts`) | Routes enseignant |
| CI `firebase-hosting-merge.yml` | Déploiement du front, inchangé |

## Écarts et pièges relevés

1. **Plan Spark** : pas de Cloud Functions et pas d'appel réseau sortant possible côté serveur (bloquant, Q1).
2. **Pas de npm pour l'application** (CLAUDE.md). Avec des fonctions en TypeScript, il faudrait un `functions/` avec npm et tsc. Ce serait une seconde exception scopée, comme celle de `scripts/prerender.js`, à inscrire dans CLAUDE.md.
3. **Hook post-commit** : tout commit qui touche `firestore.rules` **déploie en production, quelle que soit la branche**. Avec « une étape par branche », les nouvelles règles partiront en prod dès le premier commit. Il faut donc des règles uniquement additives (nouvelles collections), testées dans l'émulateur avant le commit.
4. **Authentification anonyme non activée** (aucun `signInAnonymously` dans le code) : à activer dans la console Firebase.
5. **Mode maintenance** : `_checkMaintenance()` bloque tout compte non admin. La page du devoir doit en être exemptée, sinon une maintenance oubliée empêche le devoir.
6. **Collision de noms** : `js/components/evaluation.js` et `js/engines/evaluationEngine.js` existent déjà (onglet « Évaluation » des modules de cours). Le nouveau module utilisera le préfixe `devoir` (`js/devoir/`, collections `devoir_*`).
7. **`storage.rules`** refuse tout. Les images d'énoncé peuvent aller dans `media/devoirs/` (statique, public : acceptable, un énoncé n'est pas secret) ou dans Storage (règles à ouvrir).

## Intégration proposée

- **Écran étudiant : page séparée `devoir.html`** (précédent : `maintenance.html`), servie sur `/devoir`. Elle charge `styles.css`, KaTeX et le SDK Firebase, mais ni la navigation, ni le compagnon, ni les mesures d'audience, ni le bandeau de consentement. On obtient ainsi l'écran épuré demandé, et le RGPD reste minimal (aucun traceur pendant l'épreuve). Il faut une règle de réécriture dans `firebase.json`.
- **Côté enseignant : dans la SPA**, derrière le compte admin (nouvel onglet du panneau admin, puis une vue dédiée pour le tableau de bord en direct et la relecture).
- **Code** : `js/devoir/` (vues étudiant et enseignant, moteur de tirage, mathjs par CDN côté enseignant pour la prévisualisation des variantes), plus `functions/` si Blaze.

## Dossier `Enseignement/BTS FED`

Ce dossier est un dépôt git distinct. Formats : **Typst** (554 `.typ`) et PDF compilés, plus du Markdown pour le pilotage. Sources d'exercices :

| Emplacement | Fichiers `*-contenu.typ` |
| --- | --- |
| `production/exercices/` (S8-A, S8-B) | 5 TD |
| `production/devoirs/` | 20 DS et DM |
| `annales/exercices/` | 15 thèmes d'annales U41 |
| `production/fiches/` | 42 fascicules (exercices intégrés) |

Ce qu'on observe sur un fichier type (`A2-3-bilan-thermique-td-contenu.typ`, 1 294 lignes, 17 exercices) :

- **L'énoncé et le corrigé sont dans le même fichier source**, séparés par `mode == "corrige"` (macros locales `corr()` et `rep()`). Le corrigé est donc disponible en texte, ce qui vaut mieux qu'un PDF.
- **Il n'y a pas de délimiteur standard d'exercice** : les macros sont propres à chaque fichier, avec des imports croisés (DT d'un fascicule, `annales-lib.typ`). Le découpage en exercices doit donc être assisté par l'IA.
- **Les valeurs sont figées**, parfois jusque dans les schémas CeTZ (« 19 °C » dessiné dans `schema-voisins`). Un paramètre qui apparaît dans une figure ne peut pas être tiré au hasard sans redessiner la figure.
- **Beaucoup d'exercices lisent une donnée dans un tableau ou un catalogue** (tableau D.10a, gamme de chaudières Viessmann, isolants). Ces valeurs sont discrètes, alors que le format `min`/`max`/`pas` ne prévoit que des plages continues (Q2).

## Pipeline d'import proposé

> **État au 26/11** : pipeline en place.
> - Les lots sont écrits par Claude Code à partir des sources Typst, sans clé API : la session fait office d'IA d'import.
> - Chaque lot est vérifié par `scripts/devoir-verifier-lot.js` (garde-fou), importé dans l'onglet Devoirs (« Importer un lot »), puis relu exercice par exercice.
> - Lot pilote : chapitre 05, 6 exercices tirés du TD.
> - Les lots vivent dans `BTS FED/production/devoirs-en-ligne/`, car le dépôt Spark Learning est **public**.

**Périmètre (décision du 26/11)** : on n'importe que les 16 chapitres enseignés par Dylan (`Desktop/cours/Dylan`). Sources par chapitre : le fascicule (`production/fiches/<savoir>/<notion>-…-contenu.typ`), le TD s'il existe (05, 06), et les DS existants (DS 0, 1, 2, 6, 16, 17, ainsi que le DS d'acoustique du 12). Le script renseigne `chapitre`.

1. **Script local** `scripts/devoir-import.js <fichier.typ>`, lancé sur le PC de l'enseignant. Il résout les imports Typst, fait découper le fichier en exercices par Claude, puis, pour chaque exercice, envoie l'énoncé et le corrigé en Typst et reçoit un brouillon au format JSON du §11. Claude y signale aussi les figures qui contiennent une valeur paramétrée.
2. **Garde-fou automatique** : le résultat recalculé par mathjs **avec les valeurs d'origine** doit retrouver celui du corrigé Typst. Sinon, le brouillon est marqué « formule à vérifier ».
3. **Figures** : une figure sans valeur paramétrée est exportée en SVG (`typst compile --format svg` sur un petit fichier dédié). Une figure qui contient une valeur paramétrée est soit figée (le paramètre devient constant), soit retirée.
4. **File de validation** dans l'onglet « Devoirs » : on y voit 3 variantes avec leurs corrigés, on ajuste les plages et le barème, puis on accepte l'exercice dans la banque.

Le cahier des charges prévoit un « fichier déposé » dans l'interface. Le script local s'en écarte volontairement : les sources sont du Typst sur le PC, plus fidèles que le texte extrait d'un PDF, et on évite Storage et un traitement serveur des fichiers. Voir Q3.
