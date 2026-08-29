# Prompt d'implémentation — ligne « maths × vie réelle »

> À coller tel quel dans une session neuve, depuis la racine du dépôt.

---

Tu implémentes une nouvelle ligne éditoriale dans le pipeline vidéo `tiktok/` de Spark Learning, une plateforme éducative française gratuite.

La conception est validée et figée : lis `docs/superpowers/specs/2026-08-27-ligne-maths-vie-reelle-design.md` **en entier** avant d'écrire quoi que ce soit. Ce prompt ne la remplace pas, il te donne les contrats précis et le style attendu.

## 1. Ce que tu construis

Une vidéo par jour qui relie une notion mathématique à un sujet qui intéresse un adolescent. Elle coexiste avec la ligne existante — qui part d'un module de `js/data/` et en tire trois angles quotidiens — sans s'y mêler. Les deux partagent le moteur de rendu, rien d'autre.

Le narrateur est **Lumen**, un loup : persona `adulte` de `config.PERSONAS`, voix `fr-FR-RemyMultilingualNeural`, sprites déjà présents dans `tiktok/assets/sparky/adulte/`. Sparky, le renard, garde la ligne des modules.

Le flux :

```
sujets.choisir()            famille du jour + sujet + notion, hors des sujets déjà sortis
   ↓
culture.ecrire()            hook / body / cta
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

## 2. Style de code du dépôt — non négociable

Lis `tiktok/pipeline/verification.py` et `tiktok/tests/test_verification.py` avant de commencer : ce sont les meilleurs exemples du style. Tu dois t'y fondre, pas apporter le tien.

- **Français partout.** Noms de fonctions, de variables, de tests.
- **Commentaires et docstrings en français sans accents** (ASCII). Les chaînes affichées à l'utilisateur, elles, portent leurs accents.
- **Les commentaires expliquent le POURQUOI, jamais le comment.** Le dépôt commente les arbitrages et les pièges réels, pas la mécanique. Exemple existant : « Un module qui echoue ne doit pas emporter le lot : sur une production de nuit, on perdrait tous les modules suivants pendant que personne ne regarde. » Si un commentaire paraphrase le code, supprime-le.
- **Docstring de module** : une ligne, puis le raisonnement — quel problème réel a motivé ce fichier.
- **`.format()`, pas de f-strings.** C'est la convention du dépôt, respecte-la.
- **Pas de dépendance nouvelle.** `requirements.txt` ne bouge pas.
- **Les erreurs destinées à l'utilisateur** sont des `RuntimeError`, `LookupError` ou `ValueError` avec un message lisible : `__main__` les rattrape et affiche « Arrêt : … » sans trace Python.
- **Journalisation** : une fonction `_log(message)` locale qui fait `print(message, flush=True)`, comme `main.py` et `publier.py`.

## 3. Ce que tu réutilises — signatures exactes, ne les réécris pas

```python
# pipeline/scripts.py
extraire_json(reponse) -> dict          # tolere les barrieres de code, leve ValueError
client(base_url=None, cle=None)         # client OpenAI-compatible Mammouth
duree_estimee(texte) -> float
valider(script, marque="sparklearning") # leve ValueError si forme invalide
SYSTEME                                 # consignes de proncabilite a reprendre
MOTS_PAR_SECONDE, DUREE_MIN, DUREE_MAX

# pipeline/verification.py
interpreter(reponse) -> list[str]       # {"erreurs":[{extrait,probleme}]} -> reproches
                                        # une reponse illisible LEVE, jamais un succes muet

# pipeline/catalogue.py
charger(chemin=None) -> list[dict]
dans_perimetre(modules, tranches=None) -> list[dict]
_score(module, requete) -> float
_mots_significatifs(requete) -> set[str]

# pipeline/memoire.py            (modele a imiter pour sujets.py)
charger(chemin) / sauver(memoire, chemin)

