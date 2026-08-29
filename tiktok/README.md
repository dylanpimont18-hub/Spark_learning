# Pipeline TikTok — Spark Learning

Génère des vidéos verticales 1080×1920 à partir des modules pédagogiques
de `js/data/`. **Périmètre : collège et lycée** — le BTS est exclu
(`config.TRANCHES_ACTIVES`). Coût par lot de 3 vidéos : environ 0,001 € (un seul appel
au modèle). Tout le reste tourne en local, sans GPU.

Une notion donne **trois vidéos**, une par angle éditorial :

| angle | ce qu'il raconte |
|---|---|
| `erreur` | l'erreur classique démontée (part du `cours.piege` du module) |
| `piege-quiz` | une question-piège, réponse retardée |
| `notion` | la notion expliquée en express |

## Installation

```bash
cd tiktok
python -m venv .venv
.venv/Scripts/python.exe -m pip install -r requirements.txt
cp .env.example .env      # puis renseigner MAMMOUTH_API_KEY
```

Puppeteer vient du `package.json` de la racine du dépôt (`npm install`),
pas d'ici. `ffmpeg` n'a pas besoin d'être installé : `imageio-ffmpeg`
embarque son binaire.

## Utilisation

```bash
python main.py --module "les fractions"           # les 3 angles
python main.py --module 3e-thales --angles erreur # un seul angle
python main.py --aleatoire --tranche college      # un module au hasard
python main.py --module bts-integrales            # voix adulte automatique
python main.py --module 6e-fractions --persona enfantine  # forcer une voix
python main.py --module 6e-fractions --scripts-seuls   # écrire sans rendre
python main.py --aleatoire --lot 30               # un lot de nuit : 30 modules
python main.py --etat                             # où en est la production
```

Sortie : `output/<module>/<angle>.mp4` et le `.json` de métadonnées qui
va avec (légende, hashtags, URL du module, texte dit).

## Comment ça marche

L'ordre des étapes est contraint : **la capture vidéo doit durer
exactement la longueur de la voix off**. Donc IA → voix → capture →
montage, jamais l'inverse.

1. **Catalogue** — `tools/export-modules.js` charge les 248 modules de
   `js/data/` (via `scripts/manuel/extract.js`, déjà éprouvé) et les
   exporte en JSON. Régénéré automatiquement quand `js/loader.js` bouge.
2. **Script** — un appel à Mammouth produit les trois angles d'un coup.
   La réponse est validée : sections présentes, durée dans la cible, CTA
   qui nomme le site, et **aucun symbole imprononçable** (LaTeX, balise,
   décimale anglaise). Une réponse refusée est renvoyée au modèle avec la
   liste des reproches.
3. **Vérification** — un second appel (température 0) recalcule les
   affirmations chiffrées et les confronte au module source. Il ne rejuge
   pas ton contenu, déjà relu : il contrôle les exemples que le modèle a
   inventés. Vérifié en pratique sur le cas « six plus trois sur neuf plus
   trois donne dix sur douze », que le modèle avait produit deux fois.
4. **Voix** — `edge-tts`, gratuit. Il rend aussi la position exacte de
   chaque mot (`boundary="WordBoundary"`, sans quoi on n'obtient que des
   frontières de phrase) : c'est ce qui permet le sous-titrage mot à mot
   sans Whisper.
5. **Capture** — Puppeteer filme le vrai site en viewport mobile, à la
   taille exacte de la fenêtre du mockup. Il scrolle le cours puis
   bascule sur l'onglet exercices à 72 % de la vidéo.
6. **Montage** — MoviePy compose : fond dégradé aux couleurs de la
   charte, mockup téléphone, sous-titres mot à mot, mascotte qui rebondit
   sur l'énergie de la voix et change de pose selon la section.

## Interviews (vidéos de présentation)

Troisième ligne, à part des deux autres : **Sparky interroge Lumen**, en
paysage 1920×1080. Destination : page d'accueil, YouTube, fiche produit
de la boutique — pas les réseaux verticaux.

```bash
python interview.py --sujet pourquoi     # pourquoi le site existe
python interview.py --sujet boutique     # ce que vend la boutique
python interview.py --tous
python interview.py --sujet pourquoi --voix-seule   # écouter avant de rendre
```

Trois différences assumées avec les autres lignes :

