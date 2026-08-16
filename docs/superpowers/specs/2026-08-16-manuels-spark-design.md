# Design — Skill `manuels-spark`

**Date** : 2026-08-16
**Objectif** : produire, depuis les 203 modules de `js/data/`, sept manuels imprimables
et vendables en impression à la demande, via une chaîne JS → LaTeX → PDF pilotée par un
skill reprenable.

Ce design s'appuie sur l'audit d'outillage du 2026-08-15, qui a prouvé la faisabilité :
203/203 modules convertis et compilés, et établi que la syntaxe KaTeX des modules
(`\dfrac`, `\parallel`, `\overline`, la notation décimale `1{,}5`) compile **telle quelle**
en LaTeX, sans traduction.

---

## 1. Décisions actées

| Question | Décision |
|---|---|
| Périmètre du skill | La chaîne manuel complète : `js/data` → LaTeX → PDF. Pas la création de modules. |
| Unité de travail | Incrémental et reprenable, piloté par un tableau de bord `.md` régénéré par scan. |
| Découpage des ouvrages | Niveau × matière, systématique, sans exception. |
| Qualité des figures | Seules les figures justes **par construction** entrent dans un PDF. |
| Format de vente | Impression à la demande (KDP / Bookelis), intérieur **couleur**. |
| Édition professeur | Dérivé des données + objectifs et prérequis rédigés. |
| Architecture | Skill mince porté par un outillage committé dans le dépôt. |
| Écriture dans `js/data` | Autorisée pour les défauts **mécaniques** uniquement. |

---

## 2. Artefacts

### Sept ouvrages

Un par couple niveau × matière, dans `manuels/<ouvrage>/` :

| Ouvrage | Modules | Source |
|---|---:|---|
| `college-maths` | 48 | `6e` `5e` `4e` `3e` |
| `lycee-maths` | 36 | `lycee-2nde` `lycee-1re` `lycee-tle` |
| `lycee-si` | 20 | `si-2nde` `si-1re` `si-tle` |
| `bts-maths` | 27 | `bts` `bts-prep` |
| `bts-physique` | 10 | `physique-bts` |
| `bts-si` | 8 | `si-bts` |
| `bts-fed` | 54 | `fed-bts` |

### Deux éditions par ouvrage