# pipeline/livraison.py
deposer_livrables(fichiers, dossier_drive, cible, module_id) -> list[Path]
dossier_drive_detecte(configure=None) -> Path | None
texte_publication(metadonnees) -> str   # legende a coller, avec « lien en bio »
legende_api(metadonnees) -> str         # legende publiee, sans la consigne

# pipeline/voix.py
dire(texte, persona, destination) -> {"audio":Path, "mots":[...], "duree":float}

# pipeline/soustitres.py
bornes_sections(script, mots) -> dict

# pipeline/capture.py
filmer(url, duree, sortie, url2=None, bascule=0.72, fps=None) -> {"trames","trames_fichiers","fps"}

# pipeline/montage.py
monter(trames, fps_capture, audio, mots, bornes, destination, jeu_sprites="jeune")

# pipeline/texte.py
pour_ia(source) -> str
symboles_interdits(texte) -> list[str]

# config.py
persona_pour(tranche, forcee=None) -> dict
sprite(moment, jeu="jeune") -> Path
MASCOTTE, TRAVAIL, MEMOIRE, MODELE, SITE_URL,
DOSSIER_DRIVE, DOSSIER_DRIVE_CIBLE, TRANCHES_ACTIVES
```

`main.py::produire(module, angle, script, persona, travail, sortie, url_base)` est l'orchestration de référence pour voix → capture → montage → métadonnées. **Lis-la** et calque-toi dessus, mais ne l'appelle pas : elle attend un module, or tu n'en as pas au moment du rendu.

## 4. Fichiers à créer

### `tiktok/pipeline/sujets.py`

```python
FAMILLES = ("jeu-video", "sport", "argent", "musique",
            "reseaux", "nourriture", "transport", "mode")

famille_du_jour(date=None) -> str
    # rotation deterministe : jours depuis l'epoch modulo len(FAMILLES).
    # Deterministe = testable sans figer une date dans un test.

charger(chemin) -> dict
sauver(memoire, chemin)
    # Meme forme que pipeline/memoire.py. Structure :
    # {sujet_id: {"sujet","notion","famille","date","module","brule"}}

deja_sortis(memoire, limite=60) -> list[str]
    # Les N derniers sujets, du plus recent au plus ancien, brules compris :
    # un sujet qui a resiste aux verificateurs ne doit pas revenir.

choisir(client_ia, modele, famille, exclusions, tentatives=2) -> dict
    # Un appel. Renvoie {"sujet","notion","pourquoi"}.
    # Un sujet renvoye malgre la liste d'exclusion est rejete et l'appel
    # refait ; a l'epuisement des tentatives, leve LookupError pour que
    # l'appelant passe a la famille suivante plutot que d'echouer.
```

### `tiktok/pipeline/culture.py`

```python
SYSTEME_REDACTION   # voir section 5
SYSTEME_FAITS
SYSTEME_CALCULS

ecrire(client_ia, modele, sujet, notion, mascotte="Lumen", reproches=None) -> dict
    # Renvoie {"hook","body","cta","titre","hashtags","full_text","libelle"}.
    # `reproches` non vide = seconde tentative : les reproches sont
    # reinjectes dans la consigne utilisateur.
    # Passe par scripts.valider() avant de rendre la main.

verifier_faits(script, client_ia, modele) -> list[str]
verifier_calculs(script, client_ia, modele) -> list[str]
    # temperature=0. Reutilisent verification.interpreter().
    # Une panne du verificateur remonte comme un probleme, jamais comme
    # un succes : mieux vaut regenerer que publier non verifie.

rattacher_module(modules, sujet, notion, seuil) -> dict | None
    # catalogue._score sur "sujet + notion". Meilleur module au-dessus du
    # seuil, sinon None. None n'est PAS une erreur.

produire(client_ia, modele, famille, memoire, modules, ...) -> dict | None
    # Orchestration : choisir -> ecrire -> verifier -> reprendre -> rattacher.
    # Renvoie None et marque le sujet brule apres 2 tentatives infructueuses.
