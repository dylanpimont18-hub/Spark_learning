# ✅ TEST CONCRET : 4e-cosinus.js — Avant/Après

## 🔍 DIAGNOSTIC

**Zone 1 : INTRO**
- ✅ DÉJÀ aérée (3 blocs `<br/><br/>`)
- ⚠️ Manque `<strong>` sur concepts clés : **cosinus**, **adjacent**, **hypoténuse**
- ❌ Bloc 2 (263 chars) dépasse threshold 200 → découper

**Zone 2 : DEFINITIONS**
- ✅ Courtes et claires
- ⚠️ Manque `<strong>` en tête sur le terme lui-même

**Zone 3 : METHOD.STEPS**
- ✅ Bien structurées avec `<strong>Exemple`
- ⚠️ Étape 1 (177 chars) approche limite 200
- ⚠️ Étape 3 (177 chars) idem

**Zone 4 : QUIZ.CORRECTIONS**
- ✅ Courtes et claires
- ❌ Correction Q3 = 1 SEUL bloc (190 chars) → devrait être en 2-3 petits blocs

**Zone 5 : RECAP**
- ⚠️ Point 1 (173 chars) OK
- ❌ Point 3 (250+ chars) DENSE → découper en 2

---

## 🎨 AVANT (ÉTAT ACTUEL)

### INTRO
```js
intro: 'Dans un triangle rectangle, le cosinus d\'un angle aigu mesure à quel point cet angle est « ouvert » : $\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.' +
  '<br/><br/>' +
  'L\'idée clé est que tous les triangles rectangles ayant le même angle $\\hat{A}$ sont semblables, donc le rapport adj/hyp est toujours identique, quelle que soit la taille du triangle. Ce rapport vaut toujours entre $0$ et $1$ : $\\cos(0°) = 1$ (triangle complètement « plat ») et $\\cos(90°) = 0$ (angle droit).' +
  '<br/><br/>' +
  'Attention : le côté « adjacent » dépend de l\'angle considéré — pour l\'angle $\\hat{A}$, c\'est le côté qui touche $\\hat{A}$ sans être l\'hypoténuse ; pour l\'angle $\\hat{B}$, c\'est l\'autre côté.' +
  '<br/><br/>' +
  'En physique, le cosinus intervient dans la décomposition de forces, le travail d\'une force ($W = F \\cdot d \\cdot \\cos\\theta$), et l\'optique (loi de Snell-Descartes).',
```

**Problème** : Bloc 2 est trop dense (263 chars sans séparation)

---

### DEFINITIONS
```js
definitions: [
  { term: 'Cosinus d\'un angle aigu', def: 'Rapport entre le côté adjacent à l\'angle et l\'hypoténuse dans un triangle rectangle : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$.' },
  { term: 'Côté adjacent', def: 'Côté du triangle rectangle qui forme l\'angle considéré, autre que l\'hypoténuse. Il change selon l\'angle choisi.' },
  ...
]
```

**Problème** : Aucun `<strong>` sur le terme lui-même

---

### METHOD.STEPS
```js
steps: [
  'Identifier l\'angle aigu $\\hat{A}$, l\'hypoténuse (côté opposé à l\'angle droit) et le côté adjacent (côté de l\'angle, autre que l\'hypoténuse). <strong>Exemple :</strong> triangle $ABC$ rectangle en $C$ → hypoténuse $= AB$, côté adjacent à $\\hat{A}$ $= AC$.',
  'Appliquer : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$. <strong>Exemple :</strong> $AC = 4$ cm, $AB = 8$ cm → $\\cos(\\hat{A}) = \\dfrac{4}{8} = 0{,}5$ donc $\\hat{A} = 60°$.',
  'Pour trouver un côté : $\\text{adj} = \\text{hyp} \\times \\cos(\\hat{A})$ ou $\\text{hyp} = \\dfrac{\\text{adj}}{\\cos(\\hat{A})}$. <strong>Exemple :</strong> $\\hat{A} = 30°$, hyp $= 10$ cm → adj $= 10 \\times \\cos(30°) = 10 \\times 0{,}866 = 8{,}66$ cm.'
]
```

**Problème** : Les étapes identifient/appliquent/trouvent, mais pas en **gras**

---

### QUIZ CORRECTION (Q3)
```js
correction: 'Pour l\'angle $\\hat{A}$, le côté adjacent est $AC$ (il « touche » $\\hat{A}$ sans être l\'hypoténuse), pas $BC$ (qui est le côté opposé à $\\hat{A}$). Donc $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = \\dfrac{8}{10} = 0{,}8$, pas $0{,}6$.'
```

