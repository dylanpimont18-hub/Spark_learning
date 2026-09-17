# Prompt — Édition professeur du BTS mathématiques

> À coller dans une session neuve, à la racine du projet.
> Rédigé le 2026-09-17, après la livraison des huit PDF du lycée physique-chimie.

---

## Le prompt

Tu vas écrire les **27 fiches professeur du BTS mathématiques**, pour que
`bts-maths` et `bts-maths-prep` puissent être compilés en édition professeur
v2 — comme le sont déjà les quatre niveaux du collège maths, les trois du
lycée maths, les deux du collège physique-chimie et les trois du lycée
physique-chimie.

**Comprends d'abord la structure des deux ouvrages, elle n'est pas
symétrique** (relevé dans `build.js`, lignes 116-121) :

| ouvrage | dossiers | chapitres |
|---|---|---|
| `bts-maths-prep` | `bts-prep` | **14** |
| `bts-maths` | `bts-prep` **puis** `bts` | **27** (14 + 13) |

`bts-maths` est donc un ouvrage **à deux niveaux**, exactement comme
`lycee-physique` l'était : il REPREND les quatorze chapitres de la remise à
niveau, puis enchaîne les treize du programme BTS. Les 27 fiches à écrire se
répartissent en **14 dans `bts-prep` + 13 dans `bts`** — et les quatorze
premières servent AUX DEUX ouvrages. Il n'y a pas 41 fiches à écrire.

Invoque d'abord le skill `manuels-spark`.

### Pourquoi ces deux ouvrages-là, et pas `lycee-si` ou `bts-fed`

Parce qu'ils sont **déjà vendus**. Les PDF de `bts-maths` (27 chapitres
compilés) et `bts-maths-prep` (14/14) ont été livrés le 2026-08-19 et sont en
boutique ; ce sont les deux seuls ouvrages du catalogue à la fois **complets,
compilés et commercialisés** qui n'ont pas d'édition professeur. Les enrichir
augmente la valeur d'un produit qui existe, là où `lycee-si` (0/20) et
`bts-fed` (0/54) demandent d'abord un travail de compilation.

Ils sont aussi le bon prochain pas par le **public** : le BTS prépare des
adultes en reprise d'études et des étudiants en alternance, et l'enseignant y
est souvent seul à construire sa progression, sans manuel de référence de la
filière. La progression annuelle et la grille de suivi y valent plus qu'au
lycée, où les manuels abondent.

### Ce qui existe déjà, et que tu ne dois pas refaire

- Les **27 chapitres sont intégrés** et les **deux ouvrages compilent déjà**
  (`bts-maths` 27/27, `bts-maths-prep` 14/14 dans `docs/manuels/PROGRESSION.md`).
  Ce n'est pas un travail de compilation.
- Le **référentiel maths est celui par défaut** : `referentielDe()` ne bascule
  sur la physique que si le nom de la collection contient « physique »
  (`scripts/manuel/prof.js`). `bts-maths` porte `Collection Mathématiques` :
  tu auras donc `chercher · modéliser · représenter · raisonner · calculer ·
  communiquer`. **Ne touche pas à ce code.**
- Les **clés d'ouvrage existent** dans `build.js`.
- Les **fiches du lycée maths** (`js/data/prof/lycee-2nde/`, `lycee-1re/`,
  `lycee-tle/`) sont le modèle de matière le plus proche.

Le seul travail manquant est **l'écriture des 27 fiches**.

### Ce que tu dois produire

Vingt-sept fichiers, dans deux dossiers à créer. **Le nom du dossier suit celui
du dossier de DONNÉES, pas celui du niveau** — `prof/bts/` et `prof/bts-prep/`,
et non `prof/bts-maths/`. Une fiche mal rangée n'est jamais trouvée et
l'ouvrage compile en se déclarant « sans fiche », **sans aucun message
d'erreur** (piège documenté dans `CODEBASE_MAP.md`, rencontré au lycée maths).

```
js/data/prof/bts/        (13 fiches)
js/data/prof/bts-prep/   (14 fiches)
```

Un fichier par module, nommé `<id>.prof.js`, avec l'entrée
`window.SPARK_PROF["<id>"]`.

**PIÈGE PROPRE À CE CHANTIER, relevé le 2026-09-17 — lis-le deux fois.** Dans
`js/data/bts/`, **trois modules sur treize portent un `id` SANS le préfixe
`bts-`** :

