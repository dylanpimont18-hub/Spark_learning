# Programme BTS FED — Matières techniques (S8)

> Source de vérité pour la génération future des modules FED.
> 🟢 = module créé | 🔴 = à faire | 🟡 = en cours
>
> **Périmètre actuel : uniquement S8 — Études technologiques des systèmes.**
> S4, S5, S6, S7, S9, S10 seront ajoutés dans des chantiers ultérieurs — ne pas lire
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
| 1 | A1-1 Thermique des tubes | `fed-bts-a1-1-thermique-tubes` | 2 | 2 | 1 | 🟢 |
| 2 | A1-2 Hygrothermie | `fed-bts-a1-2-hygrothermie` | 3 | 3 | 2 | 🟢 |
| 3 | A2-1 Génie civil, structure et architecture | `fed-bts-a2-1-genie-civil` | 2 | 2 | 2 | 🟢 |
| 4 | A2-2 Simulation dynamique thermique (STD) | `fed-bts-a2-2-std` | 2 | 2 | 2 | 🔴 |
| 5 | A2-3 Bilan thermique | `fed-bts-a2-3-bilan-thermique` | 3 | 2 | 2 | 🔴 |
| 6 | A2-4 DJU, besoin d'énergie utile | `fed-bts-a2-4-dju` | 3 | 2 | 3 | 🔴 |
| 7 | A3 Dynamique des fluides | `fed-bts-a3-dynamique-fluides` | 3 | 3 | 1-2 | 🔴 |
| 8 | A4 Traitement d'air | `fed-bts-a4-traitement-air` | 3 | 3 | 2-3 | 🔴 |
| 9 | A5 Thermodynamique appliquée | `fed-bts-a5-thermodynamique-appliquee` | 0-3 | 3 | 0-2 | 🔴 |
| 10 | A7 Acoustique appliquée | `fed-bts-a7-acoustique` | 3 | 3 | 1 | 🔴 |
| 11 | A8 Combustion appliquée | `fed-bts-a8-combustion` | 3 | 1 | 1 | 🔴 |

### B — Systèmes et technologies

| # | Notion | id suggéré | GCF | FCA | DBC | Statut |
|---|--------|------------|:---:|:---:|:---:|:------:|
| 1 | B1-1 Production (chauffage) | `fed-bts-b1-1-production-chauffage` | 2-3 | 0-3 | 1-3 | 🔴 |
| 2 | B1-2 Émission (chauffage) | `fed-bts-b1-2-emission-chauffage` | 3 | 1 | 2-3 | 🔴 |
| 3 | B2-1 Ventilation | `fed-bts-b2-1-ventilation` | 3 | 3 | 2-3 | 🔴 |
| 4 | B2-2 Climatisation | `fed-bts-b2-2-climatisation` | 3¹ | 3¹ | 2-3 | 🔴 |
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

¹ *Le référentiel officiel (`docs/referentiel-fed-S8.md:113`) affiche cette cellule sous une forme ambiguë (`3/3` pour GCF, `—` pour FCA) pour la sous-ligne "Systèmes thermodynamiques...". Interprétation retenue ici : GCF = 3, FCA = 3, par cohérence avec la sous-ligne suivante du référentiel (ligne 114 : `3 | 3 | 2`). À confirmer si le référentiel source (PDF) est consulté directement.*

### C — Énergie électrique

| # | Notion | id suggéré | GCF | FCA | DBC | Statut |
|---|--------|------------|:---:|:---:|:---:|:------:|
| 1 | C1-1 Distribution BT | `fed-bts-c1-1-distribution-bt` | 1-2 | 1-2 | 2-3 | 🔴 |
| 2 | C2-1 Moteurs électriques | `fed-bts-c2-1-moteurs-electriques` | 1 | 2 | 2 | 🔴 |
| 3 | C2-2 Variation de vitesse | `fed-bts-c2-2-variation-vitesse` | 2 | 2 | 2 | 🔴 |
| 4 | C3 Gestion de l'énergie électrique | `fed-bts-c3-gestion-energie-electrique` | 1-2 | 1-2 | 1-3 | 🔴 |

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
| A — Connaissances fondamentales | 11 | 3 | 8 |
| B — Systèmes et technologies | 34 | 0 | 34 |
| C — Énergie électrique | 4 | 0 | 4 |
| D — Communication | 5 | 0 | 5 |
| **Total S8** | **54** | **3** | **51** |