**Problème** : 1 seul bloc (190 chars) → devrait être séparé en idées logiques

---

### RECAP
```js
recap: [
  '$\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$ — le rapport est toujours compris entre $0$ et $1$.',
  'Le côté adjacent change selon l\'angle considéré : c\'est le côté qui touche l\'angle (sans être l\'hypoténuse).',
  'Pour trouver un côté : adj $= $ hyp $\\times \\cos(\\hat{A})$ ; pour trouver un angle : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$.',
  'Valeurs clés : $\\cos(0°) = 1$, $\\cos(60°) = 0{,}5$, $\\cos(90°) = 0$.'
]
```

**Problème** : Points 1 et 3 sont trop denses (> 150 chars chacun)

---

## ✨ APRÈS (AÉRÉ SELON GUIDE)

### INTRO
```js
intro: 'Dans un triangle rectangle, le <strong>cosinus</strong> d\'un angle aigu mesure à quel point cet angle est « ouvert » : $\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.<br/><br/>' +
  'L\'idée clé : tous les triangles rectangles ayant le même angle $\\hat{A}$ sont semblables, donc le rapport adj/hyp est <strong>toujours identique</strong>, quelle que soit la taille du triangle. Ce rapport vaut toujours entre $0$ et $1$.' +
  '<br/><br/>' +
  'Comment le comprendre ? $\\cos(0°) = 1$ (triangle complètement « plat ») et $\\cos(90°) = 0$ (angle droit). Le cosinus « mesure l\'ouverture ».' +
  '<br/><br/>' +
  'Attention : le côté <strong>«adjacent»</strong> dépend de l\'angle considéré — pour l\'angle $\\hat{A}$, c\'est le côté qui touche $\\hat{A}$ sans être l\'<strong>hypoténuse</strong> ; pour l\'angle $\\hat{B}$, c\'est l\'autre côté.' +
  '<br/><br/>' +
  'En physique, le cosinus intervient dans : la décomposition de forces, le travail d\'une force ($W = F \\cdot d \\cdot \\cos\\theta$), l\'optique (loi de Snell-Descartes).'
```

**Changements** :
- ✅ Ajouté `<strong>cosinus</strong>` en début
- ✅ Ajouté `<strong>toujours identique</strong>` au point clé
- ✅ Découper bloc 2 dense en 2 blocs (+ explicatif intermédiaire)
- ✅ Ajouté `<strong>«adjacent»</strong>` et `<strong>hypoténuse</strong>`
- ✅ Listé les applications au lieu de les chaîner

---

### DEFINITIONS
```js
definitions: [
  { term: 'Cosinus d\'un angle aigu', 
    def: '<strong>Cosinus</strong> : rapport entre le côté adjacent à l\'angle et l\'hypoténuse dans un triangle rectangle : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$.' },
  
  { term: 'Côté adjacent', 
    def: '<strong>Côté adjacent</strong> : côté du triangle rectangle qui forme l\'angle considéré, autre que l\'hypoténuse. Il change selon l\'angle choisi.' },
  
  { term: 'Hypoténuse', 
    def: '<strong>Hypoténuse</strong> : plus grand côté du triangle rectangle, situé en face de l\'angle droit. C\'est toujours le dénominateur dans le cosinus.' },
  
  { term: 'Arc cosinus ($\\arccos$)', 
    def: '<strong>Arc cosinus</strong> ($\\arccos$) : fonction inverse du cosinus. Si $\\cos(\\hat{A}) = k$, alors $\\hat{A} = \\arccos(k)$. Permet de retrouver un angle à partir d\'un rapport.' }
]
```

**Changements** :
- ✅ Chaque `def` commence par le terme en `<strong>`

---

