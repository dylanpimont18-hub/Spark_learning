# Export PDF du cours — réservé aux enseignants

Date : 2026-07-12

## Contexte

Un enseignant veut pouvoir récupérer le contenu complet d'un cours (ou de tout un niveau/matière) en PDF, pour le donner à des étudiants — par exemple à un collègue qui débute et qui a besoin d'un accès complet au support sans naviguer sur le site.

En explorant le code existant, la fonctionnalité d'export PDF (via impression navigateur) existe déjà et couvre déjà l'essentiel du contenu du cours (intro, définitions, méthode, exemple résolu, formules, illustration, piège/conseil, récap, application) :

- `printFiche(moduleId)` (js/app.js) — impression d'un seul module, via `renderFicheCours()` (js/utils/ui-helpers.js)
- `toggleBatchPrintMode()` / `togglePrintSelection()` / `selectAllForPrint()` / `printSelectedFiches()` (js/app.js) — sélection multiple sur la grille de modules (`renderModules()`, js/views/home.js), impression groupée via `renderFichesBatch()`

Ce qui manque réellement, identifié en collaboration avec l'utilisateur :

1. Ces boutons sont visibles par tout le monde (élèves, invités), alors que c'est un besoin enseignant.
2. `renderFicheCours()` casse l'affichage des diagrammes "riches" (objets structurés `{svg, title, notes...}`) — elle les insère en brut au lieu d'utiliser `renderCoursDiagram()` comme le fait l'onglet Cours à l'écran.
3. L'export groupé par niveau/matière (cas "collègue qui a besoin de tout") — après vérification, déjà couvert par le bouton "Tout sélectionner" existant, qui coche tous les modules affichés sur la grille (= tout le niveau/matière courant). Aucun développement requis sur ce point.

## Portée

Deux changements ciblés, pas de nouvelle fonctionnalité d'export à construire — le mécanisme d'impression existant (`window.print()` + CSS `@media print`) est conservé tel quel.

## 1. Restriction de l'accès aux enseignants

Utiliser `AuthGuard.isTeacher()` (js/auth/authGuard.js:33 — retourne `true` pour les rôles `teacher` et `admin`), déjà utilisé ailleurs dans le code pour ce type de garde.

**Masquage des boutons :**
- `js/views/home.js` — dans `renderModules()`, le bouton `.btn-print-batch` ("Imprimer les fiches 🖨️") n'est rendu que si `AuthGuard.isTeacher()` est vrai.
- `js/components/renderCours.js` — dans `renderCours()`, le bouton "Imprimer la fiche" n'est rendu que si `AuthGuard.isTeacher()` est vrai.

**Défense en profondeur (js/app.js) :** chacune des fonctions suivantes commence par une garde qui l'interrompt silencieusement (`return`) si `!AuthGuard.isTeacher()`, pour empêcher un déclenchement via la console malgré le bouton masqué :
- `printFiche(moduleId)`
- `toggleBatchPrintMode()`
- `printSelectedFiches()`

Pas de message d'erreur affiché dans ce cas (le bouton n'existe pas dans l'UI pour un non-enseignant, ce n'est donc pas un chemin utilisateur normal).

## 2. Export groupé par niveau/matière

Aucun développement. Le flux existant suffit : *"Imprimer les fiches" → "Tout sélectionner" → "Imprimer 🖨️"* génère un PDF multi-pages (un module par page, via `page-break-after: always` déjà en place) couvrant tous les modules du niveau/matière actuellement affiché sur la grille. Une fois la restriction de la partie 1 posée, ce flux devient de facto réservé aux enseignants.

## 3. Correction de l'affichage des diagrammes dans le PDF

**Problème actuel :** `renderFicheCours()` (js/utils/ui-helpers.js) insère `c.diagram` brut dans un `<div>`. Pour les modules utilisant le format legacy (chaîne HTML), ça fonctionne. Pour les modules utilisant le format riche (objet `{svg, title, kicker, description, notes, reading, caption, theme}`), ça affiche `[object Object]`.

**Correctif :**
- Remplacer l'insertion brute par un appel à `renderCoursDiagram(c.diagram, mod.subject || 'maths')` (js/components/renderCours.js) — la même fonction utilisée par l'onglet Cours à l'écran, qui gère nativement les deux formats (legacy et riche).
- `renderFichesBatch()` n'a pas besoin de changement : elle délègue déjà à `renderFicheCours()` par module.

**Cohérence visuelle en impression :** `renderCoursDiagram()` s'appuie sur des variables CSS (`--primary`, `--secondary`, `--accent`, `--text`, `--text-muted`, `--bg-card`, `--border`) dont la valeur dépend du thème actif (clair/sombre) au moment de l'impression. Pour garantir un PDF lisible sur fond blanc quel que soit le thème actif au moment du clic, un bloc `@media print` dans `css/styles.css` fige ces variables sur leurs valeurs du thème clair, à l'intérieur de `#print-container` :

```css
@media print {
  #print-container {
    --primary: #2C3E50;
    --secondary: #48C9B0;
    --accent: #F4D03F;
    --bg-card: #FFFFFF;
    --text: #212529;
    --text-muted: #6C757D;
    --border: #DEE2E6;
  }
}
```

Les classes `.print-diagram` existantes (bordures/tableaux pour l'ancien format string) sont conservées : le format legacy peut toujours contenir du HTML de type `<table>` à l'intérieur du diagramme riche.

## Fichiers concernés

- `js/views/home.js` — garde `AuthGuard.isTeacher()` sur le bouton batch print
- `js/components/renderCours.js` — garde `AuthGuard.isTeacher()` sur le bouton print unitaire
- `js/app.js` — gardes dans `printFiche`, `toggleBatchPrintMode`, `printSelectedFiches`
- `js/utils/ui-helpers.js` — `renderFicheCours()` utilise `renderCoursDiagram()` au lieu de l'insertion brute
- `css/styles.css` — bloc `@media print` figeant les variables CSS pour `#print-container`

## Tests / vérification manuelle

- Se connecter en tant qu'élève / invité → les boutons "Imprimer la fiche" et "Imprimer les fiches 🖨️" ne doivent plus apparaître.
- Se connecter en tant qu'enseignant → les deux boutons apparaissent, l'impression (aperçu navigateur "Enregistrer en PDF") fonctionne comme avant.
- Tester l'impression d'un module dont le `cours.diagram` est un objet riche (ex. un module Maths avec courbe/fonction) → l'illustration doit apparaître correctement, pas `[object Object]`.
- Tester en thème sombre actif → le PDF généré reste sur fond blanc/texte sombre lisible.
