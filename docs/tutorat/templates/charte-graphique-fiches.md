> **Template LaTeX** : `fiche-template.tex` (dans ce dossier) implémente cette charte — bandeau bleu pétrole avec logo, encadrés Définition/Théorème/Méthode/Attention, variante « fiche exercices » sobre. Exemple compilé : `fiche-template-exemple.pdf`. Compilation avec **XeLaTeX** (nécessaire pour `fontspec`) ; polices utilisées : Calibri (corps), Century Gothic (titres), Consolas (code) — toutes trois déjà présentes sur Windows, aucune police à installer. Packages requis (auto-installés par MiKTeX au premier lancement) : `tcolorbox`, `fontawesome5`, `fancyhdr`, `enumitem`, `icomma`.

# Charte graphique — Fiches de cours particuliers (Dylan & Simon)

Charte visuelle commune pour toutes les fiches produites dans le cadre du tutorat privé (cours, exercices, corrections, supports numériques). Sert de référence à la fois pour une production manuelle (Word/LaTeX/Canva) et pour calibrer le style visuel des documents générés par l'IA (Phase 2 — voir `docs/superpowers/specs/2026-07-16-tutorat-phase2-generateur-design.md`).

## 1. Positionnement et objectifs

Ce que la charte doit transmettre :
- **Rigueur scientifique et clarté pédagogique.**
- **Modernité et sérieux, mais sans être intimidant.**
- **Cohérence** entre cours, exercices, corrections, supports numériques (PDF, diapos, éventuel site).

Identité visée : « prof d'ingénierie » — claire, technique, légèrement inspirée des écoles d'ingénieurs et de la data viz.

## 2. Palette de couleurs

**Principe général** : une couleur principale forte (identité), une couleur secondaire pour les encadrés/titres de section, une ou deux couleurs d'accent pour le pédagogique, un fond très clair pour l'impression.

| Rôle | Couleur | Usage |
|---|---|---|
| Principale | Bleu pétrole | Bandeau haut, titres de niveau 1, repères visuels importants |
| Secondaire | Gris neutre clair | Contours de boîtes, traits de séparation, fonds de tableaux |
| Accent 1 | Orange doux | Encadrés « À retenir », remarques importantes, avertissements |
| Accent 2 | Vert sapin / vert foncé | Encadrés « Méthode », « Astuce », validation de réponses correctes |
| Fond | Blanc cassé `#F8F8F8` | Fond global des fiches, pour une impression correcte |

**Logo** : `images/Logo_blanc.jpeg` sur fonds colorés/foncés (bandeau bleu pétrole), `images/Logo_noir.jpeg` sur fonds clairs/blancs.

**Règles d'utilisation** :
- Sur une même page, ne pas utiliser plus de 3 couleurs (hors noir).
- Bleu pétrole pour la structure (titres et bandeaux), orange/vert pour le pédagogique.
- Éviter les aplats de couleur trop grands pour limiter la consommation d'encre.

## 3. Typographies et hiérarchie

**Choix des fontes**
- Texte courant : sans empattement moderne — Montserrat, Lato, Open Sans (ou Calibri/Arial en solution système simple).
- Titres : la même en gras, ou une variante plus « technique » (ex. Montserrat pour les titres, Open Sans pour le corps).
- Code/algorithmes : monospace simple (Consolas, Courier New) pour distinguer pseudo-code/scripts.

**Hiérarchie typographique**

| Niveau | Taille | Style |
|---|---|---|
| Titre fiche (H1) | 18–22 pt | Bleu pétrole, gras, aligné à gauche, toujours accompagné du niveau (2nde / STI2D / Prépa…) |
| Sous-titre (H2) | 14–16 pt | Bleu pétrole ou noir, semi-gras, numéroté (« 1. Notions de base », « 2. Exercices guidés »…) |
| Sous-sous-titre (H3) | 12–13 pt | Noir ou gris foncé, graissage normal |
| Texte courant | 11–12 pt | Noir |
| Énoncé d'exercice | idem texte courant | Gras léger ou petite icône d'exercice à gauche |

**Règles d'écriture**
- Titres commençant par un verbe ou un concept clair : « Résoudre une équation différentielle », « Modéliser un système mécanique ».
- Numérotation systématique des exercices : Exercice 1, Exercice 2…
- Notations mathématiques uniformisées (même style pour vecteurs, matrices, grandeurs physiques).

## 4. Mise en page d'une fiche type (A4)

1. **En-tête (bandeau haut de page)**
   - Gauche : nom/initiales, « Mathématiques & Sciences de l'ingénieur ».
   - Droite : niveau + chapitre + date/période (ex. « Terminale – Suites – Fiche n°3 »).
   - Fond bleu pétrole léger avec texte blanc/noir, ou simple trait horizontal bleu sous l'en-tête.

