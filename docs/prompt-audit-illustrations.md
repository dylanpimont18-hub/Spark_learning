# Prompt — Audit des illustrations visuelles par chapitre

Prompt réutilisable pour analyser les modules de `js/data/` et déterminer, chapitre par chapitre, quel élément visuel (schéma, courbe, photo) serait pertinent d'ajouter. Conçu pour être lancé **une fois par niveau/matière** (13 combinaisons au total sur Spark Learning), en parallèle via des sub-agents — c'est la méthode qui a servi à l'audit du 2026-07-21 et au lot pilote de 4 modules (commit `40f8674`).

## Utilisation

1. Remplacer les 3 placeholders avant de lancer :
   - `{{NIVEAU_LABEL}}` — nom lisible du niveau/matière, ex. `Maths 3e`, `SI Terminale`
   - `{{DOSSIER}}` — chemin du dossier, ex. `js/data/3e/`, `js/data/si-tle/`
   - `{{NB_MODULES}}` — nombre de modules attendu dans ce dossier (pour que l'agent vérifie qu'il ne saute rien)
2. Lancer une instance du prompt par niveau/matière (en parallèle si plusieurs agents disponibles). Pour la liste complète des 13 combinaisons du projet, voir `CODEBASE_MAP.md` (sections `js/data/*`).
3. Rassembler les réponses dans un tableau récapitulatif (voir format de sortie ci-dessous) avant de passer à la production réelle des visuels (cf. `docs/superpowers/specs/2026-07-21-illustrations-pedagogiques-design.md` pour le pipeline de production/vérification).

---

## Le prompt

```
Tu audites le contenu pédagogique des modules {{NIVEAU_LABEL}} du projet Spark Learning
(plateforme EdTech vanilla JS, SPA, sans bundler).

Lis TOUS les fichiers dans {{DOSSIER}} — {{NB_MODULES}} modules attendus. Si le nombre de
fichiers réellement présents diffère, signale-le avant de conclure.

Contexte technique : chaque module a un objet `cours` qui peut contenir un champ `diagram`.
Ce champ est soit une string HTML (format legacy — table de formules, liste, ASCII art...),
soit un objet riche `{svg, title, kicker, description, notes, reading, caption, theme}` rendu
par `renderCoursDiagram()` (js/components/renderCours.js). Le format riche est le SEUL
mécanisme d'illustration visuelle réelle (schéma, courbe, figure géométrique) du site — le
format legacy n'illustre rien, même s'il aère l'information. Le CSS (css/styles.css,
~L1839-2030) expose un vocabulaire de classes SVG déjà thémées clair/sombre à réutiliser
telles quelles dans toute suggestion de SVG : `grid-line`, `axis`/`frame-line`,
`curve-main`/`graph-line`, `guide-line`/`focus-line`, `plot-point`/`plot-point-alt`,
`label`/`axis-label`/`tick-label`/`annotation-label`, `label-soft`.

Exemples de référence (modules déjà au format riche, à citer comme gabarit si pertinent) :
`js/data/3e/3e-thales.js`, `js/data/4e/4e-pythagore.js`, `js/data/5e/reperage-graphique.js`,
`js/data/bts-prep/bts-prep-fonctions.js`, `js/data/bts/bts-fourier.js`, et depuis le
2026-07-21 : `js/data/si-tle/si-tle-bode.js`, `js/data/lycee-1re/1re-trigonometrie.js`,
`js/data/si-bts/si-bts-automatique.js`, `js/data/si-bts/si-bts-hydraulique.js`.

**Pour CHAQUE module du dossier**, détermine :

1. Le module a-t-il un `diagram` dans son `cours` ? Si oui, est-ce le format riche (svg réel
   avec labels/notes) ou le format legacy (table/liste/ASCII-art) qui n'illustre rien ?
2. Le sujet se prête-t-il à un visuel utile, et lequel précisément ? Sois concret : pas
   "un schéma serait utile" mais "courbe de Gauss avec zones 68-95-99,7% et µ/σ annotés" ou
   "triangle rectangle annoté avec angle et côtés étiquetés façon SOH-CAH-TOA". Classe ta
   suggestion selon le type de traitement à venir (cf. spec de production) :
   - **courbe calculée** — la figure représente une vraie donnée/fonction (courbe de Bode,
     loi normale, réponse temporelle, parabole...) : devra être calculée numériquement avant
     d'être dessinée, pas approximée à main levée.
   - **schéma normalisé** — figure géométrique ou schéma technique respectant une convention
     du programme (triangle annoté, schéma-bloc d'asservissement, bête à cornes, GRAFCET,
     coupe technique, cercle trigonométrique...).
   - **photo réelle (rare)** — seulement si un objet concret du monde réel apporterait un
     ancrage que le schéma seul n'apporte pas ; à utiliser en complément d'un schéma, jamais
     en remplacement, et uniquement si une image sous licence libre existe vraisemblablement
     (Wikimedia Commons, Openverse) — ne suggère pas une photo pour un concept abstrait.
3. Si un `diagram` riche existe déjà, est-il pédagogiquement complet (notes, légende,
   lecture guidée) ou minimal ?

Rends un tableau par module : nom du fichier | état actuel (absent / legacy-pauvre /
legacy-correct / riche) | type de visuel suggéré (courbe calculée / schéma normalisé /
photo réelle / aucun changement nécessaire) | description concrète en une phrase.

Termine par une synthèse de 2-3 phrases : niveau globalement couvert ou non, 2-3 modules
prioritaires avec la justification (sujet le plus pénalisé par l'absence de visuel).

Ne modifie aucun fichier — audit de lecture seule. Réponds en français.
```

---

## Format de sortie attendu (une fois toutes les instances rassemblées)

| Niveau/Matière | Module | État | Type suggéré | Suggestion |
|---|---|---|---|---|
| ... | ... | absent / legacy-pauvre / legacy-correct / riche | courbe calculée / schéma normalisé / photo réelle / aucun | ... |

## Suite du processus

Cette analyse ne produit **que des recommandations** — la production réelle des visuels
(calcul Python des courbes, écriture des SVG, recherche d'image sous licence libre, double
vérification math + rendu navigateur) suit le pipeline décrit dans
`docs/superpowers/specs/2026-07-21-illustrations-pedagogiques-design.md`.
