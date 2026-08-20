# Prompt de lancement — Physique-Chimie Collège & Lycée (44 modules)

> Contexte : préparé le 2026-08-19. Fait suite à la session qui a créé les 10 modules BTS
> (`js/data/physique-bts/`, complet). Ce prompt couvre les 3 niveaux restants du programme
> `docs/programmes-physique.md` : Collège (4e, 3e) et Lycée (Seconde, Première spé,
> Terminale spé) — 44 chapitres, tous 🔴.

---

## Contexte déjà établi (ne pas re-vérifier, juste exécuter)

- Le sujet `physique` est **déjà déclaré** dans `js/state.js` avec `availableLevels: [1, 2, 3]`
  — aucune modification d'UI n'est nécessaire, seul le contenu manque.
- `js/data/{level}/{level}-{topic}.js` sont **jamais** déclarés en `<script>` dans
  `index.html` — chargés dynamiquement par `ensureLevelData()` via `DATA_FILES` dans
  `js/loader.js`. Ne pas toucher `index.html` pour ça.
- `level` dans l'objet module correspond au **groupe** (1 = collège, 2 = lycée, 3 = BTS), pas
  à la classe précise. Un module `physique-1re-...` porte donc `level: 2`, tout comme
  `physique-2nde-...` et `physique-tle-...`.
- Convention de dossier (comme `si-2nde/`, `si-1re/`, `si-tle/`, `si-bts/`,
  `physique-bts/` qui coexistent avec les dossiers maths `lycee-2nde/`, `lycee-1re/`,
  `lycee-tle/`) : chaque niveau physique a son **propre dossier préfixé**, séparé des
  dossiers maths de même grade :
  - `js/data/physique-4e/physique-4e-{topic}.js`
  - `js/data/physique-3e/physique-3e-{topic}.js`
  - `js/data/physique-2nde/physique-2nde-{topic}.js`
  - `js/data/physique-1re/physique-1re-{topic}.js`
  - `js/data/physique-tle/physique-tle-{topic}.js`

  Chaque dossier a un `index.js` vide (voir `js/data/physique-bts/index.js` — copier tel
  quel, juste adapter le chemin dans le commentaire d'en-tête).

## Gabarit — lire en premier

Lire ces 3 fichiers avant d'écrire le premier module (structure et niveau de détail à
reproduire à l'identique) :
- `js/data/physique-bts/physique-bts-mecanique-point.js` — gabarit général (mécanique),
  diagramme SVG bien réussi.
- `js/data/physique-bts/physique-bts-circuits-continu.js` — gabarit électricité.
- `js/data/physique-bts/physique-bts-chimie-solutions.js` — gabarit chimie (pH, titrages ;
  pas de notation vectorielle, diagramme différent — ex. courbe pH = f(V)).

Structure identique pour chaque module : `id`, `level`, `subject: 'physique'`, `icon`,
`title`, `subtitle`, `keywords`, `physics` (texte d'application concrète — présent même
pour un chapitre de chimie, c'est le contenu de l'onglet "Application physique-chimie"),
puis `cours` (`intro`, `definitions[]`, `method`, `diagram`, `example`, `formulas[]`,
`recap[]`, `piege`), `quiz` (3 QCM), `exercice.generate()`, `probleme`, `evaluation` (5
questions).

## Règles de contenu (rappel CLAUDE.md)

- Style « SI » aéré : `<br/><br/>` entre chaque idée/étape, `<strong>` sur les concepts
  clés, rédaction narrative (pas d'équations brutes enchaînées).
- KaTeX (`$...$`, `$$...$$`), virgule française accolée (`1{,}5`, **jamais** `1.5`).
- Ton socratique, jamais punitif (pas de « Faux »/« Erreur »).
- `exercice.generate()` utilise `pick()` pour varier les contextes narratifs (pas
  seulement les valeurs numériques), `rand()`/`randFloat()` pour les tirages, et
  **`fr(valeur, decimals)`** pour toute décimale interpolée dans le texte (jamais
  `.replace('.', '{,}')` à la main). Ces 3 helpers sont globaux (`js/data/helpers.js`,
  déjà chargé), ne pas les redéclarer.
- `cours.piege` : rédiger en **exactement 2 phrases** (1. l'erreur fréquente, 2. le
  réflexe correct, souvent en commençant par « Attention… »). `renderErreurConseil()`
  découpe le texte au premier point suivi d'un espace hors mode maths — une seule phrase
  ne produit qu'un panneau au lieu de deux.

## Diagrammes (`cours.diagram`)

**Invoquer le skill `generer-image` pour CHAQUE diagramme** (via l'outil Skill, argument
`generer-image`) et suivre son workflow à la lettre : construire par code (Python calculé
pour tout ce qui dérive d'une formule — courbes, mouvements, cinétique chimique ; SVG à la
main sur gabarit normalisé pour les schémas conventionnels — circuits norme CEI, optique
géométrique, Lewis, vecteurs), puis **vérifier obligatoirement en 2 temps** : recalcul
indépendant des valeurs/invariants affichés, ET rendu visuel réel (capture thème clair +
sombre via Chrome/Edge headless, fenêtre haute ~3200px, sur
`http://localhost:PORT/#module/{id}/cours`). Ne jamais sauter la vérification visuelle même
sur un gabarit déjà utilisé ailleurs. Génération IA interdite pour tout diagramme
scientifique.

Réutiliser les classes CSS génériques existantes (`curve-main`, `frame-line`,
`plot-point`, `plot-point-alt`, `guide-line`, `tick-label`, `annotation-label`,
`label-soft`) plutôt que d'en inventer. Les `<text>` internes au SVG restent en texte brut
(jamais de syntaxe KaTeX `$...$` dedans).

Serveur local pour la vérification : `node scripts/tmp-static-server.js <port>` (choisir un
port libre, ex. 5177 + décalage par lot pour éviter les collisions entre agents parallèles),
l'arrêter une fois le lot terminé (`taskkill //PID <pid> //F`, PID via
`Get-NetTCPConnection -LocalPort <port>`).

## Vérification obligatoire après CHAQUE module créé

1. `node scripts/check-decimal-notation.js` — ne doit ajouter aucune nouvelle erreur.
   ⚠️ Ce script scanne tout `js/data/` : d'autres agents écrivent en parallèle dans
   d'autres dossiers `physique-{niveau}/` — si le rapport mentionne des erreurs **hors de
   votre propre dossier assigné**, ignorez-les (travail en cours ailleurs) et ne corrigez
   que ce qui concerne vos fichiers.
2. Diagramme vérifié (recalcul + captures clair/sombre) comme décrit ci-dessus.

## Ne PAS toucher (intégration centralisée après coup)

Ne modifiez PAS `js/loader.js`, `docs/programmes-physique.md`, `contenu.md`, ni
`index.html`. Un agent orchestrateur ajoutera tous les fichiers créés (tous niveaux
confondus) à `DATA_FILES`/`MODULE_INDEX`, mettra à jour les statuts et le cache-busting en
une seule passe finale, pour éviter les conflits d'édition entre agents parallèles.

## À la fin de votre lot

Indiquer dans votre rapport :
- La liste des fichiers créés (chemin complet + `id` du module).
- Confirmation que `check-decimal-notation.js` ne montre aucune nouvelle erreur imputable
  à vos fichiers.
- Confirmation que chaque diagramme a été vérifié visuellement (clair + sombre).
- Tout écart ou difficulté rencontrée.

---

*Fin du prompt partagé. Chaque lot reçoit en complément la liste exacte de ses chapitres
(id, titre) tirée de `docs/programmes-physique.md`.*
