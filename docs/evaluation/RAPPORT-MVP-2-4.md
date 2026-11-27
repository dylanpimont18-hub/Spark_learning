# Rapport — MVP-2, MVP-3 et MVP-4 du module de devoir en classe

Nuit du 26 au 27 novembre 2026. Référence : [CAHIER-DES-CHARGES.md](CAHIER-DES-CHARGES.md).

## 1. État

| Étape | Branche | État | Critère d'acceptation (§9) |
| --- | --- | --- | --- |
| MVP-2 — Passage en classe | `devoir-mvp2` | Terminée et testée | 11 étudiants simulés passent un devoir de bout en bout dans Chrome ; une reconnexion reprend la copie au même exercice, réponses comprises |
| MVP-3 — Anti-triche | `devoir-mvp3` | Terminée et testée | Un vrai changement d'onglet de plus de 2 s remplace l'exercice ; un vrai Ctrl+V est refusé et journalisé |
| MVP-4 — Correction IA | `devoir-mvp4` | Terminée et testée **avec une IA simulée** | Une copie est pré-corrigée, modifiée puis validée ; l'étudiant ne voit ni note ni correction |

Chaque branche part de la précédente. Rien n'est poussé, rien n'est fusionné dans `main`, aucune fonction ni aucun hébergement n'est déployé.

**Deux choses à savoir avant tout :**

1. **Les règles Firestore sont déjà en production.** Le hook post-commit les a publiées au commit `1929359` (branche `devoir-mvp2`), après le passage des 15 tests de règles dans l'émulateur. Seuls des blocs `devoir_*` ont été ajoutés ; ils n'ouvrent qu'une lecture : celle de sa propre copie par l'étudiant. Aucune écriture cliente n'est permise. Sans les Cloud Functions, ces règles sont inertes.
2. **Aucun appel réel à l'API Anthropic n'a été fait** (pas de clé, comme demandé). Le circuit est testé contre un faux serveur local. Le premier vrai appel reste à vérifier par vous : voir le geste 8 de la section 6.

## 2. Ce qui marche

**Passage en classe (MVP-2)**

- L'enseignant crée une session dans le panneau admin (onglet Devoirs, « Sessions ») : classe, exercices, durée, nombre d'exercices, quota de remplacements. Un avertissement apparaît si la sélection ne couvre pas les remplacements.
- À l'ouverture, la session reçoit un code de 6 caractères. L'étudiant va sur `/devoirs`, saisit le code et choisit son nom. Un nom déjà pris est grisé.
- Le serveur tire 3 exercices par étudiant, en priorité ceux qu'il n'a jamais faits, tire les valeurs et calcule le corrigé. Le corrigé et le barème restent dans une collection que l'étudiant ne peut pas lire.
- Réponses en blocs (méthode, calcul, résultat, unité), barre de symboles, brouillon enregistré toutes les 10 s et à chaque changement de bloc. En cas de coupure réseau, la saisie reste sur le poste et repart au retour du réseau.
- Le minuteur affiche l'heure de fin fixée par le serveur. À zéro, la copie est rendue automatiquement. Le serveur refuse toute écriture après la fin, et refuse un rendu « automatique » demandé trop tôt par un poste dont l'horloge avance.
- Reconnexion : après un rafraîchissement ou un onglet fermé, la copie reprend au même exercice. Sur un autre poste, l'enseignant « libère le nom » et l'étudiant reprend sa copie.
- Tableau de bord en direct : état, exercice en cours, blocs remplis, temps restant ; prolonger, fermer la session, libérer un nom ; journal de la session.

**Anti-triche (MVP-3)**

- La page signale ses sorties (onglet masqué, fenêtre inactive). Le serveur mesure lui-même la durée entre le départ et le retour.
- Moins de 2 s : rien ne change, l'absence est journalisée comme brève. Au-delà : l'exercice en cours est invalidé et remplacé, deux fois au plus. À la sortie suivante, la copie est verrouillée.
- Les réponses de l'exercice invalidé sont conservées. Le message affiché à l'étudiant est factuel, sans accusation.
- Collage et glisser-déposer refusés dans les réponses, comptés et journalisés.
- L'enseignant peut annuler le dernier incident (l'exercice d'origine revient avec ses réponses), déverrouiller une copie, ou remplacer lui-même un exercice.