- `<ouvrage>-eleve.pdf` — énoncés, espaces de réponse, sans corrigés.
- `<ouvrage>-prof.pdf` — corrigés détaillés, corrections socratiques du quiz, pièges,
  barème de l'évaluation, **banque d'exercices supplémentaires** (tirages additionnels de
  `generate()`, absents de l'édition élève), plus objectifs visés et prérequis rédigés.

L'édition prof doit permettre à un collègue d'enseigner à partir du livre et de distribuer
l'édition élève à ses étudiants. Elle cite donc les pages de l'édition élève, ce qui impose
de compiler l'élève d'abord et d'en réutiliser les étiquettes (paquet `xr`).

### Tableau de bord

`docs/manuels/PROGRESSION.md`, **régénéré par scan, jamais édité à la main**. Il se
reconstruit en comparant les modules présents dans `js/data/` aux chapitres déjà intégrés
dans chaque ouvrage : un module ajouté demain apparaît seul en « à faire ».

```
## college-maths — Collège, Mathématiques        [12 / 48]   graine: 4172

| Module              | Chapitre | Figure      | Intégré    |
|---------------------|:--------:|:-----------:|------------|
| 6e-fractions        |    ✓     | TikZ exact  | 2026-08-16 |
| 6e-division         |    ✓     | à retracer  | 2026-08-16 |
| 6e-nombres-decimaux |    —     | —           | —          |
```

Valeurs de la colonne Figure : `TikZ exact`, `PGFPlots`, `à retracer` (bloquant), `ambiance`.

---

## 3. Outillage committé

`scripts/manuel/`, huit modules à responsabilité unique :

| Fichier | Rôle |
|---|---|
| `schema.js` | Schéma des modules + validateur qui échoue bruyamment |
| `extract.js` | Chargement en contexte isolé, graine déterministe → JSON neutre |
| `latex.js` | HTML/KaTeX → LaTeX : table Unicode, échappement, typographie française |
| `figures.js` | Triage et rendu : SVG→TikZ, fonction→PGFPlots, ou blocage |
| `chapitre.js` | Un module → un `.tex`, en édition élève ou prof |
| `ouvrage.js` | Assemblage : préambule, page de titre, sommaire, index |
| `progression.js` | Régénère le tableau de bord par scan |
| `build.js` | Orchestration en ligne de commande |

**Flux** : `js/data` → extraction → JSON neutre → conversion + figures → un `.tex` par
chapitre → `.tex` d'ouvrage → LuaLaTeX (deux passes) → PDF.

`chapitre.js` et `ouvrage.js` restent séparés parce qu'ils changent pour des raisons
différentes : l'un quand la structure d'un chapitre évolue, l'autre quand la maquette du
livre évolue.

### Trois propriétés structurantes

**JSON neutre au milieu.** Le moteur de rendu est interchangeable ; Typst reste un repli
crédible sans retoucher l'extraction.

**Graine déterministe.** `exercice.generate()` tire au hasard. En fournissant un
`Math.random` ensemencé au contexte d'exécution, tout le tirage devient reproductible sans
toucher `helpers.js` ni aucun module (vérifié). La graine est stockée par ouvrage dans le
tableau de bord : un livre se réimprime à l'identique, et en changer est une décision
explicite et tracée.

**Build incrémental.** Un chapitre n'est reconstruit que si l'empreinte de son module a
changé.

---

## 4. Stratégie des figures

Mesuré sur les 203 SVG du corpus :

| Route | Modules | Traitement |
|---|---:|---|
| **Reprise exacte** | **190 (94 %)** | 100 sans `<path>` ; 90 avec arcs seuls (marques d'angle, secteurs). Coordonnées conservées, rendu TikZ. |
| **Retracé** | **13 (6 %)** | Vraies courbes de Bézier tracées à la main → PGFPlots depuis la formule du module. |
| **Bloqué** | reste | Part au tableau de bord ; le chapitre se compose **sans** la figure. |

La reprise exacte apporte trois gains gratuits : étiquettes recomposées en vraie
typographie mathématique ($A'B'$ au lieu d'un texte), graisses et gris repensés pour le
papier, et repérage des textes non accentués.

**Illustrations d'ambiance** : couverture et page d'ouverture d'ouvrage, générées par IA —
aucun contenu mathématique, donc rien de vérifiable à casser. **Jamais** à l'intérieur d'un
chapitre en remplacement d'une figure.

**Garde-fou** : une figure n'entre dans un PDF que si elle porte une provenance enregistrée
— `svg-exact` avec l'empreinte du SVG source, ou `pgfplots` avec la formule tracée. Pas de
provenance, pas d'insertion.

**Réserve** : « exact » signifie fidèle à la source, pas que la source soit juste. Une
relecture des figures du premier ouvrage est recommandée pour calibrer.

---

## 5. Le skill

**Nom** : `manuels-spark` — suit la convention `<chose>-<projet>` (`fiches-fed`,
`exercices-fed`). Volontairement éloigné de `generer-modules`, qui crée du contenu dans
`js/data` alors que celui-ci l'exporte.

### Trois portes d'entrée

1. **Avancement** — « fais avancer les manuels », « fais-moi 5 chapitres » : lit le tableau
   de bord, prend les N prochains modules non intégrés, recompile les ouvrages touchés.
2. **Ciblé** — « exporte le module Thalès », « refais le chapitre X » : utile après
   correction d'un module.
3. **État** — « où en sont les manuels ? » : régénère et affiche le tableau de bord, sans
   rien produire.

### Répartition jugement / garde-fous

**Le skill décide** : triage des figures et retracé des 13 courbes ; rédaction des objectifs
et prérequis de l'édition prof ; ordre pédagogique des chapitres (pas l'ordre des fichiers) ;
illustrations d'ambiance ; interprétation des échecs de compilation.

**Le code interdit** : insérer une figure sans provenance ; changer une graine
implicitement ; publier un ouvrage dont un chapitre a échoué.

### Périmètre d'écriture dans `js/data`

Autorisé pour les défauts **mécaniques et vérifiables sans jugement** : accents manquants,
notation décimale anglaise, schéma de données non uniforme. Toujours en commit séparé et
relisible. **Jamais** de retouche du fond pédagogique.

Raison : corriger un accent uniquement dans le livre créerait deux vérités pour le même
texte — le livre afficherait « théorème » pendant que le site afficherait « theoreme » — et
la divergence grandirait à chaque correction.

---

## 6. Maquette et contraintes d'impression

- **Format** : 17 × 24,4 cm, taille standard POD, adaptée aux figures mathématiques.
- **Gouttière variable** : < 150 pages → 9,5 mm ; 151-300 → 12,7 mm ; au-delà → davantage.
  Impose un **build en deux temps** : compiler, lire la pagination finale, fixer la
  gouttière, recompiler.
- **Couverture** : PDF séparé, largeur de dos calculée depuis la pagination définitive.
- **Intérieur couleur** (décision utilisateur, coût unitaire POD assumé). La maquette reste
  lisible en gris, ce qui laisse la bascule ouverte sans refonte.
- **Polices intégrées**, pas de transparence problématique.

### Ce qui bloque une publication

`build.js` refuse de produire le PDF final si l'un de ces points est rouge :

1. un caractère Unicode non traduit ;
2. une figure sans provenance ;
3. une erreur LaTeX ;
4. un chapitre non compilé ;
5. une pagination qui change entre deux builds à graine identique.

### Tests

Chaque convertisseur porte ses tests unitaires, plus un test de référence : un module connu
doit produire exactement le `.tex` attendu. L'audit a produit trois bugs de conversion en
une soirée (`✓` en mode texte, `\ensuremath` dans les `\text{}`, apostrophe courbe en mode
math) — les tests les verrouillent plutôt que de les redécouvrir sur un livre imprimé.

---

## 7. Hors périmètre

- Création de nouveaux modules pédagogiques (reste `generer-modules`, par ailleurs obsolète
  et à réécrire séparément).
- Publication et mise en vente (dépôt KDP, ISBN, prix) — le skill s'arrête au PDF conforme.
- Fusion avec les fiches Typst du projet BTS FED. Les 54 modules `fed-bts` et les 40 fiches
  Typst couvrent la même matière dans deux formats ; l'arbitrage est reporté.
