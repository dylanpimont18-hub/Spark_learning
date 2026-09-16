# Prompt — Édition professeur du lycée physique-chimie

> À coller dans une session neuve, à la racine du projet.
> Rédigé le 2026-09-17, après la livraison des six PDF du collège physique-chimie.

---

## Le prompt

Tu vas écrire les **32 fiches professeur du lycée physique-chimie**, pour que
`lycee-physique-2nde`, `lycee-physique-1re`, `lycee-physique-tle` et le cycle
complet `lycee-physique` puissent être compilés en édition professeur v2 —
comme le sont déjà les quatre niveaux du collège maths, les trois du lycée
maths et les deux du collège physique-chimie.

Invoque d'abord le skill `manuels-spark`.

### Ce qui existe déjà, et que tu ne dois pas refaire

- Les **32 chapitres sont intégrés** et les **quatre ouvrages compilent déjà**
  (12 PDF présents dans `Manuel scolaire/lycee-physique*/`). Ce n'est pas un
  travail de compilation.
- Le **référentiel physique est câblé** dans `scripts/manuel/prof.js` :
  `REFERENTIELS.physique` = `s'approprier · analyser · réaliser · valider ·
  communiquer`, et `referentielDe()` bascule seul sur toute collection dont le
  nom contient « physique ». **Ne touche pas à ce code.** Il n'existe pas de
  référentiel « lycée » distinct : c'est le même qu'au collège.
- Les **quatre clés d'ouvrage existent** dans `build.js` (lignes 131-142).
- Les **douze fiches du collège physique** (`js/data/prof/physique-4e/`,
  `js/data/prof/physique-3e/`) sont écrites et servent de modèle de matière.

Le seul travail manquant est **l'écriture des 32 fiches**.

### Ce que tu dois produire

Trente-deux fichiers, dans trois dossiers à créer. **Le nom du dossier suit
celui du dossier de DONNÉES, pas celui du niveau** — `prof/physique-2nde/` et
non `prof/2nde/`. Une fiche mal rangée n'est jamais trouvée et l'ouvrage
compile en se déclarant « sans fiche », sans aucun message d'erreur (piège
documenté dans `CODEBASE_MAP.md`, rencontré au lycée maths).

```
js/data/prof/physique-2nde/   (10 fiches)
js/data/prof/physique-1re/    (11 fiches)
js/data/prof/physique-tle/    (11 fiches)
```

Un fichier par module, nommé `<id>.prof.js`, avec l'entrée
`window.SPARK_PROF["<id>"]`.

### Le modèle à suivre