| fichier | `id` réel |
|---|---|
| `complexes.js` | **`complexes`** |
| `eq-diff-2.js` | **`eq-diff-2`** |
| `statistiques.js` | **`statistiques`** |

Les dix autres suivent bien `bts-loi-normale`, `bts-fonctions-reelles`, etc.
Or `cheminFiche()` (`scripts/manuel/prof.js`) construit le chemin à partir de
l'**`id` du module**, pas du nom de fichier. Les trois fiches concernées
doivent donc s'appeler `complexes.prof.js`, `eq-diff-2.prof.js` et
`statistiques.prof.js`, et porter `window.SPARK_PROF["complexes"]`, etc.
Se tromper ici produit exactement le symptôme le plus coûteux du pipeline : la
fiche n'est jamais trouvée, et l'ouvrage compile **en se déclarant « 10 fiches
sur 13 » sans le moindre message d'erreur**. Vérifie chaque `id` avec
`chargerModule()` avant de créer le fichier — ne te fie pas au nom du fichier
de données.

### Le modèle à suivre

**`js/data/prof/physique-2nde/physique-2nde-forces.prof.js`** — le pilote le
plus récent (2026-09-17) et celui dont les conventions sont les plus abouties :
en-tête qui documente les moules réels du tirage, prérequis justifiés candidat
par candidat, renvois qui comparent les tirages entre eux avant de choisir.
Lis-le en entier avant d'écrire quoi que ce soit. Prends ensuite une fiche de
maths pour le vocabulaire du référentiel : `js/data/prof/lycee-tle/`.

Champs d'une fiche : `prerequis`, `rangConseille`, `attendus`, `note`,
`erreurs`, `competences.evaluation`.

Compte ~250 à 350 lignes par fiche, commentaires compris — **et ces
commentaires font partie du livrable** : ils expliquent *pourquoi* un prérequis
est retenu ou écarté, et *contre quel tirage réel* un renvoi a été vérifié.

### L'ordre des chapitres et les graines, à ne pas deviner

L'ordre vient de `js/loader.js`, **pas de l'ordre alphabétique**. La graine du
tirage est `20260816 + rang`, où `rang` est l'index 0-based **dans l'ouvrage
compilé**, et non dans le dossier.

**ATTENTION — le même chapitre n'a PAS la même graine dans les deux
ouvrages.** Dans `bts-maths-prep`, `bts-prep-logarithme` est au rang 6
(graine +6) ; dans `bts-maths`, il est au même rang 6, parce que `bts-prep`
ouvre les deux ouvrages. En revanche les treize chapitres de `bts/` n'existent
QUE dans `bts-maths`, où ils commencent au rang 14. C'est la même propriété que
`lycee-physique` : **cale tes renvois sur l'ouvrage où le chapitre est
imprimé**, et pour les quatorze chapitres communs, les deux ouvrages
coïncident — heureuse conséquence du fait que `bts-prep` vient en premier dans
les deux.

Relevé et **mesuré** le 2026-09-17 :

**Chapitres 1 à 14 — dossier `bts-prep`** (mêmes graines dans les DEUX ouvrages)

| ch. | `id` du module | graine | tirés | banque |
|---|---|---|---|---|
| 1 | `bts-prep-calcul-litteral` | +0 | 24 | 12 |
| 2 | `bts-prep-equations` | +1 | 42 | 30 |
| 3 | `bts-prep-proportionnalite` | +2 | 42 | 30 |
| 4 | `bts-prep-puissances` | +3 | 42 | 30 |
| 5 | `bts-prep-fonctions` | +4 | 42 | 30 |
| 6 | `bts-prep-trigonometrie` | +5 | 42 | 30 |
| 7 | `bts-prep-logarithme` | +6 | 42 | 30 |
| 8 | `bts-prep-vecteurs` | +7 | 42 | 30 |
| 9 | `bts-prep-si-unites` | +8 | 42 | 30 |
| 10 | `bts-prep-analyse-dim` | +9 | 42 | 30 |
| 11 | `bts-prep-conversions` | +10 | 42 | 30 |
| 12 | `bts-prep-equations-transf` | +11 | 42 | 30 |
| 13 | `bts-prep-graphiques` | +12 | 42 | 30 |
| 14 | `bts-prep-donnees-techniques` | +13 | 42 | 30 |

