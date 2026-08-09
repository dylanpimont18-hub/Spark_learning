# Import référentiel BTS FED S8 + programme de notions — Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Importer le référentiel BTS FED — savoir S8 (Études technologiques des systèmes) — dans Spark Learning, et construire `docs/programmes-fed.md`, le programme structuré (notions + niveaux GCF/FCA/DBC + statut) qui servira de source de vérité pour un futur chantier de rédaction de modules.

**Architecture:** Chantier purement documentaire, deux fichiers Markdown dans `docs/`. Aucun code, aucun module Spark Learning n'est écrit. Le contenu exact des tables provient de la transcription du référentiel officiel (`Enseignement/BTS FED/referentiel/S8_etudes_technologiques_systemes.md`), déjà relu et découpé selon la règle de granularité validée dans le spec.

**Tech Stack:** Markdown uniquement, pas de build, pas de test automatisé applicable — vérification par comptage de lignes (`grep`/`wc`) et relecture.

## Global Constraints

- Spec de référence : `docs/superpowers/specs/2026-08-02-programme-fed-s8-design.md` — toute divergence avec ce document doit être signalée, pas silencieusement corrigée.
- Aucun fichier `js/data/`, `index.html` ou `js/loader.js` n'est touché dans ce plan (hors périmètre explicite du spec).
- Seuls S8 (sections A/B/C/D) sont traités. Ne pas ajouter S4/S5/S9/S10.
- `id suggéré` au format `fed-bts-{topic-kebab-case}` — ce sont des identifiants indicatifs, non encore utilisés dans le code.
- Statut de toutes les lignes : 🔴 (rien n'est construit).
- Niveaux GCF/FCA/DBC transcrits fidèlement depuis le référentiel. Quand une ligne du programme regroupe plusieurs lignes du référentiel sans code individuel, le niveau est donné en plage `min-max` (ex : `1-3`) plutôt qu'une valeur unique inventée.

---

### Task 1: Copier le référentiel S8 brut

**Files:**
- Create: `docs/referentiel-fed-S8.md`
- Source (lecture seule, hors dépôt Spark Learning) : `C:\Users\Dylan\Desktop\Enseignement\BTS FED\referentiel\S8_etudes_technologiques_systemes.md`

**Interfaces:**
- Consumes: rien (fichier source externe déjà lu et validé pendant le brainstorming).
- Produces: `docs/referentiel-fed-S8.md`, copie fidèle utilisée comme référence par les Tasks 2 à 5 pour vérifier les niveaux transcrits.

- [ ] **Step 1: Copier le fichier**

```bash
cp "/c/Users/Dylan/Desktop/Enseignement/BTS FED/referentiel/S8_etudes_technologiques_systemes.md" "docs/referentiel-fed-S8.md"
```

- [ ] **Step 2: Vérifier que la copie est identique à la source**

Run: `diff "/c/Users/Dylan/Desktop/Enseignement/BTS FED/referentiel/S8_etudes_technologiques_systemes.md" "docs/referentiel-fed-S8.md"`
Expected: aucune sortie (fichiers identiques).

- [ ] **Step 3: Commit**

```bash
git add docs/referentiel-fed-S8.md
git commit -m "docs(fed): copie brute du référentiel S8 (études technologiques des systèmes)"
```

---

### Task 2: Créer `docs/programmes-fed.md` — en-tête + Section A

**Files:**
- Create: `docs/programmes-fed.md`

**Interfaces:**
- Consumes: `docs/referentiel-fed-S8.md` (Task 1) pour vérification croisée des niveaux.
- Produces: fichier `docs/programmes-fed.md` avec l'en-tête du programme et la section `### A — Connaissances fondamentales` (11 lignes), que les Tasks 3-5 complètent en y ajoutant les sections B, C, D à la suite.

- [ ] **Step 1: Écrire le fichier avec l'en-tête et la Section A**

Créer `docs/programmes-fed.md` avec exactement ce contenu :

```markdown
# Programme BTS FED — Matières techniques (S8)

> Source de vérité pour la génération future des modules FED.
> 🟢 = module créé | 🔴 = à faire | 🟡 = en cours
>
> **Périmètre actuel : uniquement S8 — Études technologiques des systèmes.**
> S4, S5, S9, S10 seront ajoutés dans des chantiers ultérieurs — ne pas lire
> ce fichier comme couvrant l'intégralité du diplôme FED.
>
> Source : référentiel officiel BTS FED (2014), voir `docs/referentiel-fed-S8.md`.
> Options : **GCF** (Génie Climatique et Fluidique), **FCA** (Froid et
> Conditionnement d'Air), **DBC** (Domotique et Bâtiments Communicants).
> Niveaux : 0 = non exigé, 1 = sensibilisation, 2 = application guidée, 3 = maîtrise.
>
> Granularité des lignes : une ligne par notion officiellement codée dans le
> référentiel (ex : A1-1, B5-7) quand ce code existe ; une ligne par
> sous-titre du référentiel sinon. Quand une ligne regroupe plusieurs
> sous-items de niveaux différents, les niveaux sont donnés en plage
> `min-max`.

---

## BTS FED — S8 Études technologiques des systèmes (level: 3)

### A — Connaissances fondamentales

| # | Notion | id suggéré | GCF | FCA | DBC | Statut |
|---|--------|------------|:---:|:---:|:---:|:------:|
| 1 | A1-1 Thermique des tubes | `fed-bts-a1-1-thermique-tubes` | 2 | 2 | 1 | 🔴 |
| 2 | A1-2 Hygrothermie | `fed-bts-a1-2-hygrothermie` | 3 | 3 | 2 | 🔴 |
| 3 | A2-1 Génie civil, structure et architecture | `fed-bts-a2-1-genie-civil` | 2 | 2 | 2 | 🔴 |
| 4 | A2-2 Simulation dynamique thermique (STD) | `fed-bts-a2-2-std` | 2 | 2 | 2 | 🔴 |
| 5 | A2-3 Bilan thermique | `fed-bts-a2-3-bilan-thermique` | 3 | 2 | 2 | 🔴 |
| 6 | A2-4 DJU, besoin d'énergie utile | `fed-bts-a2-4-dju` | 3 | 2 | 3 | 🔴 |
| 7 | A3 Dynamique des fluides | `fed-bts-a3-dynamique-fluides` | 3 | 3 | 1-2 | 🔴 |
| 8 | A4 Traitement d'air | `fed-bts-a4-traitement-air` | 3 | 3 | 2-3 | 🔴 |
| 9 | A5 Thermodynamique appliquée | `fed-bts-a5-thermodynamique-appliquee` | 0-3 | 3 | 0-2 | 🔴 |
| 10 | A7 Acoustique appliquée | `fed-bts-a7-acoustique` | 3 | 3 | 1 | 🔴 |
| 11 | A8 Combustion appliquée | `fed-bts-a8-combustion` | 3 | 1 | 1 | 🔴 |
```

- [ ] **Step 2: Vérifier le nombre de lignes de la Section A**

Run: `grep -c '^| [0-9]' docs/programmes-fed.md`
Expected: `11`

- [ ] **Step 3: Commit**

```bash
git add docs/programmes-fed.md
git commit -m "docs(fed): programme FED S8 — en-tête + section A (connaissances fondamentales)"
```

---

### Task 3: Ajouter la Section B (systèmes et technologies)

**Files:**
- Modify: `docs/programmes-fed.md` (ajouter à la suite de la Section A)

**Interfaces:**
- Consumes: fichier produit par Task 2 (en-tête + Section A déjà en place).
- Produces: fichier complété avec `### B — Systèmes et technologies` (34 lignes), consommé par Task 5 pour la vérification finale du total.

- [ ] **Step 1: Ajouter la section B à la suite de la Section A**

Ajouter ce bloc à la fin du fichier `docs/programmes-fed.md` :

```markdown

### B — Systèmes et technologies

| # | Notion | id suggéré | GCF | FCA | DBC | Statut |
|---|--------|------------|:---:|:---:|:---:|:------:|
| 1 | B1-1 Production (chauffage) | `fed-bts-b1-1-production-chauffage` | 2-3 | 0-3 | 1-3 | 🔴 |
| 2 | B1-2 Émission (chauffage) | `fed-bts-b1-2-emission-chauffage` | 3 | 1 | 2-3 | 🔴 |
| 3 | B2-1 Ventilation | `fed-bts-b2-1-ventilation` | 3 | 3 | 2-3 | 🔴 |
| 4 | B2-2 Climatisation | `fed-bts-b2-2-climatisation` | 3 | 3 | 2-3 | 🔴 |
| 5 | B2-3 Désenfumage et sécurité incendie | `fed-bts-b2-3-desenfumage` | 3 | 3 | 2 | 🔴 |
| 6 | B3-1 Alimentation en EFS | `fed-bts-b3-1-alimentation-efs` | 3 | 0 | 1 | 🔴 |
| 7 | B3-2 Production et distribution ECS | `fed-bts-b3-2-production-ecs` | 3 | 2 | 2-3 | 🔴 |
| 8 | B3-3 Traitement d'eau sanitaire | `fed-bts-b3-3-traitement-eau-sanitaire` | 3 | 2 | 0 | 🔴 |
| 9 | B3-4 Eaux usées et eaux vannes | `fed-bts-b3-4-eaux-usees` | 3 | 1 | 1 | 🔴 |
| 10 | B4-1 Réseaux hydrauliques | `fed-bts-b4-1-reseaux-hydrauliques` | 3 | 3 | 1-3 | 🔴 |
| 11 | B4-2 Réseaux aérauliques | `fed-bts-b4-2-reseaux-aerauliques` | 3 | 3 | 2-3 | 🔴 |
| 12 | B5-1 Compresseurs volumétriques | `fed-bts-b5-1-compresseurs-volumetriques` | 1 | 3 | 1 | 🔴 |
| 13 | B5-2 Compresseurs centrifuges | `fed-bts-b5-2-compresseurs-centrifuges` | 0 | 1 | 0 | 🔴 |
| 14 | B5-3 Évaporateurs | `fed-bts-b5-3-evaporateurs` | 1 | 3 | 1 | 🔴 |
| 15 | B5-4 Détendeurs | `fed-bts-b5-4-detendeurs` | 1 | 3 | 1 | 🔴 |
| 16 | B5-5 Systèmes de rejet de chaleur | `fed-bts-b5-5-rejet-chaleur` | 3 | 3 | 1 | 🔴 |
| 17 | B5-6 Composants annexes des circuits frigorifiques | `fed-bts-b5-6-composants-annexes-froid` | 1 | 3 | 0 | 🔴 |
| 18 | B5-7 Organes frigorifiques de régulation | `fed-bts-b5-7-organes-regulation-frigorifique` | 0 | 3 | 0 | 🔴 |
| 19 | B5-8 Système de retour d'huile | `fed-bts-b5-8-retour-huile` | 0 | 3 | 0 | 🔴 |
| 20 | B5-9 Équipements de sécurité (froid) | `fed-bts-b5-9-securite-froid` | 1 | 3 | 1 | 🔴 |
| 21 | B5-10 Tuyauteries (froid) | `fed-bts-b5-10-tuyauteries-froid` | 0 | 3 | 0 | 🔴 |
| 22 | B5-11 Récupération d'énergie sur systèmes frigorifiques | `fed-bts-b5-11-recuperation-energie-froid` | 2 | 3 | 0 | 🔴 |
| 23 | B5-12 Systèmes frigorifiques (multi-températures, cascade) | `fed-bts-b5-12-systemes-frigorifiques-avances` | 0 | 3 | 0 | 🔴 |
| 24 | B5-13 Stockage de froid | `fed-bts-b5-13-stockage-froid` | 2 | 3 | 1 | 🔴 |
| 25 | B6-1 Photovoltaïque | `fed-bts-b6-1-photovoltaique` | 2 | 2 | 3 | 🔴 |
| 26 | B6-2 Éolien | `fed-bts-b6-2-eolien` | 2 | 1 | 3 | 🔴 |
| 27 | B6-3 Cogénération et micro-cogénération | `fed-bts-b6-3-cogeneration` | 2 | 1 | 2 | 🔴 |
| 28 | B6-4 Pile à combustible | `fed-bts-b6-4-pile-combustible` | 1 | 1 | 1 | 🔴 |
| 29 | B7 Éclairage intérieur et extérieur | `fed-bts-b7-eclairage` | 1 | 0 | 3 | 🔴 |
| 30 | B8-1 Architecture des systèmes centralisés | `fed-bts-b8-1-architecture-systemes-centralises` | 0-3 | 0-3 | 3 | 🔴 |
| 31 | B8-2 Domaines d'applications (GTB, sécurité) | `fed-bts-b8-2-domaines-applications-gtb` | 0-3 | 0-3 | 3 | 🔴 |
| 32 | B9 Comptage des énergies | `fed-bts-b9-comptage-energies` | 2 | 2 | 3 | 🔴 |
| 33 | B10 Stockage de l'énergie | `fed-bts-b10-stockage-energie` | 1-3 | 1 | 1-3 | 🔴 |
| 34 | B11 Régulation | `fed-bts-b11-regulation` | 3 | 3 | 3 | 🔴 |
```

- [ ] **Step 2: Vérifier le nombre total de lignes (A + B)**

Run: `grep -c '^| [0-9]' docs/programmes-fed.md`
Expected: `45` (11 de la Section A + 34 de la Section B)

- [ ] **Step 3: Commit**

```bash
git add docs/programmes-fed.md
git commit -m "docs(fed): programme FED S8 — section B (systèmes et technologies)"
```

---

### Task 4: Ajouter la Section C (énergie électrique)

**Files:**
- Modify: `docs/programmes-fed.md` (ajouter à la suite de la Section B)

**Interfaces:**
- Consumes: fichier produit par Task 3.
- Produces: fichier complété avec `### C — Énergie électrique` (4 lignes).

- [ ] **Step 1: Ajouter la section C à la suite de la Section B**

```markdown

### C — Énergie électrique

| # | Notion | id suggéré | GCF | FCA | DBC | Statut |
|---|--------|------------|:---:|:---:|:---:|:------:|
| 1 | C1-1 Distribution BT | `fed-bts-c1-1-distribution-bt` | 1-2 | 1-2 | 2-3 | 🔴 |
| 2 | C2-1 Moteurs électriques | `fed-bts-c2-1-moteurs-electriques` | 1 | 2 | 2 | 🔴 |
| 3 | C2-2 Variation de vitesse | `fed-bts-c2-2-variation-vitesse` | 2 | 2 | 2 | 🔴 |
| 4 | C3 Gestion de l'énergie électrique | `fed-bts-c3-gestion-energie-electrique` | 1-2 | 1-2 | 1-3 | 🔴 |
```

- [ ] **Step 2: Vérifier le nombre total de lignes (A + B + C)**

Run: `grep -c '^| [0-9]' docs/programmes-fed.md`
Expected: `49` (45 précédentes + 4 de la Section C)

- [ ] **Step 3: Commit**

```bash
git add docs/programmes-fed.md
git commit -m "docs(fed): programme FED S8 — section C (énergie électrique)"
```

---

### Task 5: Ajouter la Section D (communication) + récapitulatif final

**Files:**
- Modify: `docs/programmes-fed.md` (ajouter à la suite de la Section C, puis un récapitulatif)

**Interfaces:**
- Consumes: fichier produit par Task 4.
- Produces: `docs/programmes-fed.md` final et complet pour S8 (54 lignes de notions au total), prêt à servir de source de vérité pour le futur chantier de rédaction de modules.

- [ ] **Step 1: Ajouter la section D et le récapitulatif**

```markdown

### D — Communication

| # | Notion | id suggéré | GCF | FCA | DBC | Statut |
|---|--------|------------|:---:|:---:|:---:|:------:|
| 1 | D1-1 Médias de communication | `fed-bts-d1-1-medias-communication` | 1 | 1 | 3 | 🔴 |
| 2 | D1-2 Standards de communication | `fed-bts-d1-2-standards-communication` | 2 | 2 | 3 | 🔴 |
| 3 | D2-1 Réseaux informatiques | `fed-bts-d2-1-reseaux-informatiques` | 0-1 | 0-1 | 2-3 | 🔴 |
| 4 | D2-2 VDI (Voix-Données-Images) | `fed-bts-d2-2-vdi` | 0-1 | 0-1 | 3 | 🔴 |
| 5 | D2-3 Téléphonie | `fed-bts-d2-3-telephonie` | 0 | 0 | 3 | 🔴 |

---

## Récapitulatif — S8

| Section | Notions | Faites | Reste |
|---------|--------:|-------:|------:|
| A — Connaissances fondamentales | 11 | 0 | 11 |
| B — Systèmes et technologies | 34 | 0 | 34 |
| C — Énergie électrique | 4 | 0 | 4 |
| D — Communication | 5 | 0 | 5 |
| **Total S8** | **54** | **0** | **54** |
```

- [ ] **Step 2: Vérifier le nombre total de lignes de notions**

Run: `grep -c '^| [0-9]' docs/programmes-fed.md`
Expected: `54` (le tableau récapitulatif ajouté à l'étape précédente ne matche pas ce motif : ses lignes commencent par `| A`, `| B`, `| C`, `| D`, `| **Total` — pas par un chiffre)

Run: `grep -c '🔴' docs/programmes-fed.md`
Expected: `54`

- [ ] **Step 3: Relecture croisée avec le référentiel**

Ouvrir `docs/referentiel-fed-S8.md` et `docs/programmes-fed.md` côte à côte. Vérifier que :
- chaque notion codée (A1-1, A1-2, A2-1 à A2-4, B1-1, B1-2, B3-1 à B3-4, B5-1 à B5-13, B6-1 à B6-4, D1-1, D1-2) apparaît avec le même niveau GCF/FCA/DBC que le référentiel ;
- chaque sous-titre non codé (A3, A4, A5, A7, A8, B2-1 à B2-3, B4-1, B4-2, B7, B8-1, B8-2, B9, B10, B11, C1-1, C2-1, C2-2, C3, D2-1 à D2-3) est présent avec une plage de niveaux cohérente avec ses sous-lignes.

- [ ] **Step 4: Commit**

```bash
git add docs/programmes-fed.md
git commit -m "docs(fed): programme FED S8 — section D (communication) + récapitulatif complet"
```

---

## Suite (hors périmètre de ce plan)

Une fois ce plan exécuté, `docs/programmes-fed.md` et `docs/referentiel-fed-S8.md` existent et sont commités. Les chantiers suivants (non planifiés ici) :
- Ajouter S4, S5, S9, S10 au même fichier programme (mêmes conventions).
- Choisir les premières notions S8 à transformer en modules réels (`js/data/`), en respectant le workflow défini dans `CLAUDE.md` (section 3) et les règles de rédaction (section 2 : aération, `fr()`, ton socratique).
