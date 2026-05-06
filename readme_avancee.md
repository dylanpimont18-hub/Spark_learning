# Avancement — Section "Prérequis BTS Scientifique"

## Ce qui a été implémenté

### Architecture & intégration (3 fichiers modifiés)

**`js/loader.js`** — Les 14 modules prérequis sont enregistrés dans le groupe `'maths-3'` existant (pas de nouveau groupe créé). Deux zones modifiées :
- `DATA_FILES` : ajout des 14 chemins vers `js/data/bts-prep/*.js`
- `MODULE_INDEX` : ajout des 14 IDs avec la clé `tag: 'prep'` pour les distinguer des modules BTS réguliers

**`js/views/home.js`** — `renderModulesList()` modifiée pour détecter les modules `tag === 'prep'` et afficher :
- Un bandeau d'introduction "Prérequis scientifiques" (`.prep-section-banner`)
- La grille de modules, avec les prérequis en premier
- Un séparateur visuel avant les modules BTS avancés (`.prep-section-separator`)
- Compatibilité totale avec la recherche/filtres existants (1 seul `#modules-grid`)

**`css/styles.css`** — 6 nouvelles règles CSS ajoutées :
- `.prep-section-banner` et ses enfants (icône, titre, sous-titre)
- `.prep-section-separator` (ligne de séparation avec texte centré)

---

### Modules de contenu créés (14 fichiers)

Tous dans `js/data/bts-prep/`, structure commune :
```
id, level:3, subject:'maths', tag:'prep', icon, title, subtitle, keywords,
cours { intro, definitions, method, example, formulas, diagram, recap, piege },
quiz [ 10–12 questions QCM avec correction ],
exercice { type:'numeric', generate() },
probleme { context, schema, tasks, solutions, finalAnswer },
evaluation { title, duration, questions }
```

#### Bloc Mathématiques (8 modules)

| Fichier | Icône | Contenu |
|--------|-------|---------|
| `bts-prep-calcul-litteral.js` | 🔧 | Isolation de l'inconnue, loi d'Ohm, pression, débit |
| `bts-prep-equations.js` | ⚖️ | 1er degré, 2nd degré (discriminant), systèmes 2×2 |
| `bts-prep-proportionnalite.js` | 📊 | Règle de trois, rendement, pourcentages, COP |
| `bts-prep-puissances.js` | 🔢 | Puissances de 10, notation scientifique, préfixes SI |
| `bts-prep-fonctions.js` | 📈 | Fonctions affine/carré/inverse, pente, intersection |
| `bts-prep-trigonometrie.js` | 📐 | Sin/cos/tan, triangle rectangle, cercle trigo, valeurs remarquables |
| `bts-prep-logarithme.js` | 📉 | ln/exp, propriétés, décibels, constante de temps RC |
| `bts-prep-vecteurs.js` | ↗️ | Composantes, norme, addition, produit scalaire, travail |

#### Bloc Transversal (6 modules)

| Fichier | Icône | Contenu |
|--------|-------|---------|
| `bts-prep-si-unites.js` | 📏 | 7 grandeurs SI, unités dérivées, préfixes, conversions clés |
| `bts-prep-analyse-dim.js` | 🔬 | Principe d'homogénéité, dimensions, Reynolds, détection d'erreurs |
| `bts-prep-conversions.js` | ⚙️ | Pression (bar/Pa), débit (m³/h/l/min), énergie (kWh/MJ), tr/min→rad/s |
| `bts-prep-equations-transf.js` | 🔄 | Inverser racine, puissance, exp, ln — cas physiques |
| `bts-prep-graphiques.js` | 📊 | Interpolation linéaire, pente, extrapolation, abaques |
| `bts-prep-donnees-techniques.js` | 📋 | Catalogues Grundfos/Daikin/Schneider, sélection, NPSH, COP |

---

### Caractéristiques pédagogiques

- **Multi-filières** : chaque module contient des exemples issus d'au moins 2 filières BTS différentes (FED, Électrotechnique, Mécanique, BTP, Chimie, Maintenance, HVAC)
- **Ton adulte** : pas de "Faux !", socratique, encourageant
- **Exercices générateurs** : `generate()` utilise `pick()` pour varier contextes et valeurs — pas deux exercices identiques
- **KaTeX** : décimales françaises (`1{,}5`), équations display et inline
- **Problèmes professionnels** : chaque module finit sur un problème situé dans un contexte industriel réel (pompe Grundfos, câblage NF C 15-100, four industriel, installation solaire, réseau CVC...)
- **Évaluation** : 3–4 questions de synthèse notées

---

### Ce qui reste à faire

- [ ] Mettre à jour `contenu.md` pour référencer le dossier `js/data/bts-prep/`
- [ ] Tester le chargement de tous les modules dans le navigateur
- [ ] Vérifier l'affichage du bandeau "Prérequis" et du séparateur en navigation BTS > Maths

---

### Remarques techniques

- Les 14 modules utilisent `window.MODULES.push(...)` (pas d'`export`) — compatible Vanilla JS sans bundler
- Le champ `tag: 'prep'` est la seule modification du schéma de module — rétrocompatible
- Aucun nouveau niveau LEVEL_NAMES ni SUBJECT_DEFS créé — intégration minimale invasive
- La recherche/filtres existants sont compatibles : un seul `id="modules-grid"`, le séparateur n'a pas la classe `.module-card`