**Chapitres 15 à 27 — dossier `bts`** (uniquement dans `bts-maths`) — noter les
trois `id` sans préfixe

| ch. | `id` du module | graine | tirés | banque |
|---|---|---|---|---|
| 15 | **`complexes`** | +14 | 21 | 9 |
| 16 | **`eq-diff-2`** | +15 | 21 | 9 |
| 17 | **`statistiques`** | +16 | 18 | 6 |
| 18 | `bts-loi-normale` | +17 | 18 | 6 |
| 19 | `bts-fonctions-reelles` | +18 | 21 | 9 |
| 20 | `bts-derivation-appliquee` | +19 | 21 | 9 |
| 21 | `bts-integrales-appliquees` | +20 | 18 | 6 |
| 22 | `bts-stats-deux-variables` | +21 | 18 | 6 |
| 23 | `bts-probas-discretes` | +22 | 18 | 6 |
| 24 | `bts-suites-appliquees` | +23 | 18 | 6 |
| 25 | `bts-matrices` | +24 | 18 | 6 |
| 26 | `bts-fourier` | +25 | 36 | 24 |
| 27 | `bts-laplace` | +26 | 18 | 6 |

**Rappel qui découle de la structure** : `rangConseille` se compte PAR DOSSIER
(1..14 pour `bts-prep`, 1..13 pour `bts`), et `prerequis` ne vise qu'un
chapitre du **même dossier** — c'est ce que fait `indexerParNiveau()` dans
`prof.js`. Un chapitre de `bts` qui s'appuie sur un chapitre de `bts-prep` ne
peut donc pas le déclarer : ça va dans la `note`.

**Bonne nouvelle que ces chiffres annoncent** : les générateurs de maths sont
nettement plus riches que ceux de physique. `bts-maths-prep` sature le plafond
de 42 tirages sur 13 chapitres sur 14, avec une banque de 30 — là où la
physique du lycée plafonnait à 27 tirages et deux moules. Tu auras donc
beaucoup plus de matière pour placer des renvois justes, et tu devrais
descendre bien en dessous des 41 % de `exercice: null` du lycée physique.
Vérifie-le en comptant les MOULES (énoncés dont les nombres sont masqués), pas
les énoncés : c'est la mesure qui compte.

### Méthode imposée : chapitre pilote d'abord

L'ordre a été éprouvé cinq fois (6e, 4e, 4e et 3e de physique, puis les trois
niveaux du lycée physique). Ne le raccourcis pas.

1. **Un chapitre pilote par ouvrage**, écrit puis validé seul avant tout le
   reste. Suggestion : `bts-derivation-appliquee` pour `bts-maths` et
   `bts-prep-logarithme` pour `bts-maths-prep` — les deux chapitres les plus
   riches en erreurs d'élève repérables.
2. Puis le lot de l'ouvrage.
3. **`rangConseille` est tout ou rien par dossier** : tant qu'une seule fiche
   le porte, l'ouvrage REFUSE de compiler (« un ordre conseillé partiel ne
   classe rien »). Le contrôle sur PDF n'est donc possible qu'une fois les 13
   ou 14 fiches écrites — c'est normal, ne cherche pas à compiler après le
   pilote seul.

### Les deux règles éditoriales non négociables

- **Une remédiation ne renvoie JAMAIS vers l'évaluation notée.** On remédie
  avant d'évaluer. `exercice: { type: "exercice", n }` ou `{ type: "quiz", n }`
  ou `{ type: "supplement", n }`, jamais `type: "evaluation"`.
- **Un renvoi faux est pire qu'un renvoi absent.** Chaque `exercice: {...}`
  doit être vérifié contre le **tirage réel de la graine du livre** — pas
  contre l'idée que tu te fais de l'exercice. Si aucun exercice du chapitre ne
  travaille réellement l'erreur, mets `exercice: null` et dis-le dans le
  `remede`. Sur le lycée physique, **53 renvois sur 128 sont `null`**, et c'est
  un résultat sain, pas un échec.

### Ce que l'audit du lycée physique a appris, et qui va te concerner

**1. Commence par MESURER le tirage, avant d'écrire une ligne.** Écris un
script qui charge les 27 modules avec la graine du livre et vide, pour chacun :
le nombre d'énoncés tirés, les 12 numérotés avec leurs valeurs et leurs
réponses, la banque supplémentaire, le quiz, les questions d'évaluation avec
leurs options, et le cours (définitions, méthode, formules, exemple résolu,
piège). C'est ce document — et non `js/data/` — qui sert ensuite de source.
**Ne lis jamais `js/data/` en entier** : le corpus dépasse la fenêtre de
contexte.

