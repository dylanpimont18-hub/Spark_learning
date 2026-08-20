# Skill de construction de visuels scientifiques — remplacement de `generer-image`

**Date** : 2026-08-18
**Statut** : validé, prêt pour plan d'implémentation

## Contexte

Spark Learning publie du contenu pédagogique en Maths, Physique-Chimie et Sciences de
l'Ingénieur, à la fois sur le site public et dans des manuels imprimés vendus
([[project_manuels_latex_pipeline]]). Ces trois matières s'appuient massivement sur des
visuels normalisés : courbes de fonctions, géométrie codée, circuits électriques norme
CEI, schémas d'optique, représentations de Lewis, diagrammes SysML, GRAFCET, etc.

Deux verdicts déjà établis (`docs/audit-illustrations-2026-07-22.md`, mémoire
`project_audit_outils_2026-08`) cadrent ce qui ne marche pas :

- **La génération d'image par IA (Mammouth AI, skill `generer-image` actuel) échoue sur
  les figures scientifiques.** Testée deux fois sur des cas simples (Thalès, figure
  annotée) : rayons non parallèles, points mal étiquetés. Verdict : utilisable uniquement
  pour de l'ambiance sans contenu mathématique.
- **La recherche web d'images à licence non garantie ne convient pas à Spark Learning.**
  Le skill `visuels-fiche-fed` tolère les images "tous droits réservés" parce que les
  fiches BTS FED sont un usage interne non diffusé. Spark Learning vend du contenu
  (manuels) et publie publiquement (site, AdSense) : la licence redevient bloquante.

Le pipeline qui fonctionne déjà, prouvé sur 140/140 modules du site
([[project_illustrations_pedagogiques_pilote]]) et repris tel quel par les manuels
(`scripts/manuel/svg2tikz.js`, règle de provenance `svg-exact`) : des SVG **construits par
calcul ou sur gabarit normalisé**, jamais générés par IA ni cherchés sur le web pour un
contenu scientifique.

Ce document formalise cette méthode en un skill réutilisable, à la place de
`generer-image`.

## Objectif

Remplacer entièrement le skill `generer-image` par un skill qui, face à un besoin de
visuel dans un module de cours ou un chapitre de manuel :

1. évalue si un visuel est pertinent, et de quel type ;
2. le **construit par code** (Python pour le calculable, SVG sur gabarit normalisé sinon),
   avec vérification avant validation ;
3. à défaut, cherche une image existante sous **licence libre garantie** ;
4. en tout dernier recours, génère une image d'ambiance par IA — jamais un diagramme.

## Périmètre

**Dans le périmètre** : tout besoin de visuel pour un module `js/data/` (Maths,
Physique-Chimie, SI, BTS/BTS Prep confondus) ou un chapitre de manuel imprimé.

**Hors périmètre** :
- `visuels-fiche-fed` reste inchangé — fiches BTS FED, usage interne non diffusé, régime
  de licence différent, ne pas fusionner.
- Le pipeline manuels (`scripts/manuel/`) reste inchangé — il continue de consommer les
  SVG déjà publiés sur le site via la règle `svg-exact`. Ce skill alimente le site ; les
  manuels héritent automatiquement.
- Ce document ne catalogue pas de recette pour chaque type de diagramme listé (analyse,
  géométrie codée, circuits CEI, Lewis, SysML, GRAFCET, etc. — plus de 30 familles). La
  bibliothèque de gabarits démarre avec l'existant (schéma-bloc asservissement, GRAFCET,
  montages BTS SI, cercle trigo, courbes de fonctions) et s'enrichit au fil des besoins
  réels, comme cela a déjà fonctionné à l'échelle des 140 modules.

## Workflow

```
Besoin de visuel identifié (module de cours ou chapitre de manuel)
        │
        ▼
1. ANALYSER — un visuel est-il pertinent ici ? De quel type ?
   (diagramme technique construit par une formule/norme, ou photo d'ambiance)
        │
        ▼
2. CONSTRUIRE PAR CODE (si diagramme technique)
   Python (calcul exact) → SVG, ou SVG sur gabarit normalisé si non calculable
   Cycle essai/amélioration jusqu'à validation (étape 3)
        │
        ▼ (construction impossible, ou besoin de type photo/ambiance)
3. VÉRIFIER avant validation
   Recalcul indépendant (valeurs, invariants géométriques)
   + rendu visuel réel (Chrome headless, clair/sombre)
        │
        ▼ (échec de construction malgré ajustements)
4. REPLI WEB LICENCE LIBRE
   Wikimedia Commons + Openverse d'abord (diagrammes techniques CC)
   → Unsplash en complément (photo réelle propre)
        │
        ▼ (rien de trouvable ni d'utilisable)
5. DERNIER RECOURS : génération IA (Mammouth)
   UNIQUEMENT pour de l'ambiance sans contenu scientifique
        │
        ▼ (même ça ne convient pas)
6. ÉCHEC SIGNALÉ — pas de diagramme faux, pas d'image inadaptée forcée
```