**Correction (MVP-4)**

- Bouton « Corriger » sur chaque session. Rien ne part vers l'IA sans clic de l'enseignant.
- `runPreCorrection` appelle l'API Anthropic depuis le serveur seulement : clé lue dans le secret `ANTHROPIC_API_KEY`, modèle `claude-sonnet-5-5` par défaut, prompt de la section 6 repris tel quel, sortie contrainte par le schéma de la section 6.
- Contrôles du serveur : un seul nouvel essai si la sortie est invalide, puis statut « erreur IA » ; points bornés au barème ; note recalculée et écart signalé si elle ne correspond pas à la somme des critères.
- Écran de relecture copie par copie : réponse et corrigé à gauche, correction modifiable à droite, proposition de l'IA rappelée sous chaque note. Les copies à confiance basse ou avec alerte passent en tête.
- Chaque modification garde la proposition de l'IA et l'état précédent. La validation calcule la note sur 20, arrondie au demi-point.
- « Corriger sans l'IA » prépare les fiches pour une notation entièrement manuelle (clé absente, budget atteint, panne).

**Garanties vérifiées par des tests**

- Un étudiant ne lit ni corrigé, ni barème, ni note, ni fiche de correction, ni la copie d'un autre, ni la banque, ni les classes. Il n'écrit nulle part directement.
- L'enseignant lit tout, mais n'écrit pas dans les collections pilotées par le serveur.
- Temps, tirage, quota, statuts et notes sont décidés par les Cloud Functions.
- La requête envoyée à l'IA ne contient ni nom ni identifiant d'étudiant, seulement un code interne. Un étudiant qui écrit son nom dans sa réponse l'envoie tout de même : c'est sa copie.

## 3. Sortie des tests

Commande : `node scripts/devoir-emulateurs.js test` sur la branche `devoir-mvp4` — **113 tests réussis, 0 échec**. Les 33 tests de `node scripts/test-devoir-engine.js` passent toujours.

| Suite | Tests | Ce qu'elle vérifie |
| --- | --- | --- |
| `ia` | 13 | Prompt, schéma, contrôles de la sortie, nouvel essai (sans émulateur) |
| `regles` | 15 | Règles Firestore dans l'émulateur |
| `fonctions` | 57 | Cloud Functions par leur API (23 pour le MVP-2, 18 pour le MVP-3, 16 pour le MVP-4) |
| `e2e` | 28 | Puppeteer, vrais navigateurs (12, 8 et 8) |

Le délai de perte de focus est ramené à 500 ms dans la suite `fonctions` pour qu'elle reste rapide ; la suite `e2e` utilise le délai par défaut de 2 s.