**2. Attends-toi à DEUX MOULES par chapitre.** Sur les 32 chapitres du lycée
physique, chaque générateur ne produisait que deux moules d'énoncé, strictement
alternés (impairs / pairs). Conséquence directe : la moitié des erreurs d'un
chapitre n'a **aucun** support dans le tirage, et doit honnêtement recevoir
`exercice: null`. Vérifie si le BTS fait mieux — les générateurs de maths sont
souvent plus riches — mais ne présume pas que oui.

**3. Vérifie le nombre de tirages avant d'écrire un numéro.** Renvoi maximal en
`type:"exercice"` = `min(12, nb tirés)`. Un `type:"supplement"` n'est autorisé
que si `nb tirés > 12`, et son `n` est borné par `nb tirés - 12`. Au lycée
physique, `1re-lewis` ne tirait que **7** énoncés et n'avait aucune banque :
`validerProf` refusait tout supplément. Les premiers relevés sur `bts-maths`
donnent ~21 tirages par chapitre, donc ~9 en banque, mais **mesure-le**.

**4. La question de la répartition des compétences va se reposer, et en PIRE.**
Sur les 160 questions du lycée physique, toutes `numeric` ou
`multiple-choice`, un étiquetage honnête donnait `communiquer` **0 %**. Le
relevé du 2026-09-17 sur les 130 questions du BTS montre un profil **plus
déséquilibré encore** : **89 `numeric` contre 41 `multiple-choice`**, là où la
physique était à 79/81. Autrement dit, deux questions sur trois demandent de
calculer un nombre. Attends-toi donc à un `calculer` très au-dessus du plafond
de 35 % et à un `communiquer` nul, avant toute correction. Deux issues, et
**c'est à moi de trancher, pas à toi** :
  - **soit** tu livres l'étiquetage honnête et tu écris noir sur blanc dans
    `CODEBASE_MAP.md` que `communiquer` est absent, avec la raison ;
  - **soit** tu réécris une dizaine de questions dans `js/data/bts*/` pour
    qu'elles mobilisent réellement la compétence — sur le modèle des questions
    « juger le raisonnement d'un élève » de `4e-pythagore`, des six réécritures
    du collège physique (`97c3d48`) et des dix du lycée physique (`9a1685c`).
  **Mesure la répartition, montre-la moi, et demande** avant de réécrire quoi
  que ce soit dans `js/data/`.

**5. Un générateur peut être juste et faux en même temps.** Au lycée physique,
`2nde-modele-atome` tirait le nombre de neutrons INDÉPENDAMMENT de $Z$ : le
calcul demandé restait correct, mais 13 noyaux sur 27 étaient physiquement
impossibles, dont un à zéro neutron. Ni `verifier-corpus.js` ni les 665 tests
ne voyaient quoi que ce soit — **seul un contrôle de plausibilité sur le tirage
réel l'a révélé**. En maths, cherche l'équivalent : une longueur négative, un
effectif non entier, un taux supérieur à 100 %, un dénominateur qui peut
s'annuler, une durée de remboursement de 300 ans. Si tu en trouves un,
**signale-le-moi avant de corriger** : toute écriture dans `js/data/` hors
défaut mécanique demande mon accord.

### Les sources, et ce qu'il est interdit d'inventer

- **Attendus de fin d'année** : le référentiel du BTS concerné. Attention, il
  n'y a pas UN programme de BTS maths mais un **tronc commun décliné par
  groupement** (A, B, C, D...). Si le module ne dit pas à quel groupement il se
  rattache, reste sur les items du tronc commun et **dis-le dans la `note`**
  plutôt que d'inventer une spécialité. Jamais extrapolés. Trois attendus par
  fiche : ce sont eux qui deviennent la grille de suivi photocopiable.