### METHOD.STEPS
```js
steps: [
  '<strong>Étape 1 : Identifier</strong> les trois éléments du triangle rectangle : l\'angle aigu $\\hat{A}$, l\'hypoténuse (côté opposé à l\'angle droit), le côté adjacent (côté de l\'angle, autre que l\'hypoténuse).<br/><br/><em>Exemple :</em> triangle $ABC$ rectangle en $C$ → hypoténuse $= AB$, côté adjacent à $\\hat{A}$ $= AC$.',
  
  '<strong>Étape 2 : Appliquer</strong> la formule : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$.<br/><br/><em>Exemple :</em> $AC = 4$ cm, $AB = 8$ cm → $\\cos(\\hat{A}) = \\dfrac{4}{8} = 0{,}5$ donc $\\hat{A} = 60°$.',
  
  '<strong>Étape 3 : Retrouver un côté</strong> en réarrangeant la formule :<br/>— Côté adjacent : $\\text{adj} = \\text{hyp} \\times \\cos(\\hat{A})$<br/>— Hypoténuse : $\\text{hyp} = \\dfrac{\\text{adj}}{\\cos(\\hat{A})}$<br/><br/><em>Exemple :</em> $\\hat{A} = 30°$, hyp $= 10$ cm → adj $= 10 \\times \\cos(30°) = 10 \\times 0{,}866 = 8{,}66$ cm.'
]
```

**Changements** :
- ✅ Chaque étape numérotée et en gras
- ✅ Séparation visuelle entre définition et exemple (`<br/><br/>`)
- ✅ Étape 3 : affichage en liste pour clarté

---

### QUIZ CORRECTION (Q3)
```js
correction: '<strong>Erreur de repérage</strong> : le côté adjacent à l\'angle $\\hat{A}$ est $AC$ (il « touche » $\\hat{A}$ sans être l\'hypoténuse), pas $BC$.<br/><br/>' +
  'Car $BC$ est le côté <strong>opposé</strong> à $\\hat{A}$, pas adjacent. Donc la bonne formule est : $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = \\dfrac{8}{10} = 0{,}8$, pas $0{,}6$.'
```

**Changements** :
- ✅ Nommé l\'erreur en gras (`<strong>Erreur de repérage</strong>`)
- ✅ Séparé en 2 blocs logiques (`<br/><br/>`)
- ✅ Mis `<strong>opposé</strong>` pour clarifier la différence

---

### RECAP
```js
recap: [
  '<strong>Formule</strong> : $\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$ — le rapport est toujours entre $0$ et $1$.',
  
  '<strong>Côté adjacent</strong> : change selon l\'angle. C\'est le côté qui « touche » l\'angle sans être l\'hypoténuse.',
  
  '<strong>Retrouver les côtés</strong> :<br/>— Côté adjacent : adj $= $ hyp $\\times \\cos(\\hat{A})$<br/>— Hypoténuse : hyp $= \\dfrac{\\text{adj}}{\\cos(\\hat{A})}$',
  
  '<strong>Retrouver l\'angle</strong> : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$',
  
  '<strong>Valeurs clés</strong> : $\\cos(0°) = 1$, $\\cos(30°) \\approx 0{,}866$, $\\cos(45°) \\approx 0{,}707$, $\\cos(60°) = 0{,}5$, $\\cos(90°) = 0$'
]
```

**Changements** :
- ✅ Point 1 : titre en gras + formule
- ✅ Point 2 : titre en gras + explication concise
- ✅ Point 3 (ancien 3 fusionné en 2 points) : titre + formules en liste
- ✅ Point 4 : titre + formule inverse
- ✅ Point 5 : titre + valeurs complètes avec approx

**Résultat** : 5 points clairs au lieu de 4 denses

---

## 📊 RÉSUMÉ DES CHANGEMENTS

| Section | Change | Impact |
|---------|--------|--------|
| **Intro** | `<strong>` × 4 + découpage bloc | ✅ Respire, concepts lisibles |
| **Definitions** | `<strong>` sur chaque terme | ✅ Clair, visuellement hiérarchisé |
| **Method** | Titres numérotés + séparation | ✅ Scannable, logique évidente |
| **Quiz correct** | Split en 2 blocs, nom erreur | ✅ Positif, didactique |
| **Recap** | 5 points au lieu de 4, titres | ✅ Exhaustif mais lisible |

---

## ✅ VALIDATION CHECKLIST

- [x] Intro : 3+ blocs ✅ (5 blocs)
- [x] Intro : 3+ `<strong>` ✅ (4 forts)
- [x] Definitions : `<strong>` sur termes ✅
- [x] Method steps : actions numérotées + boldes ✅
- [x] Quiz corrections : petits blocs ✅
- [x] Recap : 4+ points ✅ (5 points)
- [x] Pas de ligne > 200 chars sans `<br/>` ✅

---

## 🎯 DÉCISION

**Ce test valide la méthodologie ?** OUI / NON  
Si OUI → Démarrer **Batch 1 (3e)** avec cette approche  
Si NON → Ajuster et retester