**`js/data/prof/physique-3e/physique-3e-resistance-ohm.prof.js`** — chapitre
pilote du collège physique-chimie. C'est sur lui qu'ont été calées les
conventions des onze autres fiches de physique. Lis-le en entier avant
d'écrire quoi que ce soit, ainsi que
`js/data/prof/physique-4e/physique-4e-lois-circuits.prof.js` (l'autre pilote).

Champs d'une fiche : `prerequis`, `rangConseille`, `attendus`, `note`,
`erreurs`, `competences.evaluation`.

Compte ~230 lignes par fiche, commentaires compris — **et ces commentaires
font partie du livrable** : ils expliquent *pourquoi* un prérequis est retenu
ou écarté, et *contre quel tirage réel* un renvoi a été vérifié.

### L'ordre des chapitres et les graines, à ne pas deviner

L'ordre vient de `js/loader.js`, **pas de l'ordre alphabétique**. La graine du
tirage est `20260816 + rang`, où `rang` est l'index 0-based dans l'ouvrage.
Relevé le 2026-09-17 :

| Niveau | ch. | module | graine |
|---|---|---|---|
| **2nde** | 1 | `physique-2nde-mouvement` | +0 |
| | 2 | `physique-2nde-forces` | +1 |
| | 3 | `physique-2nde-inertie` | +2 |
| | 4 | `physique-2nde-corps-purs` | +3 |
| | 5 | `physique-2nde-solutions` | +4 |
| | 6 | `physique-2nde-transformations` | +5 |
| | 7 | `physique-2nde-modele-atome` | +6 |
| | 8 | `physique-2nde-signaux` | +7 |
| | 9 | `physique-2nde-son` | +8 |
| | 10 | `physique-2nde-lumiere` | +9 |
| **1re** | 1 | `physique-1re-champ-gravitationnel` | +0 |
| | 2 | `physique-1re-champ-electrique` | +1 |
| | 3 | `physique-1re-cinematique` | +2 |
| | 4 | `physique-1re-newton` | +3 |
| | 5 | `physique-1re-travail-energie` | +4 |
| | 6 | `physique-1re-reaction-avancement` | +5 |
| | 7 | `physique-1re-titrage` | +6 |
| | 8 | `physique-1re-lewis` | +7 |
| | 9 | `physique-1re-ondes-mecaniques` | +8 |
| | 10 | `physique-1re-lumiere-ondes` | +9 |
| | 11 | `physique-1re-kirchhoff` | +10 |
| **Tle** | 1 | `physique-tle-mouvement-champ` | +0 |
| | 2 | `physique-tle-satellites` | +1 |
| | 3 | `physique-tle-dynamique` | +2 |
| | 4 | `physique-tle-energie-mecanique` | +3 |
| | 5 | `physique-tle-thermodynamique` | +4 |
| | 6 | `physique-tle-evolution-chimique` | +5 |
| | 7 | `physique-tle-acides-bases` | +6 |
| | 8 | `physique-tle-oxydoreduction` | +7 |
| | 9 | `physique-tle-ondes-signaux` | +8 |
| | 10 | `physique-tle-quantique` | +9 |
| | 11 | `physique-tle-radioactivite` | +10 |

**Attention à la graine du cycle complet.** Dans `lycee-physique`, les 32
chapitres s'empilent (2nde rangs 0-9, 1re rangs 10-20, Tle rangs 21-31) : un
chapitre de 1re y est donc tiré avec une **autre graine** que dans son ouvrage
mono-niveau, et l'exercice 2 n'y est pas le même exercice. C'est une propriété
acceptée du pipeline, déjà vraie pour `college-maths` et `college-physique` :
**cale tes renvois sur l'ouvrage MONO-NIVEAU**, celui qu'un enseignant de la
classe achète.

### Méthode imposée : chapitre pilote d'abord

L'ordre a été éprouvé quatre fois (6e, 4e, puis 4e et 3e de physique). Ne le
raccourcis pas.

1. **Un chapitre pilote par niveau**, écrit puis validé seul avant tout le
   reste. Suggestion : `physique-2nde-forces`, `physique-1re-newton` et
   `physique-tle-acides-bases` — les trois chapitres les plus riches en erreurs
   d'élève repérables, donc ceux qui calibrent le mieux les conventions.
2. Puis le lot du niveau.
3. **`rangConseille` est tout ou rien par niveau** : tant qu'une seule fiche du
   niveau le porte, l'ouvrage REFUSE de compiler (« un ordre conseillé partiel
   ne classe rien »). Le contrôle sur PDF n'est donc possible qu'une fois les
   dix ou onze fiches du niveau écrites — c'est normal, ne cherche pas à
   compiler après le pilote seul.
4. Enfin le cycle complet.

### Les deux règles éditoriales non négociables

- **Une remédiation ne renvoie JAMAIS vers l'évaluation notée.** On remédie
  avant d'évaluer. `exercice: { type: "exercice", n }` ou `{ type: "quiz", n }`
  ou `{ type: "supplement", n }`, jamais `type: "evaluation"`.
- **Un renvoi faux est pire qu'un renvoi absent.** Chaque `exercice: {...}`
  doit être vérifié contre le **tirage réel de la graine du livre** — pas
  contre l'idée que tu te fais de l'exercice. Si aucun exercice du chapitre ne
  travaille réellement l'erreur, mets `exercice: null` et dis-le dans le
  `remede`.

### Ce que l'audit du 2026-09-17 a mesuré, et qui va te concerner

J'ai chargé les 32 modules avec la graine du livre avant d'écrire ce prompt.
Trois faits à connaître **avant** de commencer, parce qu'ils vont décider de
la forme de tes fiches.

**1. Zéro figure sur les exercices, sur les 32 chapitres.** 915 exercices
tirés, aucune figure. Les chapitres portent 1 à 3 schémas de cours
(`cours.diagram` et `cours.diagrams[]`, 41 au total), c'est tout. C'était déjà
le cas au collège avant le chantier du 2026-09-16, qui a ajouté dix helpers de
figures paramétriques dans `js/data/figures-exercices.js` (circuits, ombre,
forces, bilan de masse, caractéristique, trajet, atome, gravitation) et
cablé 167 figures. **Plusieurs de ces helpers sont directement réutilisables
au lycée** : `figureForces` pour la 2nde (forces, inertie) et la 1re (Newton),
`figureTrajet` pour la cinématique, `figureCircuitSerie` /
`figureCircuitDerivation` / `figureCircuitMesure` pour Kirchhoff,
`figureBilanMasse` pour l'avancement. C'est un chantier distinct de
l'écriture des fiches : **ne le lance pas sans me demander**, et en commit
séparé s'il est décidé.

