# Prompt de relance — Manuels scolaires : figures et finitions

> À coller tel quel dans une nouvelle discussion Claude, depuis le dossier du projet.

---

Projet : **Spark Learning**, `c:\Users\Dylan\Desktop\Creation_site\Spark_learning`.
Travaille sur la branche **`manuels-spark`** (ne merge pas dans `main` sans me demander).

## Contexte

Une chaîne complète transforme les 203 modules de `js/data/` en manuels imprimables,
vendus en impression à la demande (KDP), intérieur couleur, format 170 × 244 mm, en
sept ouvrages découpés par niveau × matière. Le skill `manuels-spark` est installé et
décrit le workflow.

**Lis d'abord, dans cet ordre :**
1. `docs/superpowers/specs/2026-08-16-manuels-spark-design.md` — la conception et les
   décisions déjà arbitrées avec moi. Ne les rouvre pas sans raison.
2. `scripts/manuel/` — dix fichiers, la chaîne complète.
3. `docs/manuels/PROGRESSION.md` — l'état réel, régénéré par scan.

**Ne lis jamais `js/data/` en entier** (le corpus dépasse une fenêtre de contexte) :
passe par `chargerModule()` de `scripts/manuel/extract.js`.

## Ce qui marche déjà — n'y touche pas sans raison

- `college-maths` compile : 433 pages en édition élève, 495 en professeur,
  **0 débordement de composition, 0 erreur LaTeX**.
- 36 tests verts : `node --test scripts/manuel/tests/*.test.js`
- 203/203 modules convertis sans symbole inconnu : `node scripts/manuel/verifier-corpus.js`
- Sortie dans `Manuel scolaire/<ouvrage>/`, gitignorée sauf `couverture.png`.
- Visuels actuels par chapitre : 1 figure de schéma, 1 frise de méthode, 1 barème visuel.

## Ce qui reste à faire, par ordre de priorité

### 1. Figures en TikZ — le blocage qualité pour la vente

Aujourd'hui `scripts/manuel/figures.js` rend les SVG des modules en PDF vectoriel via
puppeteer. La géométrie est exacte, mais **les étiquettes restent en police de texte** :
on lit `A'B'` en romain au lieu de $A'B'$ composé en mathématiques. Dans un livre vendu,
ça se voit immédiatement.

Il faut convertir les SVG en TikZ. Mesures faites sur le corpus :

