# Import référentiel BTS FED S8 + programme de notions

## Contexte

Spark Learning doit à terme proposer des modules sur les matières techniques
propres aux options de BTS (CIRA, MS, FED). Le site couvre déjà un tronc
généraliste (`si-bts`, `physique-bts`) mais rien de spécifique aux savoirs
d'option. On démarre par le **BTS FED**, savoir **S8 — Études technologiques
des systèmes** (le plus volumineux : sections A/B/C/D, options GCF/FCA/DBC).

La source de vérité est le référentiel officiel du diplôme (2014), déjà
extrait en Markdown dans un projet séparé :
`C:\Users\Dylan\Desktop\Enseignement\BTS FED\referentiel\S8_etudes_technologiques_systemes.md`.

Ce chantier est **uniquement documentaire** : il prépare le terrain
(référentiel importé + programme structuré) pour un futur chantier de
rédaction de modules. Aucun module Spark Learning n'est écrit ici.

## Objectif

1. Copier le référentiel S8 brut dans `docs/` de Spark Learning, comme
   référence stable et consultable sans dépendre du projet externe.
2. Construire `docs/programmes-fed.md`, structuré comme `docs/programmes-si.md`
   (source de vérité pour la génération future des modules, avec statuts
   🔴/🟡/🟢), en y transcrivant toutes les notions de S8.

## Hors périmètre

- Les savoirs S4, S5, S9, S10 (autres savoirs GCF listés dans le référentiel
  FED) — chantiers séparés à venir.
- Toute écriture de contenu de module (`js/data/`, `index.html`, `loader.js`).
- Les BTS CIRA et MS — traités séparément plus tard, priorité FED d'abord.
- Réutilisation des 37 fiches privées de cours de Dylan — décision prise de
  repartir du référentiel seul, contenu privé et contenu plateforme restent
  séparés.

## Fichiers produits

### 1. `docs/referentiel-fed-S8.md`

Copie intégrale, non modifiée, du fichier source. Sert de référence brute
pour les futurs chantiers de rédaction, sans avoir à rouvrir le projet
externe `Enseignement/BTS FED`.

### 2. `docs/programmes-fed.md`

Nouveau fichier programme. En-tête identique en esprit à
`programmes-si.md` (légende 🟢/🔴/🟡, avertissement "source de vérité pour
la génération des modules"), avec une section dédiée :

```
## BTS FED — S8 Études technologiques des systèmes (level: 3)

### A — Connaissances fondamentales
| # | Notion | id suggéré | GCF | FCA | DBC | Statut |
...

### B — Systèmes et technologies
...

### C — Énergie électrique
...

### D — Communication
...
```

Une note en tête de la section S8 précise que S4/S5/S9/S10 seront ajoutés
dans des chantiers ultérieurs, pour que le fichier ne soit pas lu comme
complet pour la totalité du diplôme FED.

**Colonnes :**
- `#` — numéro séquentiel dans la sous-section.
- `Notion` — libellé de la connaissance, repris du référentiel.
- `id suggéré` — au format `fed-bts-{topic-kebab-case}`, cohérent avec la
  convention existante (`si-bts-{topic}`, `physique-bts-{topic}`). Indicatif
  pour le futur chantier de contenu — pas encore utilisé nulle part dans le
  code.
- `GCF` / `FCA` / `DBC` — niveaux d'exigence (0-3) tels que dans le
  référentiel.
- `Statut` — 🔴 pour toutes les lignes (rien n'est construit à ce stade).

**Granularité des lignes** (règle appliquée pour rester traçable au
référentiel, sans découpage inventé) :
- Une ligne par notion explicitement codée dans le référentiel quand ce
  code existe (ex : A1-1, A1-2, A2-1 à A2-4, B1-1, B1-2, B3-1 à B3-4, B5-1
  à B5-13, B6-1 à B6-4, D1-1, D1-2).
- Une ligne par sous-titre (`##`/`###`) quand la table du référentiel ne
  détaille pas de code individuel (A3, A4, A5, A7, A8, B2-1 à B2-3, B4-1,
  B4-2, B7, B8-1, B8-2, B9, B10, B11, C1-1, C2-1, C2-2, C3, D2-1 à D2-3).

Cette règle garde la maîtrise du niveau GCF/FCA/DBC par notion individuelle
là où le référentiel la donne (ex : dans B5, B5-5/B5-11/B5-13 ont un niveau
GCF nettement supérieur au reste de la sous-section) sans fabriquer de
découpage supplémentaire.

## Vérification

Pas de tests automatisés applicables (chantier documentaire). Vérification
par relecture manuelle : toutes les notions du référentiel S8 (sections
A/B/C/D) doivent apparaître dans `programmes-fed.md`, avec les niveaux
GCF/FCA/DBC fidèles au référentiel.