```

### `tiktok/culture.py` (CLI, a la racine de tiktok/, a cote de publier.py)

```
--lot N              produire N videos d'affilee. Le pipeline ne date rien :
                     il produit un stock, n8n en publie une par jour.
--sujet "..."        forcer un sujet (test)
--famille X          forcer la famille
--sans-verification  sauter les deux controles (debug)
--etat               afficher ce qui a deja ete produit
```

Un sujet qui echoue ne doit jamais emporter le lot : capture l'exception, journalise, passe au suivant, et affiche un bilan des abandons a la fin — comme le fait `main.py`.

Sortie par vidéo, dans `output-culture/<sujet_id>/` : `video.mp4`, `video.json`, `video.txt`. Le JSON porte les mêmes clés que celui de la ligne existante — `legende`, `hashtags`, `url`, `texte`, `duree`, `persona` — plus `sujet`, `notion`, `famille`. **Le workflow n8n lit `legende`, `hashtags` et `url` : ne renomme aucune de ces trois clés.**

### `tiktok/config.py` — ajouts

```python
DOSSIER_DRIVE_CIBLE_CULTURE = os.getenv("DOSSIER_DRIVE_CIBLE_CULTURE",
                                        "TikTok Spark Learning - Vie reelle")
MEMOIRE_SUJETS = RACINE / "sujets.json"
SEUIL_RATTACHEMENT = ...   # voir section 6
```

### `.gitignore` — ajouter `tiktok/sujets.json` sous les entrées tiktok existantes.

## 5. Les trois consignes système

**`SYSTEME_REDACTION`** reprend intégralement les contraintes de prononçabilité de `scripts.SYSTEME` — aucun symbole mathématique, aucun LaTeX, aucune balise, décimales à la virgule, rien d'imprononçable — puis :

- le narrateur est **Lumen**, un loup pédagogue : posé, précis, chaleureux. Il tutoie. Il est le pendant mûr de Sparky le renard, pas son clone : moins d'exclamations, plus de démonstration.
- ton socratique et encourageant, **jamais punitif** : on ne dit pas « faux » ni « erreur », on dit « c'est le piège classique », « on tombe tous dedans ».
- structure en trois champs : `hook` 8-14 mots, `body` 30-55 mots, `cta` 10-18 mots. Le `cta` **doit** prononcer « Spark Learning » ou « sparklearning point fr ».
- **INTERDICTION ABSOLUE DES DONNÉES PÉRISSABLES.** Aucun prix, aucune statistique d'actualité, aucun nombre d'abonnés, aucun classement, aucun record, aucune date récente. Seuls les faits structurels stables sont autorisés : un match de football dure 90 minutes, un panier à trois points vaut 3 points, un jeu de cartes en compte 52, une semaine fait 7 jours. Tout autre nombre doit être **posé par l'énoncé** (« imaginons que tu ouvres 10 paquets ») et non présenté comme un fait du monde.
- réponse en JSON strict, sans texte autour ni barrière de code.

**`SYSTEME_FAITS`** : contrôleur d'affirmations sur le monde réel. Deux devoirs, et deux seulement — signaler ce qui est **indéfendable publiquement**, et signaler ce qui est **périssable** même si c'est exact aujourd'hui. Il ne juge ni le style, ni le ton, ni la pédagogie. Un nombre posé par l'énoncé n'est pas une affirmation sur le monde. Réponse `{"erreurs":[{"extrait","probleme"}]}` pour rester compatible avec `verification.interpreter()`. Liste vide = cas le plus fréquent, ne pas inventer de problème pour justifier sa réponse.

**`SYSTEME_CALCULS`** : correcteur de mathématiques. Recalcule chaque affirmation chiffrée. **Différence essentielle avec `verification.SYSTEME`** : ici il n'existe aucun module de référence, donc rien ne fait autorité — tout est inventé et tout doit être vérifié. Ne réutilise pas `verification.SYSTEME`, écris cette consigne-là. Même format de réponse.

## 6. Calibrer `SEUIL_RATTACHEMENT`

`_score()` renvoie un nombre dont l'échelle dépend du catalogue : aucune valeur théorique n'existe. Écris un script jetable dans `tiktok/.travail/`, score une dizaine de sujets de familles différentes contre les 149 modules du périmètre, observe la distribution, et retiens la valeur qui écarte les rattachements manifestement hors sujet. **Inscris dans `config.py`, en commentaire, le relevé qui a justifié ta valeur.**

## 7. Tests

Dans `tiktok/tests/`, style de `test_verification.py`, exécutés par `tiktok/.venv/Scripts/python.exe -m pytest tests/ -q`. **Aucun réseau** : le client IA est un faux objet dont tu contrôles les réponses.

`test_sujets.py`
- la rotation des familles est déterministe et cyclique — deux appels au même jour donnent la même famille, et huit jours consécutifs donnent huit familles distinctes
- aller-retour de la mémoire sur disque
- liste d'exclusion : mémoire vide, mémoire plus courte que la limite, mémoire plus longue que la limite, et les sujets brûlés y figurent bien
- `choisir` rejette un sujet déjà sorti puis refait l'appel ; à l'épuisement il lève `LookupError`

`test_culture.py`
- lecture d'une réponse de vérificateur bien formée, mal formée et vide — une réponse illisible remonte un problème, **jamais** un succès silencieux
- la boucle de reprise réinjecte bien les reproches dans le second appel
- abandon après deux tentatives : renvoie `None` et marque le sujet brûlé
- `rattacher_module` rend le meilleur module au-dessus du seuil, et `None` quand aucun n'y arrive
- `SYSTEME_REDACTION` contient l'interdiction des données périssables et l'obligation de nommer la marque
- le JSON de sortie porte bien `legende`, `hashtags` et `url` — c'est le contrat avec n8n

## 8. Vérification avant de rendre la main

```bash
cd tiktok
.venv/Scripts/python.exe -m pytest tests/ -q          # tout au vert, existants compris
.venv/Scripts/python.exe culture.py --etat            # ne plante pas sur memoire vide
.venv/Scripts/python.exe culture.py --lot 1           # une video reelle, de bout en bout
```

Regarde la vidéo produite. Vérifie que c'est bien Lumen à l'écran et à la voix, que le texte ne contient aucune donnée périssable, et que le JSON porte les trois clés du contrat n8n.

Mets ensuite `CODEBASE_MAP.md` à jour : une entrée par fichier créé, au format du fichier — rôle en une ligne, puis les fonctions avec ce qu'elles font en cinq mots.

## 9. Ce qu'il ne faut pas faire

- **Ne modifie pas** `main.py`, `verification.py`, `scripts.py`, `voix.py`, `soustitres.py`, `capture.py`, `montage.py`, `livraison.py`, `catalogue.py`, `memoire.py`, `publier.py`. Si tu crois devoir le faire, arrête-toi et explique pourquoi.
- **N'adapte pas `verification.py`** en lui ajoutant un paramètre pour se passer du module. Son postulat — le contenu est déjà relu, on ne contrôle que ce que le modèle a inventé — deviendrait faux pour son usage d'origine. Écris des consignes sœurs dans `culture.py` et ne réutilise que `extraire_json()` et `interpreter()`.
- **Ne touche pas aux workflows n8n.** La publication est traitée séparément.
- **Ne réactive pas le BTS** dans `TRANCHES_ACTIVES` : décision distincte, non tranchée.
- **Ne change pas le fond vidéo.** Le site filmé par Puppeteer reste, comme pour la ligne existante.
- **Ne commite rien** sans qu'on te le demande.
