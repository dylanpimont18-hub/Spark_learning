# Suivi de la généralisation des manuels

Tableau de bord du chantier décrit dans [le cahier des charges](cahier-des-charges-generalisation.md).
Périmètre : collège et lycée, maths, physique-chimie et sciences de l'ingénieur.

**À tenir à jour après chaque ouvrage livré.** Une ligne ne passe au vert que si les contrôles de recette du cahier des charges ont été exécutés et leur sortie constatée, jamais sur la foi d'un compte rendu.

Dernière mise à jour : 2026-09-14.

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
| `college-maths-5e` | 14 | **N3** | 2026-09-13, 399 p. | 42 schémas, 14 fiches, banque 291 → 369 |
| `college-maths-4e` | 12 | **N3** | 2026-09-13, 343 p. | 35 schémas, 12 fiches, 75 coquilles corrigées |
| `college-maths-3e` | 13 | **N3** | 2026-09-14, 476 p. | 30 schémas, 13 fiches |
| `college-maths` (cycle) | 49 | **N3** | 2026-09-14, 1484 p. | **49 fiches sur 49**, 137 schémas secondaires ; cycle collège complet |

### Maths lycée

| Ouvrage | Modules | Niveau | Dernière compilation | Notes |
|---|---|---|---|---|
| `lycee-maths-2nde` | 14 | **N3** | 2026-09-14, 423 p. | 40 schémas, 14 fiches |
| `lycee-maths-1re` | 10 | **N3** | 2026-09-14, 326 p. | 25 schémas, 10 fiches, 10 « Découvrir » réécrits sur 10 |
| `lycee-maths-tle` | 12 | **N3** | 2026-09-14, 385 p. | 31 schémas, 12 fiches, 10 « Découvrir » réécrits sur 12 |
| `lycee-maths` (cycle) | 36 | **N3** | 2026-09-14, 1120 p. | **36 fiches sur 36**, 96 schémas secondaires ; cycle lycée complet |

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
| E10 | Verrou de compilation par ouvrage | à faire | production parallèle (contourné par worktrees séparées) |
| E12 | Ligne de base : compiler tout le périmètre et consigner | à faire | tout |
| E13 | Helpers de figures préfixés par le niveau, ou test de collision de noms | à faire | production parallèle |

Le référentiel des sciences de l'ingénieur reste à écrire et à faire valider par un enseignant de la matière.

**E13 vient de la vague 3e/2nde.** La règle d'insertion en fin de fichier protège du conflit textuel, mais pas de la collision de noms : les deux sessions ont écrit une fonction `figureThales` aux signatures incompatibles, que ni git ni le merge n'ont vue, et qui aurait vidé silencieusement les quatre figures de Thalès de la troisième. En attendant le test automatique, la règle est le préfixe de niveau sur chaque helper (`figure1reTangente`) et un `grep` de vérification avant commit — voir la section 9 du [cahier des charges](cahier-des-charges-generalisation.md).

---

## Journal

| Date | Ouvrage | Fait | Commit |
|---|---|---|---|
| 2026-09-12 | `college-maths-6e` | audit en panel, 22 défauts corrigés, figures 10 → 40, figures d'exercices créées, progression refondue en paysage | `2d91ee5` |
| 2026-09-13 | `college-maths-6e` | 9 « Découvrir » réécrits, banque 60 → 252 énoncés, promesse de l'avant-propos rétablie | `fd1c7e9` |
| 2026-09-13 | `bts-maths-prep` | correction d'une régression : pourcentage non échappé cassant la compilation | `e37cf58` |
| 2026-09-13 | — | cahier des charges de généralisation | `0f972b0` |
| 2026-09-13 | `college-maths-5e` | N3 : 42 schémas secondaires, 11 « Découvrir » réécrits, banque 291 → 369, 4 figures fausses trouvées par le calcul | branche `manuels-5e` |
| 2026-09-13 | `college-maths-4e` | N3 : 35 schémas secondaires, 9 « Découvrir » réécrits, 75 coquilles d'accents, 6 figures fausses trouvées par le calcul | branche `manuels-4e` |
| 2026-09-13 | pipeline | les prérequis se résolvent dans leur niveau et non dans la numérotation continue du livre : débloque l'ouvrage de cycle en édition professeur | `6eb58c7` |
| 2026-09-14 | `college-maths-3e` | N3 : 30 schémas secondaires, 13 fiches professeur, « Découvrir » revus, banque calibrée | branche `manuels-3e`, `fd465ce` |
| 2026-09-14 | `lycee-maths-2nde` | N3 : 40 schémas secondaires, 14 fiches professeur, « Découvrir » revus, banque calibrée | branche `manuels-2nde`, `d53f1bf` |
| 2026-09-14 | pipeline | collision `figureThales` entre la troisième et la seconde : deux signatures incompatibles que ni git ni le merge n'ont vues ; la version de la seconde devient `figureThalesTriangle`. Trouvée par la fusion d'essai seule — d'où E13 | `61555c8` |
| 2026-09-14 | consolidation | fusion de la vague 3e/2nde dans `manuels-spark` (47 commits), recette complète relancée, cycle collège complet à 49 fiches sur 49 | `61555c8` |
| 2026-09-14 | `lycee-maths-1re` | N3 : 25 schémas secondaires, 10 fiches professeur, **10 « Découvrir » sur 10 réécrits** (aucun ne passait le test), banque recalibrée — 4 chapitres n'avaient qu'une seule tâche | branche `manuels-1re`, `cb50905` |
| 2026-09-14 | `lycee-maths-tle` | N3 : 31 schémas secondaires, 12 fiches professeur, 10 « Découvrir » réécrits sur 12, banque recalibrée — 9 chapitres sur 12 n'avaient qu'une seule tâche | branche `manuels-tle`, `21b3eb7` |
| 2026-09-14 | pipeline | `titreDeGroupe` (`chapitre.js`) retire les balises HTML **avant** les formules : un `<` nu dans une formule emporte le `$` fermant et bloque la publication de l'ouvrage entier (« Extra }, or forgotten $ »). Contourné côté contenu par la première ; **le défaut reste entier** | signalé, non corrigé |
| 2026-09-14 | pipeline | le rang conseillé est en tout-ou-rien : tant que les fiches d'un niveau ne sont pas toutes écrites, même l'**édition élève** refuse de compiler — impossible de voir un chapitre pilote avant d'avoir fini le niveau | signalé, non corrigé |
| 2026-09-14 | consolidation | fusion d'essai de la vague 1re/tle (22 commits), **aucune collision de helpers** (E13 tenue : préfixes `figure1re` et `figureTle`), 665 tests au vert, cycle lycée complet à 36 fiches sur 36 | `dec08df` |

---

## Ce qui reste ouvert sur le manuel de référence

À traiter un jour, sans bloquer la généralisation.

- Six remédiations sans renvoi, faute d'exercice travaillant réellement l'erreur. Ce sont des limites des générateurs, pas des oublis.
- Des quasi-doublons entre exercices visibles et banque, partageant les mêmes nombres sous un habillage différent.
- La densité de la banque, autour de deux à trois exercices par page, qui porte l'ouvrage à 279 pages.
