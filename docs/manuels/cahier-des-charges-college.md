# Cahier des charges — pages hors-cours des manuels collège

> Rédigé le 2026-08-17, avant exécution. Périmètre : les manuels **collège** uniquement
> (les six autres ouvrages — lycée maths, lycée SI, BTS maths/physique/SI/FED — restent
> hors scope pour l'instant, voir « Hors scope » en fin de document).

## Ouvrages concernés

Cinq entrées dans `OUVRAGES` (`scripts/manuel/build.js`), toutes déjà compilables sans
blocage connu (`docs/manuels/PROGRESSION.md`) :

| Clé | Sous-titre | Chapitres | État |
|---|---|---:|---|
| `college-maths` | — (livre complet) | 49 | compile déjà, retouché le 2026-08-17 |
| `college-maths-6e` | Sixième | 10 | compile déjà (10/10) |
| `college-maths-5e` | Cinquième | 14 | compile déjà (14/14) |
| `college-maths-4e` | Quatrième | 12 | compile déjà (12/12) |
| `college-maths-3e` | Troisième | 13 | compile déjà (13/13) |

## Ce qui est déjà générique (aucun travail supplémentaire)

Tout ce qui a été fait sur `college-maths` cette session vit dans `ouvrage.js` /
`build.js`, pas dans une donnée propre à cet ouvrage. Les quatre variantes en
hériteront automatiquement à la prochaine compilation :

- Logo réel (`config.logoIcone`) sur la couverture, la page de titre et en colophon de
  la 4e de couverture.
- QR code + lien cliquable vers sparklearning.fr en fin d'ouvrage.
- Trame légère dans le bandeau clair de couverture et sur la 4e de couverture.
- Trait bicolore turquoise/jaune (`traitBicolore()`), répété couverture / page de titre
  / copyright / ouverture de partie.
- Table des matières limitée au niveau chapitre (`tocdepth=0`) — plus de sous-parties
  répétées 10 fois par chapitre.
- Couleurs corrigées sur « Comment utiliser ce manuel » (turquoise / gris ardoise /
  jaune / rouge, alignées sur les vraies couleurs des encadrés).
- Ligne « Cette partie compte N chapitres » supprimée des ouvertures de partie.
- Sous-titre en turquoise foncé (`turquoise!55!black`) au lieu d'orange (couleur de la
  matière FED, empruntée par erreur).

Le sous-titre (Sixième / Cinquième / Quatrième / Troisième) et le nombre de chapitres
sont déjà pilotés dynamiquement par `config` : rien à coder pour ça.

## Ce qui reste à décider

**Illustration de couverture unique ou par niveau ?**

Aujourd'hui seule la clé `college-maths` porte un `imageCouverture`
(`images/manuels/fond-college-maths.jpg`, généré cette session). Les quatre variantes
n'en ont pas encore et retomberaient sur l'aplat ardoise uni si on les compilait telles
quelles.

- **Option A — même illustration pour les cinq** (recommandé) : cohérence visuelle de
  la collection, le sous-titre suffit à distinguer un niveau de l'autre sur la
  couverture. Zéro génération supplémentaire, juste brancher le même chemin dans les
  quatre entrées `OUVRAGES` manquantes.
- **Option B — une illustration par niveau** : motifs plus spécifiques (ex. fractions/
  nombres décimaux pour la 6e, Thalès/fonctions pour la 3e). Quatre générations d'image
  supplémentaires, risque de rendre la collection moins reconnaissable comme un tout
  si les styles divergent d'un niveau à l'autre.

## Plan d'exécution (si Option A retenue)

1. Ajouter `imageCouverture: imagePath('images/manuels/fond-college-maths.jpg')` aux
   quatre entrées `college-maths-6e/5e/4e/3e` dans `build.js`.
2. Compiler les quatre : `node scripts/manuel/build.js college-maths-6e` (puis `-5e`,
   `-4e`, `-3e`).
3. Revue visuelle de la couverture et de la 4e de couverture de chacun (rapide, le code
   est déjà validé sur `college-maths` — pas une revue page par page complète).
4. Régénérer `docs/manuels/PROGRESSION.md` (`node scripts/manuel/progression.js`).
5. Mettre à jour `CODEBASE_MAP.md` si de nouvelles entrées `OUVRAGES` changent le
   commentaire existant.

## Hors scope

`lycee-maths`, `lycee-si`, `bts-maths`, `bts-physique`, `bts-si`, `bts-fed` : la
plupart n'ont jamais été compilés (0 chapitre intégré selon `PROGRESSION.md`). Leur
faire porter le même traitement suppose d'abord de lever leur propre chantier
(conversion de figures, corpus), sans rapport avec les pages hors-cours retouchées
ici. Sujet séparé, à reprendre après validation du collège.