2. **Zone de titre de la fiche**
   - Titre (ex. « Étude de systèmes linéaires », « Diagrammes de Bode »).
   - Sous-titre (« Cours », « Exercices corrigés », « Fiche méthode »).
   - Pictogramme optionnel (fonction, vecteur, roue dentée, graphe…).

3. **Bloc « Objectifs »** (début de fiche)
   - Encadré gris clair, titre en vert : « Objectifs du cours ».
   - 3–5 bullet points de ce que l'élève doit savoir faire à la fin.

4. **Corps du cours / des exercices**
   - Sections courtes (1–1,5 page max chacune).
   - Encadrés récurrents :
     - **Définition** : bordure bleue, fond blanc.
     - **Théorème / Résultat** : bordure bleue, titre en gras, fond gris très léger éventuel.
     - **Méthode** : fond vert très pâle, texte noir.
     - **Attention** : bordure orange, icône « ! » ou triangle.

5. **Zone d'exercices**
   - Coupure nette, sous-titre « Exercices d'application ».
   - Par exercice : numéro en bleu, énoncé en gras léger, espaces de réponse (lignes/zones quadrillées) si besoin.
   - Séries longues regroupées par difficulté croissante (base / intermédiaire / approfondissement).

6. **Pied de page**
   - Numéro de page, rappel court du chapitre/thème, éventuellement nom/mail/site.

## 5. Codes visuels pédagogiques

Système de codes visuels stable, à garder identique sur toutes les fiches :

| Icône | Usage | Couleur |
|---|---|---|
| Petit livre / symbole ∑ | Parties de théorie (« Cours ») | Bleu |
| Ampoule / engrenage | « Méthode » | Vert |
| Point d'exclamation | « Important » | Orange |
| Crayon / carré « Ex. » | « Exercice » | — |

Créer une mini-légende en début d'année (une demi-page expliquant pictogrammes et codes couleurs), réutilisée partout.

## 6. Direction artistique globale

- **Style général** : « technique clair », inspiré des schémas d'ingénieur, simplicité proche des documents d'école d'ingénieurs.
- Peu de décoratif gratuit ; chaque élément graphique a une fonction (mettre en avant, structurer, guider le regard).
- Formes simples : lignes, rectangles, flèches pour les flux — pas de formes trop décoratives.
- **Illustrations et schémas** :
  - Sciences de l'ingénieur : schémas de blocs, représentation de systèmes, graphes (convention constante de flèches et de cadres).
  - Maths : graphiques (axes x,y), diagrammes de Venn, arbres… avec la même palette bleu/gris.
  - Éviter les cliparts « fun » trop scolaires pour un public lycée/prépa ; ton sérieux mais accueillant.
- **Ton rédactionnel** : phrases courtes, vocabulaire rigoureux, structure constante :
  - « On rappelle que… » pour les notions déjà vues.
  - « Méthode » pour les procédures pas à pas.
  - « Remarque » pour les conseils de résolution ou pièges classiques.
  - Tutoiement/vouvoiement : choisir une forme et la garder partout (ex. « vous » pour les fiches, même si tutoiement à l'oral en cours).

## 7. Variantes selon le type de fiche

| Variante | Spécificités |
|---|---|
| **Fiche cours** | Plus de blocs Définition/Théorème/Exemple ; très peu d'espace de réponse ; bandeau « Cours » clairement identifié |
| **Fiche exercices** | En-tête sobre, titre « Série d'exercices n°X – Chapitre Y » ; liste d'exercices avec pictogrammes de difficulté (1 à 3 étoiles) ; fond totalement blanc, peu de blocs colorés (économie d'encre) |
| **Fiche méthode / synthèse** | Beaucoup d'encadrés « Méthode » et « À retenir » ; vert pour les étapes de résolution, orange pour les erreurs fréquentes ; format paysage possible pour grands schémas (chronogrammes, diagrammes d'état) |

## 8. Organisation et application pratique

- **Gabarit maître** (Word, PowerPoint, LaTeX, Canva…) avec :
  - En-tête standard.
  - Styles prédéfinis : Titre fiche, H2, H3, Texte, Définition, Méthode, Remarque, Exercice.
- **Nommage de fichiers** : `Niveau_Theme_Type-fiche_Version` — ex. `TSTI2D_Systemes-lin_Cours_v1.docx`.
- **Marges et grille** constantes (ex. 2 cm de marge, grille deux colonnes pour les fiches très denses).

## 9. Maths & Physique (rappel des conventions Spark Learning)

Pour toute fiche mêlant maths/physique, garder la cohérence avec les conventions déjà en vigueur côté plateforme (voir `CLAUDE.md` racine) :
- KaTeX (`$inline$`, `$$display$$`).
- Virgule française avec accolades pour les décimales (`1{,}5`, jamais `1.5`).
- Démonstrations/étapes de calcul découpées et aérées (`<br/><br/>` entre idées quand le support est HTML), rédaction narrative plutôt qu'un enchaînement d'équations brutes.