- **Contenu réel du chapitre** : passe par `chargerModule()`.
- **Compétences** : une par question d'évaluation, dans l'ordre, prises dans le
  référentiel **mathématiques** (`chercher`, `modéliser`, `représenter`,
  `raisonner`, `calculer`, `communiquer`). Autant de compétences que de
  questions, sinon `validerProf` refuse.

  **NE PRÉSUME PAS 5 QUESTIONS PAR CHAPITRE — c'est faux ici.** La convention
  des sept niveaux déjà traités (5 questions partout) ne tient pas sur le BTS.
  Relevé le 2026-09-17, **130 questions** au total sur les 27 chapitres :

  | chapitres | questions |
  |---|---|
  | `bts-prep-trigonometrie` | **8** |
  | `bts-prep-calcul-litteral`, `-vecteurs`, `-si-unites`, `-analyse-dim`, `-conversions`, `-equations-transf`, `-graphiques`, `-donnees-techniques` | **4** |
  | les dix-huit autres | 5 |

  Écrire cinq compétences sur un chapitre qui n'a que quatre questions fait
  échouer la validation avec « 5 compétence(s) pour 4 question(s) d'évaluation ».
  Compte-les module par module avec `chargerModule()`.

### Ce qui change entre le lycée et le BTS, et qu'il faut anticiper

- **`bts-maths-prep` est une REMISE À NIVEAU, pas une année.** Ses 14 chapitres
  (conversions, puissances, proportionnalité, calcul littéral, SI-unités...)
  reprennent des notions de collège et de lycée pour un public d'adultes. Deux
  conséquences : les `prerequis` y sont presque tous `[]` (chaque chapitre est
  conçu pour être pris isolément, c'est tout l'intérêt d'une remise à niveau),
  et le `rangConseille` y est **un ordre de difficulté**, pas une progression
  annuelle. Dis-le dans la `note` : l'enseignant pioche, il ne déroule pas.
- **Les prérequis traversent les deux ouvrages, et ne sont pas déclarables.**
  `bts-maths` suppose `bts-maths-prep` acquis (le logarithme de la remise à
  niveau sert à la dérivation appliquée). `prerequis` ne vise que des chapitres
  du **même dossier** : ces dépendances **doivent aller dans le champ `note`**,
  qui est imprimé, avec la mention explicite que la colonne « S'appuie sur »
  affichera un tiret. C'est exactement ce que font les fiches de terminale
  physique pour leurs prérequis de première.
- **Le public change le ton des erreurs.** Un adulte en reprise d'études ne se
  trompe pas comme un élève de seconde : il a souvent une **mémoire procédurale
  ancienne et fausse** (« on met tout du même côté », « on croise les
  produits ») qu'il applique avec assurance, et une **anxiété mathématique**
  installée. Le champ `cause` doit en tenir compte — ne traite jamais une
  erreur d'adulte comme un défaut d'attention.
- **Le contexte professionnel est un levier.** Les modules BTS ancrent déjà
  leurs énoncés dans des situations techniques. Un remède qui relie l'erreur à
  une conséquence métier (un débit mal converti, une cote hors tolérance) porte
  plus qu'un rappel de règle.

### Contrôles avant de dire que c'est fini

```
node --test scripts/manuel/tests/*.test.js          # 665 tests du socle
node scripts/manuel/verifier-corpus.js              # 248 modules, 0 symbole inconnu
node scripts/check-decimal-notation.js              # 4 erreurs PRÉEXISTANTES (fed-bts, si-1re, si-tle x2) — ne pas s'en alarmer, mais n'en ajoute aucune
node scripts/manuel/build.js bts-maths --prof
node scripts/manuel/build.js bts-maths-prep --prof
node scripts/manuel/progression.js
```

Exigence : **0 erreur LaTeX, 0 figure bloquée, 27 fiches sur 27**. Ne déclare
rien de terminé sans avoir lu la sortie de ces commandes.

Vérifie en plus, **dans le `.toc` et non au jugé**, que « Progression
annuelle » et « Suivi des notions » sont bien en tête des deux éditions
professeur :

```
grep -oE '\{chapter\}\{[^}]*\}' "Manuel scolaire/bts-maths/bts-maths-prof.toc" | head -6
```

Et ouvre au moins une page de progression et une page d'erreurs en image
(`pdftoppm -png -r 100 -f <page> -l <page>`) : la compilation sans erreur ne
prouve pas que rien ne se chevauche. **Attention au décalage** : la page vi du
`.toc` n'est pas la page 6 du PDF (le front-matter décale de une ou deux).
C'est ce contrôle visuel qui a révélé neuf collisions d'étiquettes sur les
figures du collège, invisibles pour LaTeX.

### Un garde-fou utile, à réutiliser

Écris, dans ton dossier scratchpad, un script qui charge chaque module avec la
graine du livre, charge sa fiche, et applique `validerProf` +
`validerPrerequis` + les deux règles éditoriales, puis affiche la répartition
des compétences avec un **plafond d'alerte à 35 %**. Il donne le verdict en
deux secondes, sans compiler, et c'est lui qui a permis d'écrire les 32 fiches
du lycée physique sans une seule itération de correction. Modèle :
`verifier-fiches.js` (décrit dans le commit `049a87d`).

### Ce que tu n'as pas le droit de faire

- **Ne retouche pas le fond pédagogique de `js/data/`** sans me demander.
  L'écriture y est réservée aux défauts mécaniques (accents, notation décimale,
  élision, schéma non uniforme), toujours en commit séparé. Une fiche prof ne
  réécrit jamais le cours : c'est ce qui garantit que le livre ne diverge pas
  du site. La réécriture de questions d'évaluation (point 4) est une
  **exception à me faire valider explicitement**.