**2. Les 160 questions d'évaluation sont TOUTES `numeric` ou
`multiple-choice`.** Aucune ne demande de produire une explication rédigée.
Conséquence mécanique : si tu étiquettes honnêtement, `communiquer` tombera
à presque zéro et `analyser` dépassera 40 %, alors que les quatre niveaux de
maths tiennent les six compétences sous 35 % chacune. Au collège physique, le
premier état mesuré était analyser 43,3 % et **communiquer 1,7 %** — une
question sur soixante.

**La règle d'honnêteté du projet interdit de régler cela par l'étiquetage** :
une compétence ne se redéclare pas sur un énoncé inchangé. Deux issues, et
c'est à moi de trancher, pas à toi :
  - **soit** tu livres l'étiquetage honnête et tu écris noir sur blanc dans
    `CODEBASE_MAP.md` que `communiquer` et `réaliser` sont quasi absents, avec
    la raison ;
  - **soit** tu réécris une dizaine de questions dans `js/data/physique-*/`
    pour qu'elles mobilisent réellement ces compétences — sur le modèle des
    questions « juger le raisonnement d'un élève » de `4e-pythagore` et des six
    réécritures du collège physique (commit `97c3d48`).
  **Mesure la répartition, montre-la moi, et demande** avant de réécrire quoi
  que ce soit dans `js/data/`.

**3. `physique-1re-lewis` ne tire que 7 exercices.** En dessous des 12
numérotés, donc : renvoi maximal autorisé **7**, et **aucune banque
supplémentaire** (`validerProf` refuse tout `type:"supplement"` sur ce
chapitre). Deux autres chapitres sont courts : `1re-lumiere-ondes` (15 tirés,
3 en banque) et `1re-champ-gravitationnel` (20 tirés, 8 en banque). Vérifie
systématiquement le nombre de tirages avant d'écrire un numéro.

### Les sources, et ce qu'il est interdit d'inventer

- **Attendus de fin d'année** : `docs/programmes-physique.md` (section LYCÉE,
  lignes 32-78) et le programme officiel — **2019 pour le lycée**, et non 2020
  comme au cycle 4. La 1re et la Tle sont des programmes de
  **spécialité**. Jamais inventés, jamais extrapolés. Trois attendus par
  fiche, aux mots du programme : ce sont eux qui deviennent la grille de suivi
  photocopiable.
- **Contenu réel du chapitre** : passe par `chargerModule()`. **Ne lis jamais
  `js/data/` en entier** — le corpus dépasse la fenêtre de contexte.
- **Compétences** : une par question d'évaluation, dans l'ordre, prises dans le
  référentiel physique **uniquement**. Autant de compétences que de questions,
  sinon `validerProf` refuse.

### Ce qui change entre le collège et le lycée, et qu'il faut anticiper

- **Les prérequis traversent les niveaux, et ne sont pas déclarables.**
  `prerequis` ne vise que des chapitres du **même niveau** (voir la longue note
  de `validerPrerequis`). Or la Tle s'appuie massivement sur la 1re :
  `tle-dynamique` suppose `1re-newton`, `tle-acides-bases` suppose
  `1re-titrage`, `tle-evolution-chimique` suppose `1re-reaction-avancement`.
  Ces dépendances **doivent aller dans le champ `note`**, qui est imprimé, avec
  la mention explicite que la colonne « S'appuie sur » affichera un tiret.
  C'est exactement ce que font déjà `physique-3e-resistance-ohm` et
  `physique-3e-energie` pour leurs prérequis de quatrième.
- **Les prérequis mathématiques deviennent lourds.** Vecteurs et produit
  scalaire (1re-travail-energie), dérivées (1re-cinematique, tle-dynamique),
  exponentielle et logarithme (tle-radioactivite, tle-acides-bases : pH),
  équations différentielles (tle-dynamique). Un chapitre placé avant son outil
  mathématique est inabordable : le `rangConseille` doit en tenir compte, et la
  `note` doit le dire.
- **Les erreurs typiques ne sont plus les mêmes qu'au collège.** Au collège
  c'étaient des confusions de grandeurs et des erreurs d'unité. Au lycée
  s'ajoutent : le **signe** (travail d'une force résistante, $\Delta$ d'une
  grandeur, sens d'une réaction), la **notation scientifique** et les ordres de
  grandeur (constantes en $10^{-19}$, $10^{-34}$), les **vecteurs** confondus
  avec leur norme, le **logarithme** ($\text{pH} = -\log[\text{H}_3\text{O}^+]$,
  et le piège de $10^{-\text{pH}}$), et les **chiffres significatifs**.
  `valider` — contrôle de vraisemblance, d'unité, de signe — y est beaucoup
  plus mobilisable qu'au collège : ne le laisse pas à 15 %.