## Étape 1 — Analyser

Avant de construire quoi que ce soit, déterminer :
- Le module a-t-il réellement besoin d'un visuel à cet endroit (n'ajoute pas un schéma
  décoratif sans valeur pédagogique) ?
- S'agit-il d'un **diagramme technique** (relève d'une formule, d'une norme, d'une
  convention de représentation — l'écrasante majorité des besoins listés : courbes,
  géométrie codée, circuits, Lewis, SysML...) ou d'un **visuel d'ambiance/photo réelle**
  (objet concret, contexte, sans contenu scientifique à représenter fidèlement) ?

Cette distinction conditionne la suite : un diagramme technique passe par l'étape 2 et ne
doit jamais atterrir sur les étapes 4-5 comme source primaire (seulement comme repli après
échec avéré de construction). Un besoin d'ambiance saute directement à l'étape 4.

## Étape 2 — Construire par code

Deux familles d'outils, choisies selon la nature du visuel :

**Python (calcul exact)** — pour tout ce qui se déduit d'une formule ou de valeurs
numériques : courbes de fonctions, tangentes, asymptotes, aires sous la courbe, champs de
vecteurs, nuages de points et droites de régression, histogrammes, boîtes à moustaches,
arbres de probabilités pondérés, diagrammes P-V, diagrammes de Mollier, diagrammes
d'énergie. Le script calcule les coordonnées exactes et émet un SVG (path/polyline/text).
C'est déjà la méthode utilisée pour les courbes du site.

