# Ligne éditoriale « maths × vie réelle » — conception

**Date** : 2026-08-27
**Statut** : validé, non implémenté

## 1. Ce qu'on construit

Une seconde ligne éditoriale pour `tiktok/` : **une vidéo par jour**, publiée sur TikTok et YouTube Shorts, qui relie une notion mathématique à un sujet qui intéresse un adolescent — jeu vidéo, sport, argent, musique, réseaux sociaux.

Elle coexiste avec la ligne existante sans s'y mêler : celle-ci part d'un module de `js/data/` et en tire trois angles par jour ; la nouvelle part du sujet et ne produit qu'une vidéo. Les deux partagent le moteur de rendu, rien d'autre.

Le narrateur est **Lumen**, le loup — persona `adulte` de `config.PERSONAS`, voix `fr-FR-RemyMultilingualNeural`, sprites dans `tiktok/assets/sparky/adulte/`. Sparky garde la ligne des modules.

## 2. Décisions actées, et pourquoi

**On part du sujet, on rattache le module ensuite.** Partir d'un module et lui plaquer une accroche « jeune » produit du cours déguisé. Partir du sujet donne un vrai potentiel d'accroche, au prix du décrochage : plus rien ne ramène vers le site. Le rattachement a posteriori récupère ce lien.

**Le module rattaché ne sert qu'au lien YouTube.** Sur TikTok un lien n'est pas cliquable, donc le CTA parlé reste générique et nomme le site, comme les trois angles actuels. Sur YouTube le lien cliquable vient du champ `url` du JSON de métadonnées, pas du texte prononcé. Conséquence : on écrit d'abord, on rattache après, et le workflow n8n qui consomme déjà `url` n'a rien à changer.

**L'IA choisit le sujet, le pipeline impose la famille.** Le risque, quand l'IA choisit seule, n'est pas la qualité d'un sujet isolé : c'est l'effondrement de la diversité au bout de deux semaines. La famille est donc imposée par rotation déterministe, l'IA n'invente que dedans. Aucune liste à maintenir, étalement garanti.

**Aucune donnée périssable.** Un second appel au même modèle attrape l'invraisemblable, pas le plausible-mais-périmé : il partage les mêmes connaissances et la même date de coupure que le rédacteur. On lui retire donc le travail impossible. Le rédacteur a interdiction d'affirmer un prix, une statistique d'actualité, un nombre d'abonnés ou un classement ; seuls les faits structurels stables sont autorisés — un match dure 90 minutes, un panier à trois points vaut 3 points, un jeu de cartes en compte 52. Le vérificateur tranche « ce chiffre est-il du genre à périmer ? », question fiable, au lieu de « ce chiffre est-il vrai aujourd'hui ? », question insoluble.

**Un sujet qui résiste est abandonné, pas réparé.** Deux tentatives, puis le sujet est marqué brûlé et on passe au suivant — même raisonnement que le `--lot` de `main.py` : un élément qui coince ne doit pas emporter la nuit.

## 3. Flux d'une vidéo

```
sujets.choisir()            famille du jour + sujet + notion, hors des sujets déjà sortis
   ↓
culture.ecrire()            hook / body / cta, narrateur Lumen
   ↓
culture.verifier_faits()    2ᵉ appel, température 0 — affirmations sur le monde réel
culture.verifier_calculs()  3ᵉ appel, température 0 — arithmétique
   ↓                        reproches réinjectés, 2 tentatives, sinon sujet brûlé
culture.rattacher_module()  score sur le catalogue, pour le lien YouTube
   ↓
voix → sous-titres → capture → montage        modules existants, persona `adulte`
   ↓
livraison → Drive « TikTok Spark Learning — Vie réelle »
```

## 4. Fichiers

### Nouveaux

**`tiktok/culture.py`** — entrée en ligne de commande, à côté de `publier.py`.
- `--lot N` : produire N vidéos d'affilée. Le pipeline ne date rien : il produit un stock, et c'est le workflow n8n qui en publie une par jour. `--lot 30` donne donc un mois d'avance.
- `--sujet "..."` : forcer un sujet, pour tester
- `--famille X` : forcer la famille
- `--sans-verification` : sauter les deux contrôles, pour déboguer
- `--etat` : afficher ce qui a déjà été produit

**`tiktok/pipeline/sujets.py`** — choix du sujet et mémoire.
- `FAMILLES` : `jeu-video`, `sport`, `argent`, `musique`, `reseaux`, `nourriture`, `transport`, `mode`
- `famille_du_jour(date)` : rotation déterministe, `index = jours_depuis_epoch % len(FAMILLES)`
- `charger(chemin)` / `enregistrer(chemin, memoire)` : `sujets.json`, calqué sur `memoire.py`
- `deja_sortis(memoire, limite=60)` : les N derniers sujets, pour la consigne d'exclusion
- `choisir(client_ia, modele, famille, exclusions)` : un appel, renvoie `{sujet, notion, pourquoi}`. Un sujet renvoyé malgré la liste d'exclusion est rejeté et l'appel refait, deux fois au plus ; à la troisième, on prend la famille suivante plutôt que d'échouer.

