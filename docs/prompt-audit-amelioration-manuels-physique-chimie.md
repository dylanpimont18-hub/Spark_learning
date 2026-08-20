# Prompt de lancement — Audit, amélioration et manuels Physique-Chimie

> Contexte : préparé le 2026-08-20, dans une conversation de brainstorming (voir
> historique si besoin). Ce prompt est conçu pour être collé **tel quel** dans une
> **nouvelle conversation Claude Code**, ouverte sur ce même repo
> (`c:\Users\Dylan\Desktop\Creation_site\Spark_learning`). Il est long et enchaîne
> plusieurs grosses phases en autonomie — prévoir une session de plusieurs heures et
> un volume de tokens conséquent, à l'image de ce qui a déjà été fait pour BTS FED S8
> (54 chapitres, plusieurs lots d'agents parallèles).

---

## 0. Ce qui est déjà vrai (ne pas re-vérifier, juste exploiter)

- **Seuls les 10 modules physique-chimie BTS existent** (`js/data/physique-bts/`,
  complet, cf. `docs/programmes-physique.md` section BTS). Les 44 chapitres
  collège/lycée sont encore 🔴 — **aucun fichier n'existe**.
- Un brouillon de prompt pour générer ces 44 modules existe déjà :
  `docs/prompt-lancement-physique-chimie-college-lycee.md`. Il contient les
  conventions de dossier, les gabarits à suivre, les règles de contenu et le
  protocole de vérification des schémas. **Le réutiliser tel quel comme brief pour
  chaque lot de la Phase 0 ci-dessous** — ne pas le réécrire.
- Le pipeline manuels existant (`scripts/manuel/`, skill `manuels-spark`) transforme
  les modules `js/data/` en manuels LaTeX vendables. `bts-physique` est **déjà
  déclaré** comme ouvrage dans `scripts/manuel/build.js` (10 chapitres, 0 compilé à
  ce jour). Les 7 autres ouvrages physique-chimie visés ici (collège, lycée, et
  leurs déclinaisons par niveau) **n'existent pas encore** dans `OUVRAGES` —
  il faudra les ajouter (Phase 2.5).
- Respecter en permanence `CLAUDE.md` (racine), `.claude/rules/dev-guidelines.md` et
  le skill `manuels-spark` pour tout ce qui touche au contenu pédagogique et au
  pipeline manuels. Ne pas les relire en entier à chaque étape, mais ne jamais les
  contredire.

## 1. Périmètre final

**54 modules** physique-chimie (10 BTS existants + 44 collège/lycée à créer), et
**8 ouvrages** (16 PDF élève+prof) :

| Ouvrage | Dossiers `js/data/` | Chapitres |
|---|---|---|
| `bts-physique` | `physique-bts` | 10 *(existe, jamais compilé)* |
| `college-physique` | `physique-4e`, `physique-3e` | 12 |
| `college-physique-4e` | `physique-4e` | 6 |
| `college-physique-3e` | `physique-3e` | 6 |
| `lycee-physique` | `physique-2nde`, `physique-1re`, `physique-tle` | 32 |
| `lycee-physique-2nde` | `physique-2nde` | 10 |
| `lycee-physique-1re` | `physique-1re` | 11 |
| `lycee-physique-tle` | `physique-tle` | 11 |

---

## Phase 0 — Générer les 44 modules collège/lycée manquants

Condition préalable à tout le reste : sans ces modules, ni l'audit ni les manuels
collège/lycée n'ont de contenu.

1. Découper en **5 lots par niveau** (4e, 3e, 2nde, 1re, Tle). Dispatcher un
   sous-agent par lot (outil `Agent`, en parallèle), chacun recevant :
   - Le contenu intégral de `docs/prompt-lancement-physique-chimie-college-lycee.md`
     comme brief.
   - La liste exacte des chapitres de son niveau, tirée de
     `docs/programmes-physique.md` (id suggéré + titre).
   - Un port dédié pour son serveur de vérification (`node
     scripts/tmp-static-server.js <port>`), décalé entre lots pour éviter les
     collisions.
2. Chaque lot crée ses fichiers `js/data/physique-{niveau}/physique-{niveau}-{topic}.js`
   et son `index.js` (copié depuis `js/data/physique-bts/index.js`), sans toucher
   `js/loader.js`, `index.html`, `docs/programmes-physique.md` ni `contenu.md`
   (réservé à l'intégration finale ci-dessous).
3. **Après que tous les lots ont terminé**, en tant qu'orchestrateur (cette
   conversation) :
   - Ajouter tous les nouveaux fichiers à `DATA_FILES` dans `js/loader.js` et au
     `MODULE_INDEX` si applicable.
   - Passer les 44 chapitres de 🔴 à 🟢 dans `docs/programmes-physique.md`.
   - Mettre à jour `contenu.md` (règle obligatoire de
     `.claude/rules/dev-guidelines.md`).
   - Mettre à jour `CODEBASE_MAP.md` pour les nouveaux fichiers/dossiers.
   - Incrémenter le `?v=N` de **toutes** les balises `<script>`/`<link>` locales
     dans `index.html` (règle `CLAUDE.md`, section cache-busting).
   - Lancer `node scripts/check-decimal-notation.js` sur tout le repo : 0 nouvelle
     erreur tolérée.

## Phase 1 — Audit des 54 modules

Pour chacun des 54 modules (10 BTS + 44 nouveaux), produire un état des lieux :

- `cours.diagram` présent ou absent.
- Si présent : pertinence par rapport au contenu du chapitre, exactitude des
  valeurs affichées, lisibilité (clair + sombre).
- Cohérence entre le texte de `cours` et le schéma (le schéma illustre-t-il
  vraiment ce que le texte explique ?).
- Score indicatif /100 par module (base de départ pour la Phase 2).

Livrer un rapport d'audit clair (tableau module → statut schéma → score initial →
priorité) avant d'enchaîner sur la Phase 2. Ne pas s'arrêter pour validation
(exécution autonome demandée) mais **garder ce rapport dans le rapport final**.