**SVG sur gabarit normalisé (écrit à la main)** — pour les schémas qui suivent une
convention de représentation plutôt qu'un calcul : géométrie codée 2D/3D (égalité,
orthogonalité, parallélisme, repères, vecteurs), circuits électriques norme CEI, optique
géométrique (lentilles, miroirs, rayons), vecteurs d'actions mécaniques, verrerie et
montages expérimentaux, représentations de Lewis et Cram, mailles cristallines,
schémas-blocs (chaînes d'énergie/information, SysML BDD/IBD), schémas cinématiques à
symboles normalisés de liaisons, GRAFCET, chronogrammes, tables de vérité, vues en coupe,
projections orthogonales, vues éclatées.

Bibliothèque de gabarits de départ : les modules déjà riches du chantier 2026-07
(`3e-thales.js`, `4e-pythagore.js`, `reperage-graphique.js`, `bts-prep-fonctions.js`,
`bts-fourier.js`, `si-bts-automatique.js`, `si-bts-hydraulique.js`, `si-tle-grafcet.js`,
`si-1re-asservissement.js`) servent de référence de style et de structure SVG. Un nouveau
type de schéma sans gabarit existant se conçoit au moment du besoin réel, pas par
anticipation.

Le cycle essai/amélioration : produire une première version, la soumettre à l'étape 3, et
ajuster (code ou gabarit) tant que la vérification ne passe pas — pas de première version
acceptée telle quelle.

## Étape 3 — Vérifier

Reprend le protocole déjà prouvé à l'échelle de 140 modules :

- **Recalcul indépendant** : un second chemin de calcul vérifie les valeurs affichées et
  les invariants attendus (parallélisme, orthogonalité, égalité de longueurs/angles,
  cohérence entre un symbole et sa légende) — pas seulement "le script s'est exécuté sans
  erreur".
- **Rendu visuel réel** : capture Chrome headless en thème clair et sombre (recette
  documentée dans `project_illustrations_pedagogiques_pilote` — serveur statique local +
  fichier de redirection + `chrome.exe --headless=new --screenshot`), relue avant
  validation. Détecte ce que le recalcul seul ne voit pas : chevauchement de texte,
  illisibilité, désalignement.

Si l'une des deux vérifications échoue, retour à l'étape 2 avec ajustement. Après
plusieurs itérations infructueuses sur un même visuel, passer à l'étape 4 plutôt que
de s'acharner indéfiniment.

## Étape 4 — Repli web, licence libre uniquement

Seulement si l'étape 2 échoue réellement (diagramme technique) ou si le besoin est de
l'ambiance/photo réelle dès l'étape 1.

**Ordre de recherche** :
1. **Wikimedia Commons + Openverse** — catalogues dédiés à la licence libre (CC0/CC-BY),
   incluant de vrais diagrammes techniques (contrairement à un catalogue de photo
   généraliste). Méthode : `WebSearch` restreint à `commons.wikimedia.org` /
   `openverse.org`, puis `WebFetch` pour vérifier la licence exacte affichée sur la page
   avant tout téléchargement — même méthode que celle déjà utilisée avec succès pendant le
   chantier pilote (aucune nouvelle dépendance MCP requise).
2. **Unsplash** (serveur MCP `unsplash`, installé le 2026-08-18) — en complément, pour un
   besoin de photo réelle propre (licence Unsplash claire, pas d'attribution obligatoire).
   Peu pertinent pour un diagramme technique, adapté à un besoin d'ambiance.

**Ne pas utiliser `google-search`** pour ce repli : le serveur MCP installé n'expose aucun
filtre de licence (`rights`), contrairement à l'API Google sous-jacente — l'utiliser
reproduirait le problème de licence non garantie déjà écarté pour ce projet.

Toute image retenue par ce repli est un **complément à un diagramme, jamais un
remplacement** — elle illustre un contexte, elle ne représente pas la donnée scientifique
elle-même. Licence et attribution tracées systématiquement (voir "Provenance").

## Étape 5 — Dernier recours : génération IA

Uniquement si l'étape 4 ne trouve rien d'utilisable, et uniquement pour un besoin
d'ambiance sans contenu scientifique à représenter (jamais pour un diagramme — verdict
déjà tranché par les deux échecs documentés). Reprend le script existant
`C:\Users\Dylan\Desktop\mammouth-image-gen\generer_image.py`, sans changement.

## Sortie et intégration

- **Diagramme construit par code (étape 2)** : stocké tel quel dans `cours.diagram.svg`
  du module concerné (`js/data/{niveau}/...`), aucune nouvelle convention. Les manuels
  héritent automatiquement via `scripts/manuel/svg2tikz.js` (règle `svg-exact`) sans
  aucune modification de ce pipeline.
- **Image de repli (étape 4)** : téléchargée dans `images/modules/{niveau}/{slug}.jpg`
  (dossier déjà utilisé pendant le chantier pilote), toujours en complément d'un
  diagramme existant, jamais à sa place.
- **Provenance** : chaque image de repli (étape 4) est tracée dans
  `images/modules/sources.json` (url source, auteur, licence exacte, date, module
  concerné) — même principe que `sources.json` côté fiches FED, adapté à Spark Learning.
  Un diagramme construit par code (étape 2) n'a pas besoin de cette trace : sa provenance
  est le calcul/gabarit lui-même, déjà garanti par la vérification de l'étape 3.
- **Génération IA (étape 5)** : sortie PNG comme aujourd'hui via `generer_image.py`,
  insérée en complément d'ambiance uniquement.

## Déclenchement

- Pendant la création ou mise à jour d'un module (`generer-modules`), quand
  `cours.diagram` est absent ou à créer.
- À la demande explicite ("crée-moi le schéma pour tel concept").

Ce skill ne s'invoque jamais depuis le pipeline manuels lui-même (`manuels-spark`), qui
continue de ne consommer que des SVG déjà publiés sur le site.

## Échec total

Si les étapes 2 à 5 échouent toutes, le skill le signale clairement à l'utilisateur plutôt
que de produire un diagramme faux ou de forcer une image inadaptée — cohérent avec la
règle "provenance obligatoire" déjà appliquée côté manuels. Un module sans visuel
satisfaisant garde son format texte existant plutôt que de recevoir un visuel de mauvaise
qualité.

## Prochaine étape

Plan d'implémentation via le skill `writing-plans` : réécriture de
`~/.claude/skills/generer-image/SKILL.md`, structure de `images/modules/sources.json`,
et éventuel script utilitaire pour le cycle recalcul+rendu (étape 3) si un outil commun
peut factoriser la recette déjà documentée.
