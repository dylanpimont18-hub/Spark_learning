# Questions ouvertes — module d'évaluation en classe

Consignées selon le §11.6 du cahier des charges ([docs/evaluation/CAHIER-DES-CHARGES.md](docs/evaluation/CAHIER-DES-CHARGES.md)). Contexte : [docs/evaluation/AUDIT.md](docs/evaluation/AUDIT.md).

## Q1 — Plan Firebase : passer à Blaze ? — ✅ TRANCHÉE (26/11) : Blaze, avec alerte de budget, App Check et plafond de dépense côté Anthropic. Reste à faire par Dylan : activer Blaze et l'alerte dans la console avant MVP-2.

Le projet est sur le plan Spark. Blaze avait été refusé lors de l'abandon de la connexion par SMS. Sans Blaze, il n'y a pas de Cloud Functions.

- **A. Passer à Blaze (recommandé)** : on suit le cahier des charges tel qu'il est écrit. Pour 11 étudiants, le coût hors IA est couvert par le quota gratuit inclus dans Blaze. Il faut poser une alerte de budget dans la console. Le refus précédent portait sur un coût à l'usage (les SMS), ce qui n'est pas le cas ici.
- **B. Rester sur Spark** : c'est faisable, mais l'architecture est plus fragile.
  - Le navigateur de l'enseignant tire toutes les variantes **et les remplacements** à l'ouverture de la session, puis écrit les corrigés dans une collection réservée à l'enseignant.
  - Les règles Firestore font office de serveur : `request.time` pour la fin du temps, un compteur qui ne peut que monter de 1, et un remplacement débloqué seulement si le compteur reste ≤ 2.
  - La pré-correction IA et la purge annuelle passent par un script local lancé depuis le PC de l'enseignant (clé dans une variable d'environnement locale, jamais dans le navigateur).
  - **Ce qu'on perd** : la limitation des tentatives de code (compensée par un code long et une fenêtre d'ouverture courte), des règles beaucoup plus complexes à tester, et une IA qui n'est utilisable que depuis ce PC.

MVP-1 (classes, banque, variantes calculées côté enseignant) n'en dépend pas et peut commencer dans les deux cas.

**Relance du 26/11 :** « passer sur Hostinger pourrait-il faciliter la tâche ? » Réponse : non, sauf refus de principe de Blaze (voir l'échange). Toujours en attente.

## Q2 — Paramètres discrets — ✅ TRANCHÉE (26/11) : oui, listes et lignes de catalogue

Beaucoup d'exercices FED lisent une valeur dans un tableau ou un catalogue (D.10a, gamme de chaudières, λ d'isolants). Proposition : ajouter au format un paramètre de type liste, `{ "nom": "lambda", "valeurs": [0.022, 0.032, 0.040] }`, éventuellement couplé à d'autres valeurs (une ligne de catalogue = plusieurs paramètres tirés ensemble). À confirmer.

## Q3 — Import : script local ou dépôt dans l'interface ? — ✅ TRANCHÉE (26/11) : script local sur les .typ

Le cahier des charges prévoit un dépôt de fichier dans l'interface. Je propose un script local qui lit directement les `.typ`. C'est plus fidèle que l'extraction d'un PDF, et ça ne demande ni Storage ni traitement côté serveur. Les brouillons arrivent ensuite dans la file de validation de l'interface. À confirmer.

## Q4 — Modèle Anthropic et budget mensuel maximum

Ordre de grandeur : 11 étudiants × 3 exercices = 33 appels par devoir, plus les appels d'import. Le modèle sera une variable de configuration. Budget plafond à fixer.

## Q5 — Appareils en classe — ✅ TRANCHÉE (26/11) : postes du lycée (reste à vérifier : filtrage réseau)

S'agissait-il de postes du lycée, d'ordinateurs personnels ou de téléphones ? Sur téléphone, une notification ou la mise en veille déclenche `visibilitychange` : le délai de 2 s ne suffira pas à éviter les faux positifs. Le réseau du lycée filtre-t-il `*.googleapis.com` / `firestore.googleapis.com` ?

## Q6 — Annulation d'un incident (faux positif)

Quand l'enseignant annule un incident, l'exercice d'origine est rétabli. Mais que devient l'exercice de remplacement, déjà commencé ? Proposition : il est conservé dans la copie avec le statut « remplacement annulé » (non noté par défaut, comme un exercice invalidé), et l'étudiant reprend l'exercice d'origine avec ses réponses archivées.

## Q7 — Texte d'information des étudiants

Le cahier des charges demande une information avant la première évaluation. Je peux rédiger la mention (journal anti-triche, correction préparée par IA sous contrôle de l'enseignant, durée de conservation d'une année scolaire) pour relecture.