```text
══ ia ══
Prompt et schéma (cahier des charges §6)
  ok  le prompt système reprend les 9 règles, dont l'ignorance des consignes de l'étudiant
  ok  le schéma de sortie porte tous les champs de la section 6
  ok  le message envoie énoncé, valeurs, corrigé, barème et réponse, identifiés par un code interne
Contrôles de la sortie
  ok  une sortie conforme est acceptée telle quelle
  ok  sont refusés : JSON invalide, champ manquant, critère inventé, critère oublié, énumération inconnue
  ok  un bloc de code Markdown autour du JSON est toléré
  ok  note différente de la somme des critères : recalculée, écart signalé, copie prioritaire
  ok  points au-dessus du maximum : ramenés au barème, jamais plus que la note maximale
  ok  confiance basse ou alerte : copie mise en tête de la relecture
  ok  réponse entièrement vide : proposition à zéro sans appel au modèle
Nouvel essai
  ok  sortie invalide : un seul nouvel essai, qui peut réussir
  ok  deux sorties invalides : abandon avec le statut « erreur IA », pas de 3e appel
  ok  panne de l'API : erreur rapportée sans insister
══ regles ══
Étudiant
  ok  lit sa propre copie
  ok  sa copie ne contient ni corrigé, ni barème, ni valeurs tirées, ni note
  ok  ne lit pas la copie d'un autre étudiant
  ok  ne peut ni lister ni interroger les copies
  ok  ne lit pas la partie privée de sa copie (valeurs, corrigé, barème)
  ok  ne lit ni la banque d'exercices, ni les classes, ni les sessions
  ok  ne lit ni les notes, ni les corrections, ni le journal d'événements
  ok  ne lit ni les codes de session, ni l'historique, ni les compteurs de tentatives
  ok  n'écrit nulle part directement (copie, réponses, événements, corrections, session)
Visiteur sans session
  ok  un anonyme entré dans aucune session ne lit aucune copie
  ok  un visiteur non connecté ne lit rien du module
Enseignant
  ok  lit tout : session, copies, partie privée, événements, corrections, banque, classes
  ok  n'écrit pas directement dans les collections pilotées par le serveur
  ok  garde la main sur la banque et les classes (MVP-1 inchangé)
Règles existantes (non modifiées)
  ok  config reste lisible publiquement, users reste protégé
══ fonctions ══
MVP-2 — sessions
  ok  seul l'enseignant crée et pilote une session
  ok  valeurs par défaut du cahier des charges : 3 exercices, 60 min, 2 remplacements, 2 s
  ok  avertit si la sélection ne couvre pas les remplacements ; refuse si elle est trop petite
MVP-2 — entrée
  ok  code invalide, ou session encore en brouillon : même message neutre
  ok  le code donne la liste des noms de la classe, aucun pris
  ok  11 étudiants entrent : 3 exercices distincts chacun, variantes tirées par le serveur
  ok  un nom déjà pris est signalé et refusé à un autre poste
MVP-2 — brouillon
  ok  le brouillon est enregistré, versionné, et la copie passe « en cours »
  ok  l'historique de brouillon garde les 5 dernières versions, côté enseignant seulement
  ok  refus : copie d'un autre, bloc inconnu, texte trop long, exercice étranger
MVP-2 — reconnexion
  ok  même navigateur : la reconnexion reprend la même copie, réponses comprises
  ok  autre poste : après libération du nom, la copie est reprise là où elle en était
MVP-2 — minuteur et rendu (heure du serveur)
  ok  prolonger ajoute des minutes aux copies en cours
  ok  rendu anticipé : copie figée, plus aucune modification
  ok  un rendu « automatique » demandé avant l'heure est refusé par le serveur
  ok  temps écoulé : l'enregistrement est refusé et la copie rendue automatiquement
  ok  rendu à zéro : la saisie arrivée dans la tolérance réseau est gardée, statut rendue_auto
  ok  étudiant parti sans rendre : le tableau de bord déclenche le rendu automatique
  ok  reconnexion après la fin du temps : la copie est rendue, pas rouverte
MVP-2 — passage complet
  ok  les 11 étudiants passent le devoir de bout en bout
  ok  fermeture : le code ne fonctionne plus, les copies restantes sont rendues
  ok  tirage : priorité aux exercices jamais faits lors d'un devoir précédent
  ok  limitation des tentatives : 5 codes faux bloquent ce poste, même avec le bon code
MVP-3 — perte de focus
  ok  retour avant le délai : aucun incident, mais l'absence brève est journalisée
  ok  absence au-delà du délai : l'exercice en cours est invalidé et remplacé
  ok  la copie de l'étudiant n'expose toujours ni corrigé ni barème après un remplacement
  ok  on ne peut plus écrire dans un exercice invalidé
  ok  2e incident : nouveau remplacement ; 3e incident : copie verrouillée, plus de remplacement
  ok  copie verrouillée : ni enregistrement ni rendu par l'étudiant
  ok  l'enseignant déverrouille la copie ; une nouvelle sortie la verrouille de nouveau
MVP-3 — annulation d'un incident
  ok  l'incident le plus récent s'annule en premier ; le verrouillage annulé rouvre la copie
  ok  remplacement annulé : l'exercice d'origine redevient actif, le remplaçant est conservé non noté
  ok  annulation après le rendu : l'exercice invalidé est rétabli comme rendu
MVP-3 — collage, cas limites
  ok  un collage ou un glisser-déposer bloqué est journalisé et compté
  ok  refus : événement sur la copie d'un autre, type inconnu, fonctions de l'enseignant
  ok  signal de départ perdu : la durée déclarée au retour suffit à déclencher l'incident
  ok  onglet quitté puis fermé : l'absence est soldée à la reconnexion
  ok  reconnexion simple (plantage, rafraîchissement) : aucun incident
  ok  l'enseignant remplace un exercice à la main, sans toucher au compteur
  ok  sélection épuisée : un exercice déjà vu est réutilisé avec de nouvelles valeurs
  ok  fermeture : une copie verrouillée le reste, ses exercices sont figés
MVP-4 — pré-correction par l'IA (simulée)
  ok  seul l'enseignant lance, modifie et valide ; une copie en cours est refusée
  ok  lancement manuel : une copie est pré-corrigée, sortie JSON conforme à la section 6
  ok  requête à l'API : clé du secret, modèle par défaut, prompt du cahier des charges, aucun nom d'étudiant
  ok  sortie invalide : un seul nouvel essai ; deux échecs → statut « erreur IA » ; réponse vide → aucun appel
  ok  contrôles du serveur : note recalculée et écart signalé ; confiance basse mise en tête
  ok  relancer ne rappelle pas l'IA pour ce qui est déjà pré-corrigé (budget)
  ok  l'étudiant ne voit rien : ni fiche, ni note, ni statut de correction
MVP-4 — modification manuelle et validation
  ok  modification manuelle : la note change, la proposition de l'IA est conservée
  ok  refus : points hors barème, critère inconnu, fiche inexistante
  ok  validation : note finale sur 20 arrondie au demi-point, fiches validées
  ok  après validation, l'étudiant ne voit toujours rien (pas de publication dans le MVP)
  ok  « erreur IA » : validation refusée tant que l'exercice n'est pas corrigé à la main
  ok  arrondi au demi-point : 16,67 → 16,5
  ok  exercice invalidé : non noté par l'IA ; l'enseignant décide de sa prise en compte
  ok  une copie validée n'est pas pré-corrigée de nouveau ; une fiche modifiée n'est jamais écrasée
  ok  correction sans IA : fiches préparées, aucun appel, puis notation à la main et validation
══ e2e ══
MVP-2 — passage en classe dans le navigateur
  ok  l'enseignant crée une session dans le panneau admin et obtient un code
  ok  un code faux affiche un message neutre
  ok  11 étudiants entrent par code et nom, et voient 3 exercices, un minuteur, 4 blocs
  ok  l'énoncé est rendu (formules KaTeX) et ne contient ni corrigé ni barème
  ok  un nom pris est grisé pour un autre poste
  ok  chaque étudiant compose : le brouillon est enregistré automatiquement
  ok  le tableau de bord suit la classe en direct
  ok  reconnexion : après un rafraîchissement, la copie reprend au même exercice, réponses comprises
  ok  reconnexion : onglet fermé puis rouvert, la saisie non encore envoyée est retrouvée
  ok  rendu anticipé : écran de confirmation seul, sans note ni corrigé
  ok  fin du temps : la copie du dernier étudiant est rendue automatiquement
  ok  11 copies rendues ; l'enseignant ferme la session
MVP-3 — anti-triche dans le navigateur (délai par défaut : 2 s)
  ok  nouvelle session, deux étudiants entrent
  ok  un passage de moins de 2 s sur un autre onglet ne change rien, mais il est journalisé
  ok  un changement d'onglet de plus de 2 s remplace l'exercice en cours
        (collage réel, Ctrl+V)
  ok  un collage est refusé et journalisé
  ok  le tableau de bord affiche les incidents et le collage bloqué
  ok  l'enseignant annule l'incident : l'étudiant retrouve son exercice et ses réponses
  ok  3 sorties de plus de 2 s : 2 remplacements, puis copie verrouillée ; l'enseignant déverrouille
  ok  rafraîchir la page n'est pas compté comme une sortie
MVP-4 — correction dans le navigateur (IA simulée, aucun appel réel)
  ok  l'enseignant ouvre la correction de la session : 11 copies à pré-corriger, rien n'est lancé tout seul
  ok  lancement manuel : les 11 copies sont pré-corrigées, sans envoyer le nom des étudiants
  ok  la copie à confiance basse est en tête de la liste de relecture
  ok  écran de relecture : réponse de l'étudiant à gauche, proposition de l'IA modifiable à droite
  ok  modification manuelle : la note change, la proposition de l'IA reste affichée et enregistrée
  ok  validation : note finale sur 20, enregistrée côté enseignant
  ok  l'étudiant ne voit rien avant publication : ni note, ni correction, ni corrigé
  ok  navigation entre les copies, puis retour à la liste : la copie validée affiche sa note
113 test(s) réussi(s), 0 échec(s).
```

