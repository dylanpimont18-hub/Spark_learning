# Suivi de la généralisation des manuels

Tableau de bord du chantier décrit dans [le cahier des charges](cahier-des-charges-generalisation.md).
Périmètre : collège et lycée, maths, physique-chimie et sciences de l'ingénieur.

**À tenir à jour après chaque ouvrage livré.** Une ligne ne passe au vert que si les contrôles de recette du cahier des charges ont été exécutés et leur sortie constatée, jamais sur la foi d'un compte rendu.

Dernière mise à jour : 2026-09-13.

---

## Légende des niveaux

| Niveau | Signification |
|---|---|
| — | rien de fait, l'édition professeur est une coquille qui se déclare publiable à tort |
| N1 | socle publiable : ne ment plus, mais pas de couche professeur |
| N2 | édition professeur vendable : fiches complètes, remédiations, compétences, progression |
| N3 | qualité de référence : figures enrichies, exercices illustrés, « Découvrir » réécrits, banque calibrée |

---

## État par ouvrage

### Maths collège

| Ouvrage | Modules | Niveau | Dernière compilation | Notes |
|---|---|---|---|---|
| `college-maths-6e` | 10 | **N3** | 2026-09-13, 279 p. | manuel de référence |
| `college-maths-5e` | 14 | — | 2026-08-28, 145 p. | vague 1, prioritaire |
| `college-maths-4e` | 12 | — | 2026-08-28, 131 p. | vague 1, prioritaire |
| `college-maths-3e` | 13 | — | 2026-08-28, 145 p. | vague 1 |
| `college-maths` (cycle) | 49 | — | 2026-08-28, 489 p. | se complète des quatre niveaux |

### Maths lycée

| Ouvrage | Modules | Niveau | Dernière compilation | Notes |
|---|---|---|---|---|
| `lycee-maths-2nde` | 14 | — | 2026-08-28, 167 p. | vague 2 |
| `lycee-maths-1re` | 10 | — | 2026-08-28 | vague 2 |
| `lycee-maths-tle` | 12 | — | 2026-08-28 | vague 2 |
| `lycee-maths` (cycle) | 36 | — | 2026-08-28 | |

### Physique-chimie

| Ouvrage | Modules | Niveau | Dernière compilation | Notes |
|---|---|---|---|---|
| `college-physique-4e` | 6 | — | 2026-09-13, 127 p. | vague 3 ; 14 cercles écrasés |
| `college-physique-3e` | 6 | — | 2026-08-28 | vague 3 ; 10 cercles écrasés |
| `lycee-physique-2nde` | 10 | — | 2026-08-28 | vague 3 ; 16 cercles écrasés |
| `lycee-physique-1re` | 11 | — | 2026-08-28 | vague 3 |
| `lycee-physique-tle` | 11 | — | 2026-08-28 | vague 3 ; caractères d'indice non traduits |
| ouvrages de cycle | — | — | | |

### Sciences de l'ingénieur

| Ouvrage | Modules | Niveau | Dernière compilation | Notes |
|---|---|---|---|---|
| `lycee-si` | 20 | — | 2026-09-13, 355 p. | vague 4 ; **référentiel absent**, 111 blocs de code |

---

## Correctifs d'outillage préalables

À faire **avant** de produire du contenu. Les faire après obligerait à reprendre du travail déjà écrit.

| # | Correctif | État | Bloque |
|---|---|---|---|
| E1 | L'édition professeur sans fiches refuse de se déclarer publiable | à faire | tout |
| E2 | Le mode d'emploi n'annonce que les rubriques présentes | à faire | tout |
| E3 | Référentiel déclaré par ouvrage, échec si inconnu | à faire | physique, SI |
| E4 | Rayon respecté au-delà des petits cercles | à faire | physique |
| E5 | Traitement verbatim des blocs de code | à faire | SI |
| E6 | Contrôle du corpus étendu aux étiquettes de figures | à faire | physique lycée |
| E7 | Planche de contrôle affichant toutes les figures | à faire | N3 |
| E8 | Contrôle automatique des débordements de cadre | à faire | N3 |
| E9 | Refus de conformité sur construction non traduite | à faire | SI |
| E10 | Verrou de compilation par ouvrage | à faire | production parallèle |
| E12 | Ligne de base : compiler tout le périmètre et consigner | à faire | tout |

Le référentiel des sciences de l'ingénieur reste à écrire et à faire valider par un enseignant de la matière.

---

## Journal

| Date | Ouvrage | Fait | Commit |
|---|---|---|---|
| 2026-09-12 | `college-maths-6e` | audit en panel, 22 défauts corrigés, figures 10 → 40, figures d'exercices créées, progression refondue en paysage | `2d91ee5` |
| 2026-09-13 | `college-maths-6e` | 9 « Découvrir » réécrits, banque 60 → 252 énoncés, promesse de l'avant-propos rétablie | `fd1c7e9` |
| 2026-09-13 | `bts-maths-prep` | correction d'une régression : pourcentage non échappé cassant la compilation | `e37cf58` |
| 2026-09-13 | — | cahier des charges de généralisation | `0f972b0` |

---

## Ce qui reste ouvert sur le manuel de référence

À traiter un jour, sans bloquer la généralisation.

- Six remédiations sans renvoi, faute d'exercice travaillant réellement l'erreur. Ce sont des limites des générateurs, pas des oublis.
- Des quasi-doublons entre exercices visibles et banque, partageant les mêmes nombres sous un habillage différent.
- La densité de la banque, autour de deux à trois exercices par page, qui porte l'ouvrage à 279 pages.