- **Les textes ne sont pas générés.** Ils sont écrits à la main dans
  `interviews.py`. Un modèle produirait une histoire plausible plutôt
  que la vraie, et ça s'entend.
- **Deux voix.** edge-tts n'en rend qu'une par appel : chaque réplique
  est synthétisée à part, puis recollée avec un silence, et
  `pipeline/dialogue.py` recale les timings mot à mot sur la frise
  commune. Dérive mesurée : 0,05 s sur 75 s.
- **Ni mémoire ni dépôt Drive.** On refait une vidéo de présentation
  quand elle a changé, pas quand elle manque.

Sans lip-sync (pas de GPU), c'est la mise en scène qui doit rendre le
dialogue lisible. Trois signaux redondants désignent celui qui parle :
sa voix, la couleur du mot en cours dans le sous-titre, et la seule
mascotte qui bouge — l'autre reste à l'image, estompée. Les plaques de
nom sont affichées en permanence, pour le spectateur qui arrive en
cours de vidéo.

Le plan de tournage suit le fil des questions : les bornes sont données
en **fraction** de la vidéo (`jusqu_a`), jamais en secondes, parce que
le texte est écrit avant que la voix off existe.

Compter environ **vingt minutes par vidéo** (mesuré : 1149 s pour 70 s
de film). La synthèse vocale ne pèse rien ; c'est la capture — 12
images par seconde du vrai site — et surtout la composition MoviePy en
1920×1080 qui dominent. D'où `--voix-seule`, qui permet de valider un
dialogue en une trentaine de secondes.

## Mémoire de production

`production.json` note ce qui a déjà été fabriqué, module par module et
angle par angle. Sans elle, `--aleatoire` ressort au bout de quelques
semaines un module déjà traité.

- `--etat` affiche l'avancement sans rien produire.
- `--lot 30` enchaîne 30 modules non traités : c'est le mode nuit.
- `--refaire` ignore la mémoire et régénère quand même.

Le fichier est indenté et trié pour rester lisible : retirer une entrée à
la main force la régénération de cet angle. Il n'est pas versionné (état
local de la machine qui rend) — le perdre oblige à refabriquer.

## Réglages courants

Tout est dans `config.py`.

- **Âge de la voix** : le champ `formants` d'une persona. 1,00 = voix
  d'origine, 1,12 = rajeunie, 1,18 = nettement enfantine, 1,25 =
  chipmunk. La durée de l'audio est préservée quel que soit le facteur,
  donc les sous-titres restent synchronisés.
- **Qui parle à quel niveau** : `PERSONA_PAR_TRANCHE`. `naturelle`
  (Eloïse non traitée) partout dans le périmètre actuel. Les variantes
  rajeunies restent accessibles par `--persona rajeunie` ou
  `--persona enfantine`.
- **Périmètre** : `TRANCHES_ACTIVES`. Réintégrer le BTS = y ajouter
  `"bts"`. La persona `adulte` (Rémy) et le jeu de sprites correspondant
  sont déjà prévus pour ce jour-là.
- **Cadre du téléphone** : `TEL_LARGEUR` et suivants. La capture s'y
  adapte automatiquement.

## Tests

```bash
.venv/Scripts/python.exe -m pytest tests/ -q   # 226 tests unitaires
node --test tests/export-modules.test.js       # 5 tests du catalogue
```

Les unités pures sont couvertes (conversion HTML/KaTeX, validation des
scripts, découpage des sous-titres, sélection de module). La voix, la
capture et le montage sont vérifiés par un rendu de bout en bout.

## Ce qui n'est pas fait

- **Publication TikTok** : le pipeline s'arrête au MP4 + JSON. La
  publication automatique exige un compte TikTok Developer audité.
- **Serveur HTTP** : la V1 est en CLI seule. Un `n8n` distant aura
  besoin d'un point d'entrée FastAPI, à ajouter le moment venu.
- **Lip-sync IA** : impossible sans GPU dédié sur la machine actuelle.
  La mascotte est animée par sprites et rebond sur l'audio.
- **Musique de fond** : non intégrée (risque de droits, et un mixage de
  plus à régler).
- **Modules BTS** : hors périmètre par décision du 2026-08-26. Les 99
  modules concernés restent dans le catalogue mais ne sont ni tirés au
  sort ni trouvables par libellé.
- **Sparky adulte** : sans objet tant que le BTS est hors périmètre.