## 4. Décisions prises seul

Chaque fois, l'option la plus simple et la plus sûre. Tout se change sans refonte.

**Passage en classe**

1. **Le temps de chaque étudiant démarre quand il confirme son nom**, et non à l'ouverture de la session. Un étudiant en retard a donc sa durée complète. « Prolonger » ajoute des minutes à toutes les copies en cours.
2. **Région des fonctions : `europe-west1`** (Belgique).
3. **Identité de l'étudiant** : connexion anonyme dans une application Firebase séparée de celle du site. Votre session admin et la page `/devoirs` ne se mélangent pas dans un même navigateur.
4. **Code de session** : 6 caractères, sans I, L, O, 0 ni 1. **Limitation** : 5 codes faux par poste et 30 par adresse IP sur 10 minutes (seuil large, car toute la classe sort par la même adresse).
5. **Pas de fonction planifiée.** Une copie dont le temps est écoulé est rendue quand quelqu'un la touche : l'étudiant, le tableau de bord, la fermeture de la session ou la pré-correction. Cela évite Cloud Scheduler.
6. **Le SDK Functions n'est chargé que pour l'enseignant et la page étudiant.** Les visiteurs du site ne le téléchargent pas.

**Anti-triche**

7. **Annulation d'un incident (question Q6, restée sans réponse)** : l'exercice d'origine est rétabli, le remplaçant reste dans la copie avec le statut « remplacement annulé », non noté. Seul l'incident le plus récent d'une copie s'annule ; pour en annuler deux, on remonte dans l'ordre inverse.
8. **Déverrouiller ne remet pas le compteur à zéro** : une nouvelle sortie reverrouille la copie. Pour effacer un incident, il faut l'annuler.
9. **Un rafraîchissement n'est pas une sortie de page.** Une reconnexion n'entraîne aucun remplacement (un plantage est légitime), mais la durée du silence est inscrite au journal.
10. **Un onglet quitté puis fermé** est soldé à la reconnexion : si l'absence dépasse le délai, l'incident est compté.
11. **Sélection épuisée** : le remplacement réutilise un exercice déjà vu, avec de nouvelles valeurs, jamais un exercice encore en cours dans la copie.

