# Pipeline d'illustrations pédagogiques — Design

**Date** : 2026-07-21
**Contexte** : suite à l'audit du 2026-07-21 (13 sub-agents, 1 par niveau/matière), 127 des 132 modules de `js/data/` n'ont pas de schéma visuel réel dans leur `cours.diagram` — soit le champ est absent, soit il contient un tableau HTML de formules qui n'illustre rien. Seuls 5 modules (`3e-thales.js`, `4e-pythagore.js`, `5e/reperage-graphique.js`, `bts-prep-fonctions.js`, `bts-fourier.js`) ont un vrai SVG riche. Ce document définit comment produire les schémas manquants et comment garantir leur exactitude avant mise en ligne.

## Constat technique de départ

- `cours.diagram` accepte soit une string HTML legacy, soit un objet `{svg, title, kicker, description, notes, reading, caption, theme}` rendu par `renderCoursDiagram()` (`js/components/renderCours.js:6-65`). Le champ `svg`/`html`/`markup` accepte n'importe quel balisage — pas de changement de code nécessaire pour intégrer un `<img>` si besoin.
- `css/styles.css` (L1839-2030) définit déjà un vocabulaire de classes SVG thémées : `grid-line`, `axis`/`frame-line`, `curve-main`/`graph-line`, `guide-line`/`focus-line`, `plot-point`/`plot-point-alt`, `label`/`axis-label`/`tick-label`/`annotation-label`, `label-soft`. Ces classes s'adaptent automatiquement au thème clair/sombre via variables CSS. Tout SVG produit dans ce chantier doit réutiliser ces classes plutôt que des couleurs codées en dur.
- Il n'existe aujourd'hui aucun pipeline d'images raster par module — la seule image du site est le logo (`images/Logo_noir.jpeg`, `images/Logo_blanc.jpeg`). Introduire des photos est donc un nouveau pattern, à réserver aux cas qui le justifient (voir ci-dessous).

## Décision : quel type de contenu pour quel cas

| Cas | Traitement | Exemple de gabarit existant |
|---|---|---|
| Courbe mathématique/physique (parabole, courbe de Bode, loi normale, Fresnel, réponse temporelle...) | Un script Python calcule les points réels à partir de la formule enseignée dans le cours, puis conversion en `<path>`/`<polyline>` SVG réutilisant les classes CSS existantes (`curve-main`, `axis`, `grid-line`, `plot-point`) | `bts-fourier.js`, `bts-prep-fonctions.js` |
| Schéma technique normalisé (schéma-bloc, bête à cornes, GRAFCET, coupe de vérin, cercle trigonométrique, pont de Wheatstone) | SVG écrit à la main, respectant les pictogrammes/normes du programme (ex. symboles de liaison, notation GRAFCET officielle) | `3e-thales.js`, `4e-pythagore.js` |
| Objet concret réel (cas rare, en complément d'un schéma, jamais en remplacement) | Recherche d'image (skill existant de recherche d'images), intégrée via `diagram.html`/`markup` (`<img>`), fichier stocké dans un nouveau dossier `images/modules/{niveau}/{slug}.jpg` | — (nouveau pattern) |

Règle explicite : la génération d'image par IA n'est **pas** utilisée pour représenter un objet réel concret (risque d'inexactitude technique sur les proportions/le fonctionnement réel) — dans ce cas on utilise la recherche d'image, jamais la génération.

## Vérification double, systématique (avant tout commit)

Pour chaque visuel produit :

1. **Contrôle mathématique/physique** : recalcul indépendant des valeurs tracées à partir de la formule donnée dans le `cours` du module (pas de confiance aveugle dans le script qui a produit le SVG) — comparaison chiffrée, tolérance documentée si approximation graphique volontaire (ex. échelle non linéaire assumée pour la lisibilité).
2. **Contrôle visuel réel** : lancement du site en local (skill `run`) et inspection de la page du module réellement rendue — lisibilité, absence de chevauchement, rendu correct en thème clair **et** sombre, cohabitation propre avec le rendu KaTeX voisin.

Un visuel n'est committé que si les deux contrôles passent. En cas d'échec du contrôle 1 (incohérence entre le visuel et la formule du cours), c'est traité comme un bug de contenu séparé, pas corrigé en douce en ajustant le visuel pour qu'il "ait l'air bon".

## Lot pilote (avant généralisation aux 122 autres modules)

4 modules couvrant chacun un cas du tableau ci-dessus :

1. **`js/data/si-tle/si-tle-bode.js`** — courbe de Bode calculée en Python (gain/phase en fonction de log ω) : cas le plus exigeant en précision, avec asymptotes et point de coupure à -3 dB.
2. **`js/data/lycee-1re/1re-trigonometrie.js`** — cercle trigonométrique en SVG pur (figure géométrique) : niveau actuellement à 0 schéma sur 10 modules, priorité maximale identifiée par l'audit.
3. **`js/data/si-bts/si-bts-automatique.js`** — schéma-bloc de boucle fermée + courbe de réponse indicielle : combine schéma normalisé et courbe calculée dans un même module.
4. **`js/data/si-bts/si-bts-hydraulique.js`** — coupe de vérin en SVG + photo réelle d'un vérin hydraulique en complément : seul module du pilote introduisant le nouveau pattern photo.

Une fois ces 4 modules validés (double contrôle + rendu réel confirmé), le pipeline est considéré comme éprouvé et peut être répliqué sur le reste des 122 modules identifiés par l'audit du 2026-07-21 (mémoire projet correspondante à mettre à jour avec la progression).

## Hors périmètre de ce chantier

- Pas de refonte de `renderCoursDiagram()` ni du format `diagram` — l'infrastructure existante suffit.
- Pas de correction de contenu pédagogique (formules, erreurs) sauf si le contrôle mathématique en révèle une — auquel cas c'est signalé séparément, pas mêlé au commit d'illustration.
- Pas de traitement des 5 modules déjà riches (ils servent de référence, pas de cible).