**`tiktok/pipeline/culture.py`** — rédaction et contrôles.
- `SYSTEME_REDACTION` : reprend les contraintes de prononçabilité de `scripts.SYSTEME` (aucun symbole, décimales à la virgule, rien d'imprononçable) et y ajoute l'interdiction des données périssables
- `ecrire(client_ia, modele, sujet, notion, reproches=None)` : renvoie `{hook, body, cta, titre, hashtags}`
- `SYSTEME_FAITS` / `verifier_faits(script, client_ia, modele)` : renvoie une liste de reproches
- `SYSTEME_CALCULS` / `verifier_calculs(script, client_ia, modele)` : idem pour l'arithmétique
- `rattacher_module(modules, sujet, notion)` : renvoie le module le mieux classé au-dessus d'un seuil, ou `None`
- `produire(...)` : orchestration, boucle de reprise, abandon après 2 tentatives

**`tiktok/sujets.json`** — mémoire, gitignorée comme `production.json`.

### Modifiés

**`tiktok/config.py`** : `DOSSIER_DRIVE_CIBLE_CULTURE`, `MEMOIRE_SUJETS`, `SEUIL_RATTACHEMENT`.

**`.gitignore`** : ajouter `tiktok/sujets.json`.

### Inchangés

`main.py`, `pipeline/voix.py`, `pipeline/soustitres.py`, `pipeline/capture.py`, `pipeline/montage.py`, `pipeline/livraison.py`, `pipeline/verification.py`, `pipeline/scripts.py`, `pipeline/catalogue.py`, `pipeline/memoire.py`, `publier.py`.

`verification.py` n'est pas adapté mais doublé. Son postulat — « le contenu du module est déjà relu, on ne contrôle que ce que le modèle a inventé » — ne tient plus quand tout est inventé. Le tordre le rendrait faux pour son usage d'origine. `culture.py` écrit donc ses propres consignes en réutilisant `extraire_json()` et `interpreter()`.

## 5. Rattachement du module

`catalogue.py` expose déjà `_score(module, requete)` et `_mots_significatifs(requete)`. On les emploie tels quels sur la concaténation du sujet et de la notion, et on retient le meilleur module au-dessus de `SEUIL_RATTACHEMENT`.

Aucun module au-dessus du seuil n'est pas une erreur : le champ `url` reste vide, la description YouTube tombe sur la page d'accueil. Le rattachement ne doit jamais bloquer une production.

`SEUIL_RATTACHEMENT` n'a pas de valeur théorique : `_score()` renvoie un nombre dont l'échelle dépend du catalogue. On le calibre à l'implémentation en scorant une dizaine de sujets de familles différentes contre les 149 modules, et on retient la valeur qui écarte les rattachements manifestement hors sujet. La valeur choisie est écrite dans `config.py` avec le relevé qui l'a justifiée.

## 6. Publication

Deux dossiers Drive : `TikTok Spark Learning — Vie réelle` et `TikTok Spark Learning — Vie réelle — Publiés`.

Un workflow n8n cloné de `bx1hubE3ShEmzubj`, simplifié : un déclencheur quotidien, pas de boucle sur trois angles, une seule vidéo par passage, programmée à **22:00 heure de Paris**. Même credential Postiz, mêmes deux intégrations (TikTok `tiktok-business` et YouTube), même workflow d'erreur.

Le workflow de confirmation `y8UZWWe05LBJoEjO` gagne une quatrième règle horaire à **22:15**. Sa fenêtre de 75 minutes couvre le créneau sans chevaucher celle de 20:45.

## 7. Tests

Dans `tiktok/tests/`, style pytest existant, sans réseau — le client IA est simulé.

- `test_sujets.py` : rotation des familles déterministe et cyclique ; aller-retour de la mémoire ; construction de la liste d'exclusion, y compris mémoire vide et mémoire plus longue que la limite
- `test_culture.py` : lecture d'une réponse de vérificateur bien formée, mal formée (doit remonter un problème, jamais un succès silencieux) et vide ; boucle de reprise qui réinjecte les reproches ; abandon après deux tentatives ; rattachement d'un module, et cas où aucun ne dépasse le seuil ; interdiction des données périssables présente dans la consigne

## 8. Hors périmètre

Le fond vidéo reste le site filmé par Puppeteer, comme la ligne existante — rien ne prouve qu'un autre fond marche mieux, on le rejugera sur les chiffres. La réactivation des modules BTS dans `TRANCHES_ACTIVES` est une décision distincte, non tranchée ici.

## 9. Risques connus

**Volume.** Cette ligne porte le compte à quatre vidéos par jour sur chaque réseau. C'est beaucoup pour un compte neuf. Si les vues se diluent sur les trois premières semaines, c'est cette variable qu'il faudra baisser.

**Quota TikTok.** Inchangé et non résolu : Postiz cloud est une application partenaire dont le plafond d'utilisateurs actifs quotidiens est partagé entre ses clients. Passer de trois à quatre publications par jour augmente mécaniquement l'exposition à ce plafond.

**Dérive du ton.** L'IA choisit le sujet ; rien ne garantit sur la durée qu'elle reste dans le registre socratique et non punitif. La rotation par familles contient la répétition, pas la dérive de ton. À surveiller sur les premières semaines, et à corriger dans la consigne si besoin.