**Correction**

12. **Pas de température dans la requête.** Le cahier des charges demande une « température basse », mais `claude-sonnet-5-5` refuse ce paramètre (erreur 400). La régularité vient du schéma imposé et des contrôles du serveur.
13. **Un refus du modèle** donne le statut « erreur IA », sans bascule automatique vers un autre modèle.
14. **Une réponse entièrement vide n'est pas envoyée à l'IA** : zéro partout, alerte « réponse vide », aucun coût.
15. **Garde-fou de dépense** : 300 appels par jour au plus (`DEVOIR_IA_APPELS_MAX_PAR_JOUR`), en plus du plafond à régler chez Anthropic.
16. **Modèle et plafond sont des variables d'environnement** (`functions/.env`, modèle dans [`functions/.env.example`](../../functions/.env.example)) et non des « paramètres » Firebase, qui posent une question au clavier à chaque lancement.
17. **Note finale** : somme des points des exercices pris en compte, divisée par la somme des maximums, sur 20, arrondie au demi-point. Un exercice invalidé n'est pas compté par défaut ; une case à cocher sur sa fiche permet de l'inclure.
18. **Modifier une fiche validée annule la validation** de la copie : il faut valider de nouveau.
19. **Relancer la pré-correction ne rappelle jamais l'IA** pour un exercice déjà pré-corrigé, et n'écrase jamais une fiche que vous avez modifiée.