- **Ne force jamais un garde-fou.** Une figure sans provenance, un Unicode non
  traduit, une erreur LaTeX se corrigent par la cause.
- **Ne change pas la graine.** En changer renumérote tous les exercices et
  invalide les renvois déjà écrits — y compris ceux des **85 fiches de maths**
  (collège et lycée) et des **44 fiches de physique-chimie** déjà en place.
- **N'incrémente le `?v=N` de `index.html` que si tu touches `js/` ou `css/`.**
  Les fiches prof ne sont pas chargées par le site : les écrire seules ne
  justifie aucun cache-busting. En revanche une correction dans `js/data/bts*/`
  l'exige, sur **toutes** les balises locales (règle de `CLAUDE.md`). État au
  2026-09-17 : `v=68`.

### Livrables

1. Les 27 fiches.
2. Les 4 PDF (2 ouvrages × élève + prof), copiés dans
   `C:\Users\Dylan\Desktop\manuels\` en respectant la convention de nommage des
   32 PDF déjà présents : `Mathematiques BTS - Edition professeur.pdf`,
   `Mathematiques BTS (remise a niveau) - Edition eleve.pdf`, etc. (sans
   accents dans le nom de fichier).
   **Point à vérifier, relevé le 2026-09-17** : aucun PDF de BTS n'est
   actuellement dans `Desktop\manuels\` — les 32 présents sont les 18 de maths,
   les 6 du collège physique-chimie et les 8 du lycée physique-chimie. Les
   quatre PDF de BTS existent pourtant bien, compilés le 2026-08-19, dans
   `Manuel scolaire/bts-maths/` et `Manuel scolaire/bts-maths-prep/`. Ils ont
   donc été compilés et vendus sans passer par le dossier de livraison. Profite
   de ce chantier pour livrer les quatre d'un coup, et **demande-moi** si tu
   préfères t'en tenir aux deux éditions professeur.
3. `CODEBASE_MAP.md` et `contenu.md` mis à jour — dont la **répartition
   mesurée** des 130 compétences, comme le font les sept sections déjà écrites.
4. `docs/manuels/PROGRESSION.md` régénéré.
5. Commits séparés : les fiches d'un côté, toute correction de `js/data/` de
   l'autre, la documentation en troisième.

**Politique de branches** : les manuels et PDF restent en local, ils ne sont
pas poussés.

### Ce qui restera après

Deux ouvrages n'auront toujours aucune fiche, et ce sont les deux plus lourds :
`lycee-si` (0/20, jamais compilé) et `bts-fed` (0/54, jamais compilé). Tous
deux demandent **d'abord un travail de compilation**, pas d'écriture de fiches
— et `bts-fed` est en outre à cheval sur la branche `fed-s8-lot3`, non mergée.

Attention pour eux, et c'est un point à trancher avant de commencer :
`referentielDe()` ne connaît que deux référentiels, maths et physique, et
bascule sur la physique uniquement si le nom de la collection contient
« physique ». `lycee-si` (« Collection Sciences de l'ingénieur ») et `bts-fed`
(« Collection Génie climatique ») retombent donc sur le référentiel
**mathématiques**, qui ne décrit pas ce qu'on évalue en SI ni en FED. Il faudra
soit ajouter un référentiel, soit assumer le repli — **décision à me soumettre,
pas à prendre seul**.