- **`réaliser` reste difficile à évaluer sur copie**, mais le lycée s'y prête
  mieux : titrage, montage électrique, spectroscopie, calorimétrie sont de
  vrais protocoles. Une question « quel protocole convient ? » l'évalue
  déclarativement et honnêtement.

### Contrôles avant de dire que c'est fini

```
node --test scripts/manuel/tests/*.test.js          # 665 tests du socle
node scripts/manuel/verifier-corpus.js              # 248 modules, 0 symbole inconnu
node scripts/check-decimal-notation.js              # 4 erreurs PRÉEXISTANTES (fed-bts, si-1re, si-tle x2) — ne pas s'en alarmer, mais n'en ajoute aucune
node scripts/manuel/build.js lycee-physique-2nde --prof
node scripts/manuel/build.js lycee-physique-1re --prof
node scripts/manuel/build.js lycee-physique-tle --prof
node scripts/manuel/build.js lycee-physique --prof
node scripts/manuel/progression.js
```

Exigence : **0 erreur LaTeX, 0 figure bloquée, 32 fiches sur 32**. Ne déclare
rien de terminé sans avoir lu la sortie de ces commandes.

Vérifie en plus, **dans le `.toc` et non au jugé**, que « Progression
annuelle » et « Suivi des notions » sont bien en tête des quatre éditions
professeur :

```
grep -oE '\{chapter\}\{[^}]*\}' "Manuel scolaire/lycee-physique-2nde/lycee-physique-2nde-prof.toc"
```

Et ouvre au moins une page de progression et une page d'erreurs en image
(`pdftoppm -png -r 100 -f <page> -l <page>`) : la compilation sans erreur ne
prouve pas que rien ne se chevauche. C'est ce contrôle visuel qui a révélé
neuf collisions d'étiquettes sur les figures du collège, invisibles pour
LaTeX.

### Ce que tu n'as pas le droit de faire

- **Ne retouche pas le fond pédagogique de `js/data/`** sans me demander.
  L'écriture y est réservée aux défauts mécaniques (accents, notation
  décimale, élision, schéma non uniforme), toujours en commit séparé. Une
  fiche prof ne réécrit jamais le cours : c'est ce qui garantit que le livre ne
  diverge pas du site. La réécriture de questions d'évaluation (point 2 de
  l'audit) est une **exception à me faire valider explicitement**.
- **Ne force jamais un garde-fou.** Une figure sans provenance, un Unicode non
  traduit, une erreur LaTeX se corrigent par la cause.
- **Ne change pas la graine.** En changer renumérote tous les exercices et
  invalide les renvois déjà écrits — y compris ceux des fiches maths et du
  collège physique.
- **N'incrémente le `?v=N` de `index.html` que si tu touches `js/` ou
  `css/`.** Les fiches prof ne sont pas chargées par le site : les écrire seules
  ne justifie aucun cache-busting. En revanche une correction dans
  `js/data/physique-*/` l'exige, sur **toutes** les balises locales (règle de
  `CLAUDE.md`).

### Livrables

1. Les 32 fiches.
2. Les 8 PDF (4 ouvrages × élève + prof), copiés dans
   `C:\Users\Dylan\Desktop\manuels\` en respectant la convention de nommage
   des 24 PDF déjà présents : `Physique-Chimie Seconde - Edition
   professeur.pdf`, `Physique-Chimie Lycee (cycle complet) - Edition
   eleve.pdf`, etc. (sans accents dans le nom de fichier).
3. `CODEBASE_MAP.md` et `contenu.md` mis à jour — dont la **répartition
   mesurée** des 160 compétences, comme le font les quatre sections de maths.
4. `docs/manuels/PROGRESSION.md` régénéré.
5. Commits séparés : les fiches d'un côté, toute correction de `js/data/` de
   l'autre.

**Politique de branches** : les manuels et PDF restent en local, ils ne sont
pas poussés.

### Un test par niveau, si tu veux aller au bout

Le lycée maths porte `scripts/manuel/tests/prof-2nde.test.js` et
`prof-tle.test.js` (8 et 10 tests), qui vérifient par le calcul ce que les
fiches affirment : rangs formant une permutation, aucun renvoi vers
l'évaluation, renvoi tombant sur un énoncé qui parle réellement du sujet de
l'erreur (mots-clés sur le tirage réel), et **plafond de 35 % sur la
répartition des compétences**. C'est ce dernier garde-fou qui attrape le
défaut qu'aucun module pris isolément ne montre. Trois fichiers de ce genre
pour la physique du lycée seraient le bon achèvement du chantier — à décider
après les fiches, pas avant.