**Technique**

20. **Exercices de démonstration** dans [`scripts/lib/devoir-demo.js`](../../scripts/lib/devoir-demo.js) : six exercices génériques écrits pour les tests. Aucun exercice ni corrigé de votre banque n'est entré dans ce dépôt.
21. **Émulateurs** : la bascule ne se fait que sur `localhost:5055`, avec un projet `demo-spark-devoir` qui ne peut pas atteindre la production.
22. **Faux serveur d'IA** : l'adresse de test n'est lue que dans l'émulateur (`FUNCTIONS_EMULATOR`). En production, la variable est ignorée.
23. `firebase.json` : bloc `functions`, bloc `emulators`, réécriture `/devoirs` vers `devoir.html`, et `functions/**` exclu de l'hébergement.
24. `CODEBASE_MAP.md`, `contenu.md` et ce rapport ne sont à jour que sur `devoir-mvp4`.

## 5. Ce qui n'a pas pu être fait, et les limites connues

- **Vrai appel à l'API Anthropic** : jamais exécuté. Le code compile contre le SDK officiel et passe contre le faux serveur, mais le format exact de la sortie structurée n'est prouvé qu'au premier appel réel.
- **Vue « exercice par exercice »** de la relecture (§12) : non faite. Seule la vue copie par copie existe, comme demandé pour cette nuit.
- **Hors périmètre, non commencé** : `publishFeedback` et le retour à l'étudiant (V2), exports CSV et PDF (V2), mode Dys (V2), suivi des erreurs et `purgeOldData` (V3). Les erreurs relevées sont déjà conservées dans chaque fiche de correction.
- **App Check** (prévu en Q1) : non activé, il demande une clé reCAPTCHA créée dans la console.
- **Médias d'énoncé** : seules les images (`type: image`) sont affichées ; un tableau ou un graphique n'affiche que sa légende.
- **Anti-triche dissuasif, pas absolu**, comme le dit le cahier des charges : un navigateur modifié peut taire ses sorties. Fermer l'onglet puis le rouvrir ne compte pas comme incident ; la reconnexion et la durée du silence apparaissent au journal.
- **Faux positifs possibles** : une notification système ou un clic hors de la fenêtre déclenche une perte de focus. Le bouton « Annuler le dernier incident » est là pour cela.
- **Non testé sur les postes du lycée** : filtrage de `*.googleapis.com` et `*.cloudfunctions.net`, lenteur du réseau.
- **Questions encore ouvertes** dans `QUESTIONS.md` : Q4 (budget), Q6 (voir décision 7), Q7 (mention d'information, brouillon en section 8).

## 6. Gestes à faire, dans l'ordre

1. **Lire ce rapport et essayer le module en local** (section 7).
2. **Passer le projet en Blaze** : console Firebase → projet `spark-learning-7d96b` → Utilisation et facturation → Modifier le forfait. Poser tout de suite une **alerte de budget** (5 € par mois suffisent largement hors IA).
3. **Activer l'authentification anonyme** : console Firebase → Authentication → Méthode de connexion → Anonyme → Activer.
4. **Créer une clé d'API Anthropic** sur console.anthropic.com, dans un espace de travail réservé au module, puis l'enregistrer :
   ```
   firebase functions:secrets:set ANTHROPIC_API_KEY --project spark-learning-7d96b
   ```
   La clé se colle dans le terminal. Elle ne va ni dans le dépôt ni dans le navigateur.
5. **Fixer le budget IA** : console Anthropic → Limits → plafond mensuel de dépense. Ordre de grandeur estimé, à confirmer sur vos premières copies : moins de 2 € par devoir de 11 copies. Un plafond de 10 € par mois laisse de la marge.
6. **Remettre la mention d'information aux étudiants** avant le premier devoir (brouillon en section 8, à relire).
7. **Valider le code**, puis déployer les fonctions depuis `devoir-mvp4` :
   ```
   git checkout devoir-mvp4
   npm --prefix functions install
   firebase deploy --only functions --project spark-learning-7d96b
   ```
   Au premier déploiement, Firebase propose une règle de nettoyage des images de conteneur : accepter.
8. **Faire un vrai essai de pré-correction** sur une copie de test avant tout devoir réel, et vérifier dans les journaux (`firebase functions:log --only runPreCorrection`) qu'il n'y a pas d'erreur 400.
9. **Publier le front** en fusionnant dans `main` (le déploiement de l'hébergement est automatique) :
   ```
   git checkout main
   git merge devoir-mvp4
   git push origin main
   ```
   Les règles Firestore sont déjà en ligne. Les balises de `index.html` sont déjà passées à `?v=80`.
10. **Avant le premier devoir** : importer la banque et créer la classe dans l'onglet Devoirs (MVP-1), puis faire un devoir blanc sur un poste du lycée pour vérifier le réseau.

## 7. Essayer le module en local en 5 minutes

Tout tourne sur ce PC, avec des données fictives. Java est déjà installé dans `%USERPROFILE%\tools\jdk` ; le script l'ajoute lui-même au PATH.

1. Dans un terminal, à la racine du dépôt, sur `devoir-mvp4` :
   ```
   node scripts/devoir-emulateurs.js
   ```
   Attendre le cadre « Module devoir — essai local » (30 secondes environ).
2. **Enseignant** : ouvrir `http://127.0.0.1:5055/connexion`, e-mail `prof@demo.test`, mot de passe `devoir-demo-2026`. Aller sur `http://127.0.0.1:5055/admin`, onglet « Devoirs », puis « Sessions ».
3. « + Nouvelle session » : un titre, « Tout cocher », « Créer la session », puis « Ouvrir la session ». Le code s'affiche en grand.
4. **Étudiant** : ouvrir `http://127.0.0.1:5055/devoirs` dans une fenêtre de navigation privée. Saisir le code, choisir un nom, composer. Une deuxième fenêtre privée d'un autre navigateur fait un deuxième étudiant.
5. **Anti-triche** : changer d'onglet plus de 2 secondes, puis revenir. Essayer un Ctrl+V dans une réponse. Regarder le tableau de bord.
6. **Correction** : rendre la copie, revenir à « ← Sessions », cliquer « Corriger », puis « Lancer la pré-correction IA ». L'IA est simulée : elle donne tous les points d'un bloc rempli, zéro sinon. « Relire », modifier une note, « Valider la copie ».
7. Ctrl+C dans le terminal arrête tout. Les données sont effacées à chaque lancement.

L'interface des émulateurs (`http://127.0.0.1:4000`) montre les documents Firestore en direct.

Tests : `node scripts/devoir-emulateurs.js test` (tout, 4 minutes environ), ou `test regles`, `test fonctions`, `test e2e`, `test ia`.

## 8. Mention d'information aux étudiants — brouillon à relire

> **Devoirs en ligne sur sparklearning.fr — ce qui est enregistré**
>
> Pendant un devoir, le site enregistre : votre nom tel qu'il figure sur la liste de la classe, vos réponses et leurs versions successives, l'heure de vos actions, vos sorties de la page (changement d'onglet ou de fenêtre, avec leur durée) et vos tentatives de collage.
>
> Ces informations servent à noter le devoir et à garantir que chacun compose dans les mêmes conditions. Si vous quittez la page plus de 2 secondes, l'exercice en cours est remplacé par un autre ; à la troisième fois, votre copie est mise en attente et votre enseignant vient vous voir. Il peut annuler un incident qui n'en était pas un.
>
> Une intelligence artificielle (Claude, de la société Anthropic) prépare une proposition de correction. Vos réponses lui sont transmises sous un code, sans votre nom. Votre enseignant relit, modifie et valide chaque note : aucune note n'est attribuée par l'IA seule.
>
> Ces données ne sont lisibles que par votre enseignant. Elles sont conservées pendant l'année scolaire, puis supprimées. Vous pouvez demander à les consulter ou à les faire rectifier auprès de votre enseignant.

La suppression automatique de fin d'année appartient à l'étape V3 : d'ici là, elle se fait à la main.