## Phase 2 — Boucle d'amélioration (3 sous-agents, cap 3 cycles par module)

Pour chaque module dont le score d'audit est en dessous de 90/100 (traiter les
54 modules par lots parallèles, par niveau par exemple, pas un par un en
séquentiel) :

**Cycle = rédacteur → schémas → relecteur**, répété jusqu'à un score ≥ 90/100,
**3 cycles maximum**. Au-delà, arrêter, marquer le module « à traiter
manuellement » dans le rapport final avec le dernier score et les défauts
restants, et passer au module suivant — jamais de boucle infinie.

- **Sous-agent rédacteur** : améliore `cours` (structure, clarté, style « SI »
  aéré de `CLAUDE.md` — `<br/><br/>`, `<strong>`, rédaction narrative), sans
  jamais casser la notation décimale française (`fr()`, jamais `.replace('.', '{,}')`
  à la main).
- **Sous-agent schémas** : deux cas différents, ne pas les confondre.
  - **Schéma technique lié à un calcul exact de l'exercice** (diagramme de
    forces avec valeurs, circuit avec les bonnes valeurs R/I/U, courbe de
    titrage avec le bon point d'équivalence, cinétique, etc.) : construire/
    corriger en SVG via le skill `generer-image`, suivre son workflow à la
    lettre (calcul indépendant + capture clair/sombre réelle sur
    `http://localhost:PORT/#module/{id}/cours`). Jamais d'image externe, jamais
    de génération IA pour ce type de schéma.
  - **Image illustrative/contextuelle** (photo d'un dispositif réel, d'une
    manip) — optionnelle, seulement si elle apporte une vraie valeur
    pédagogique : utiliser votre skill/outil de recherche d'images libres de
    droit. **Contrainte dure, différente du réglage par défaut de
    `visuels-fiche-fed`** (celui-ci accepte des images « tous droits réservés »
    parce qu'il vise un usage interne non diffusé — **ce n'est pas le cas ici,
    ces manuels seront vendus**) : n'accepter que des images sous licence
    explicitement compatible avec une revente commerciale (CC0, licence
    Unsplash, domaine public, ou CC-BY avec attribution) ; rejeter tout « tous
    droits réservés » ou licence ambiguë. Toujours enregistrer auteur + licence
    + URL source pour la Phase 2.5 (crédit obligatoire dans le manuel).
- **Sous-agent relecteur** : note sur 100 (fond pédagogique + pertinence/qualité
  du schéma), renvoie une liste précise de défauts si < 90. Ton socratique dans
  les retours, jamais punitif — cohérent avec le reste du site.

À la fin de la Phase 2 : relancer `node scripts/check-decimal-notation.js`
(0 nouvelle erreur).

## Phase 2.5 — Étendre le pipeline manuels (code)

Deux ajouts nécessaires dans `scripts/manuel/`, à faire une fois, avant la
Phase 3 :

1. **`build.js`** : ajouter les 7 ouvrages manquants dans `OUVRAGES` (mirroring
   exact du pattern déjà utilisé pour `college-maths`/`lycee-maths` et leurs
   déclinaisons par niveau) :
   - `college-physique` (dossiers `physique-4e`, `physique-3e`)
   - `college-physique-4e` (dossier `physique-4e`)
   - `college-physique-3e` (dossier `physique-3e`)
   - `lycee-physique` (dossiers `physique-2nde`, `physique-1re`, `physique-tle`)
   - `lycee-physique-2nde`, `lycee-physique-1re`, `lycee-physique-tle`

   Chaque entrée suit le même schéma que les entrées maths existantes (`titre`,
   `sousTitre`, `collection: 'Collection Physique-Chimie'`, `dossiers`,
   `niveaux`, `accroche`). Compléter aussi la map `NIVEAUX` avec `physique-4e`,
   `physique-3e`, `physique-2nde`, `physique-1re`, `physique-tle` (`physique-bts`
   y est déjà). Une image de couverture n'est pas obligatoire (retombe sur
   l'aplat ardoise de `platUn()` si absente) — ne pas en fabriquer une pour
   cette tâche, sauf si vous en avez déjà une sous la main.