| | Modules | Traitement |
|---|---:|---|
| SVG sans `<path>` (`line`, `circle`, `rect`, `text`) | 100 | conversion directe |
| `<path>` avec arcs seulement (marques d'angle, secteurs) | 90 | `\draw arc`, conversion directe |
| `<path>` avec courbes de Bézier | 13 | à retracer depuis la formule, en PGFPlots |

Soit **190 / 203 (94 %) convertibles exactement**. Les coordonnées du `viewBox` se
transposent en coordonnées TikZ ; les classes CSS (`frame-line`, `curve-main`,
`guide-line`, `plot-point`, `plot-point-alt`, `annotation-label`) donnent les styles —
leur définition est dans `css/styles.css` vers la ligne 1850.

**Règle non négociable** : une figure n'entre dans un PDF que si elle porte une
provenance vérifiable enregistrée (`figures.js`, fonction `figureUtilisable`). Une
figure qu'on ne sait pas convertir exactement est **bloquée** et remonte au tableau de
bord ; le chapitre se compose sans elle. Ne jamais forcer.

### 2. Plus de figures mathématiques — la demande explicite

Je veux **beaucoup de représentations visuelles**. Chaque chapitre n'a qu'une figure de
schéma. Ajoute des figures supplémentaires, générées depuis les données du module donc
justes par construction, par exemple :

- **droite graduée** pour les chapitres sur les décimaux, les relatifs, l'encadrement,
  les fractions ;
- **découpage d'aires** pour la multiplication, les périmètres et aires, les identités
  remarquables ;
- **graphique de fonction** en PGFPlots quand le module définit une fonction.

Conçois-les chapitre par chapitre, en commençant par la **Sixième** (10 chapitres).
N'invente aucune valeur : tout doit venir du contenu du module.

### 3. Renvois croisés professeur → élève

L'édition professeur doit pouvoir citer les pages de l'édition élève (« l'exercice 3,
page 47 »), parce qu'un collègue qui achète le livre du professeur distribuera l'édition
élève à ses étudiants. Techniquement : paquet `xr`, compiler l'élève d'abord et
réutiliser ses étiquettes. Les ancres `\label{ex:<id>:<n>}` sont déjà posées dans
`scripts/manuel/chapitre.js`.

### 4. Les six autres ouvrages

`lycee-maths` (36 chapitres), `lycee-si` (20), `bts-maths` (27), `bts-physique` (10),
`bts-si` (8), `bts-fed` (54). Le pipeline les gère déjà. Il leur manque une illustration
de couverture : `Manuel scolaire/<ouvrage>/couverture.png`, sans aucun texte. Utilise le
skill `generer-image` — il convient pour une couverture d'ambiance, mais **jamais** pour
une figure mathématique (testé : le modèle produit des configurations géométriquement
fausses).

## Règles à ne pas casser

- **Ne corrige jamais un défaut de contenu uniquement dans le manuel.** Corrige dans
  `js/data/`, en commit séparé. Sinon le livre afficherait « théorème » pendant que le
  site afficherait « theoreme », et l'écart grandirait à chaque correction.
- **Écriture dans `js/data/` limitée aux défauts mécaniques** (accents, notation
  décimale, schéma de données). Jamais de retouche du fond pédagogique.
- Après toute modification de `js/data/` ou `css/` : incrémenter le `?v=N` de **toutes**
  les balises locales d'`index.html`, et relancer `node scripts/check-decimal-notation.js`.
- **La graine gouverne le livre.** `build.js` dérive une graine par chapitre : deux
  compilations donnent le même ouvrage. En changer renumérote les exercices et invalide
  les réponses déjà imprimées.
- **Deux passes de gouttière** : compiler, lire la pagination, fixer la marge intérieure,
  recompiler. Ne pas court-circuiter.
- Mets à jour `CODEBASE_MAP.md` et `contenu.md` après toute modification de fichiers.

## Pièges déjà rencontrés — ne les redécouvre pas

- **Les chaînes vides sont des séparations de paragraphe LaTeX.** Les filtrer a produit
  135 débordements dont 125 dépassaient 30 pt dans la marge.
- `\checkmark` et `\times` sont des commandes **mathématiques**, pas textuelles.
- Envelopper systématiquement les symboles dans `\ensuremath` : les formules contiennent
  des `\text{}` qui rebasculent en mode texte.
- L'apostrophe courbe ne doit **jamais** entrer en mode mathématique : dans `$A'B'$`
  c'est un symbole prime.
- `microtype` exige `lmodern`, sinon la compilation échoue sur les polices bitmap.
- Chaque appel de `chargerModule()` crée un contexte `vm` avec ses propres intrinsèques :
  les données renvoyées doivent être ramenées dans le realm hôte.
- `\part` compose sa propre page : une page d'ouverture personnalisée doit être
  fabriquée à la main.

## Vérification avant de me rendre la main

```
node --test scripts/manuel/tests/*.test.js       # doit rester au vert
node scripts/manuel/verifier-corpus.js           # 203/203, 0 symbole inconnu
node scripts/manuel/build.js college-maths       # puis --prof
node scripts/manuel/progression.js
```

Puis, sur `Manuel scolaire/college-maths/college-maths-eleve.log` :

```
grep -c "Overfull .hbox"   # doit rester à 0
grep -c "Underfull .vbox"  # doit rester à 0
grep -c "^! "              # doit rester à 0
```

Et **regarde réellement les pages produites** avant de dire que c'est bon : ouvre le PDF
et vérifie les figures modifiées. Un `0 erreur` ne prouve pas qu'une figure est juste.

Ne commite pas sur `main` et ne pousse rien sans me le demander.