2. **`figures.js`** (et `schema.js` si besoin) : **aucun mécanisme n'existe
   aujourd'hui pour insérer une image externe dans un manuel** —
   `preparerFigures()` ne convertit que `cours.diagram.svg` (schémas SVG maison)
   en TikZ via `svg2tikz.js`. Si la Phase 2 a produit au moins une image
   illustrative sourcée, ajouter un nouveau type de figure (ex.
   `provenance: 'photo-libre-de-droit'`) qui :
   - N'est acceptée que si elle porte auteur + licence (dans l'allowlist définie
     en Phase 2) + URL source — sinon refusée et remontée au tableau de bord,
     **exactement le même garde-fou que pour `svg-exact`** (voir le commentaire
     en tête de `figures.js` : « une figure n'entre dans un ouvrage que si sa
     provenance est vérifiable »).
   - Insère l'image via `\includegraphics` avec une légende de crédit visible
     (auteur + licence), pas seulement en note de bas de page.
   - Est couverte par un test dans `scripts/manuel/tests/figures.test.js`
     (128 tests existants à ne pas casser — `node --test
     scripts/manuel/tests/*.test.js`).

   Si la Phase 2 n'a produit aucune image illustrative (uniquement des schémas
   SVG techniques), cette étape peut être sautée — le noter dans le rapport
   final.

## Phase 3 — Compiler les 8 ouvrages

Suivre le skill `manuels-spark` :

```
node scripts/manuel/progression.js              # état réel avant de démarrer
node scripts/manuel/build.js bts-physique
node scripts/manuel/build.js bts-physique --prof
node scripts/manuel/build.js college-physique
node scripts/manuel/build.js college-physique --prof
node scripts/manuel/build.js college-physique-4e
node scripts/manuel/build.js college-physique-4e --prof
node scripts/manuel/build.js college-physique-3e
node scripts/manuel/build.js college-physique-3e --prof
node scripts/manuel/build.js lycee-physique
node scripts/manuel/build.js lycee-physique --prof
node scripts/manuel/build.js lycee-physique-2nde
node scripts/manuel/build.js lycee-physique-2nde --prof
node scripts/manuel/build.js lycee-physique-1re
node scripts/manuel/build.js lycee-physique-1re --prof
node scripts/manuel/build.js lycee-physique-tle
node scripts/manuel/build.js lycee-physique-tle --prof
node scripts/manuel/progression.js              # régénère docs/manuels/PROGRESSION.md
```

`build.js` refuse de son propre chef de déclarer un ouvrage publiable s'il reste
un Unicode non traduit, une figure sans provenance, une erreur LaTeX, ou aucun
PDF produit — ne jamais contourner ce garde-fou, corriger la cause. Sorties
attendues dans `Manuel scolaire/<ouvrage>/` (+ `Manuel scolaire/PDF/` pour les
livrables plats).

## Phase 4 — Relecture finale + gate PDF

Pour chacun des 8 PDF élève compilés : un dernier passage de relecture (peut
réutiliser le sous-agent relecteur de la Phase 2, à l'échelle du manuel entier
cette fois) note sur 100 la cohérence d'ensemble (enchaînement des chapitres,
pagination, qualité réelle des figures dans le PDF, pas seulement dans le
SVG source).

- **Score ≥ 90** : manuel livré tel quel.
- **Score < 90** : identifier les chapitres fautifs, les repasser en Phase 2
  (même cap de 3 cycles), puis recompiler ce seul ouvrage. **Un seul cycle de
  reprise au niveau manuel** (pas de boucle infinie ici non plus) — si le score
  reste < 90 après cette reprise, livrer le PDF avec un flag explicite
  « en dessous du seuil, corrections manuelles requises » dans le rapport final,
  ne pas bloquer la livraison des 7 autres ouvrages en attendant.

---

## Rapport final attendu

- Liste des 44 modules créés (Phase 0) + confirmation `check-decimal-notation.js`
  propre.
- Tableau audit → score final par module, avec la liste des modules restés
  « à traiter manuellement » après 3 cycles.
- Liste des schémas techniques (SVG/TikZ) et des images illustratives sourcées
  (avec licence/auteur) ajoutés en Phase 2.
- Changements de code effectués en Phase 2.5 (`build.js`, `figures.js`/`schema.js`),
  tests passés.
- État des 8 ouvrages (compilé oui/non, score final, chemin des PDF).
- Tout écart, blocage ou décision prise en cours de route qui mériterait d'être
  revue.

*Fin du prompt.*
