# Plan de Refactoring (Découpage Modulaire)

**Statuts autorisés :** [ ] À FAIRE, [~] EN COURS, [x] TERMINÉ

## Phase 1 : Découpage des Données (js/data/)
L'objectif est d'extraire chaque objet de window.MODULES.push({...}) dans son propre fichier, rangé par niveau.
- [x] **Niveau 3e (js/data/3e.js)**
  - [x] Créer js/data/3e/trigonometrie.js`n  - [x] Créer js/data/3e/3e-systemes.js`n  - [x] Créer js/data/3e/3e-thales.js`n  - [x] Créer js/data/3e/3e-arithmetique.js`n  - [x] Créer js/data/3e/3e-identites-remarquables.js`n  - [x] Créer js/data/3e/3e-equations-inequations.js`n  - [x] Créer js/data/3e/3e-fonctions.js`n  - [x] Créer js/data/3e/3e-homotheties.js`n  - [x] Créer js/data/3e/3e-sections-solides.js`n  - [x] Créer js/data/3e/3e-volumes.js`n  - [x] Créer js/data/3e/3e-stats-probas.js`n  - [x] Créer js/data/3e/3e-algorithmique.js`n  - [x] Créer js/data/3e/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/3e.js et mettre à jour le HTML/Loader

- [x] **Niveau 4e (js/data/4e.js)**
  - [x] Créer js/data/4e/puissances.js`n  - [x] Créer js/data/4e/calcul-algebrique.js`n  - [x] Créer js/data/4e/4e-pythagore.js`n  - [x] Créer js/data/4e/4e-fractions-mult-div.js`n  - [x] Créer js/data/4e/4e-relatifs-mult-div.js`n  - [x] Créer js/data/4e/4e-triangle-rectangle-cercle.js`n  - [x] Créer js/data/4e/4e-translations.js`n  - [x] Créer js/data/4e/4e-droites-remarquables.js`n  - [x] Créer js/data/4e/4e-cosinus.js`n  - [x] Créer js/data/4e/4e-volumes.js`n  - [x] Créer js/data/4e/4e-statistiques.js`n  - [x] Créer js/data/4e/4e-probabilites.js`n  - [x] Créer js/data/4e/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/4e.js et mettre à jour le HTML/Loader

- [ ] **Niveau 5e (js/data/5e.js)**
  - [ ] Créer js/data/5e/proportionnalite.js`n  - [ ] Créer js/data/5e/reperage-graphique.js`n  - [ ] Créer js/data/5e/5e-nombres-relatifs.js`n  - [ ] Créer js/data/5e/5e-priorites-operations.js`n  - [ ] Créer js/data/5e/5e-fractions-operations.js`n  - [ ] Créer js/data/5e/5e-proportionnalite.js`n  - [ ] Créer js/data/5e/5e-expressions-litterales.js`n  - [ ] Créer js/data/5e/5e-symetrie-centrale.js`n  - [ ] Créer js/data/5e/5e-triangles.js`n  - [ ] Créer js/data/5e/5e-parallelogrammes.js`n  - [ ] Créer js/data/5e/5e-angles-parallelisme.js`n  - [ ] Créer js/data/5e/5e-aires-perimetres.js`n  - [ ] Créer js/data/5e/5e-volumes.js`n  - [ ] Créer js/data/5e/5e-statistiques.js`n  - [ ] Créer js/data/5e/5e-probabilites.js`n  - [ ] Créer js/data/5e/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/5e.js et mettre à jour le HTML/Loader

- [ ] **Niveau 6e (js/data/6e.js)**
  - [ ] Créer js/data/6e/6e-fractions.js`n  - [ ] Créer js/data/6e/6e-volumes.js`n  - [ ] Créer js/data/6e/6e-angles.js`n  - [ ] Créer js/data/6e/6e-nombres-decimaux.js`n  - [ ] Créer js/data/6e/6e-addition-soustraction.js`n  - [ ] Créer js/data/6e/6e-multiplication.js`n  - [ ] Créer js/data/6e/6e-division.js`n  - [ ] Créer js/data/6e/6e-figures-geometriques.js`n  - [ ] Créer js/data/6e/6e-symetrie-axiale.js`n  - [ ] Créer js/data/6e/6e-perimetres-aires.js`n  - [ ] Créer js/data/6e/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/6e.js et mettre à jour le HTML/Loader

- [x] **Niveau bts (js/data/bts.js)**
  - [x] Créer js/data/bts/complexes.js`n  - [x] Créer js/data/bts/eq-diff-2.js`n  - [x] Créer js/data/bts/statistiques.js`n  - [x] Créer js/data/bts/bts-loi-normale.js`n  - [x] Créer js/data/bts/bts-fonctions-reelles.js`n  - [x] Créer js/data/bts/bts-derivation-appliquee.js`n  - [x] Créer js/data/bts/bts-integrales-appliquees.js`n  - [x] Créer js/data/bts/bts-stats-deux-variables.js`n  - [x] Créer js/data/bts/bts-probas-discretes.js`n  - [x] Créer js/data/bts/bts-suites-appliquees.js`n  - [x] Créer js/data/bts/bts-matrices.js`n  - [x] Créer js/data/bts/bts-fourier.js`n  - [x] Créer js/data/bts/bts-laplace.js`n  - [x] Créer js/data/bts/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/bts.js et mettre à jour le HTML/Loader

- [ ] **Niveau lycee-1re (js/data/lycee-1re.js)**
  - [ ] Créer js/data/lycee-1re/1re-derivation.js`n  - [ ] Créer js/data/lycee-1re/1re-suites.js`n  - [ ] Créer js/data/lycee-1re/1re-produit-scalaire.js`n  - [ ] Créer js/data/lycee-1re/1re-second-degre.js`n  - [ ] Créer js/data/lycee-1re/1re-polynomes-signe.js`n  - [ ] Créer js/data/lycee-1re/1re-trigonometrie.js`n  - [ ] Créer js/data/lycee-1re/1re-geometrie-reperee.js`n  - [ ] Créer js/data/lycee-1re/1re-probas-conditionnelles.js`n  - [ ] Créer js/data/lycee-1re/1re-variables-aleatoires.js`n  - [ ] Créer js/data/lycee-1re/1re-information-chiffree.js`n  - [ ] Créer js/data/lycee-1re/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/lycee-1re.js et mettre à jour le HTML/Loader

- [ ] **Niveau lycee-2nde (js/data/lycee-2nde.js)**
  - [ ] Créer js/data/lycee-2nde/vecteurs.js`n  - [ ] Créer js/data/lycee-2nde/fonctions-affines.js`n  - [ ] Créer js/data/lycee-2nde/2nde-ensembles-nombres.js`n  - [ ] Créer js/data/lycee-2nde/2nde-calcul-algebrique.js`n  - [ ] Créer js/data/lycee-2nde/2nde-equations-inequations.js`n  - [ ] Créer js/data/lycee-2nde/2nde-fonctions-generalites.js`n  - [ ] Créer js/data/lycee-2nde/2nde-fonctions-reference.js`n  - [ ] Créer js/data/lycee-2nde/2nde-reperage-plan.js`n  - [ ] Créer js/data/lycee-2nde/2nde-droites-systemes.js`n  - [ ] Créer js/data/lycee-2nde/2nde-geometrie-plane.js`n  - [ ] Créer js/data/lycee-2nde/2nde-statistiques.js`n  - [ ] Créer js/data/lycee-2nde/2nde-probabilites.js`n  - [ ] Créer js/data/lycee-2nde/2nde-echantillonnage.js`n  - [ ] Créer js/data/lycee-2nde/2nde-algorithmique.js`n  - [ ] Créer js/data/lycee-2nde/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/lycee-2nde.js et mettre à jour le HTML/Loader

- [ ] **Niveau lycee-tle (js/data/lycee-tle.js)**
  - [ ] Créer js/data/lycee-tle/tle-exponentielle-logarithme.js`n  - [ ] Créer js/data/lycee-tle/tle-primitives-integrales.js`n  - [ ] Créer js/data/lycee-tle/tle-equations-differentielles.js`n  - [ ] Créer js/data/lycee-tle/tle-limites-continuite.js`n  - [ ] Créer js/data/lycee-tle/tle-derivation-complements.js`n  - [ ] Créer js/data/lycee-tle/tle-logarithme.js`n  - [ ] Créer js/data/lycee-tle/tle-convexite.js`n  - [ ] Créer js/data/lycee-tle/tle-suites-complements.js`n  - [ ] Créer js/data/lycee-tle/tle-denombrement.js`n  - [ ] Créer js/data/lycee-tle/tle-lois-continues.js`n  - [ ] Créer js/data/lycee-tle/tle-geometrie-espace.js`n  - [ ] Créer js/data/lycee-tle/tle-orthogonalite-espace.js`n  - [ ] Créer js/data/lycee-tle/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/lycee-tle.js et mettre à jour le HTML/Loader

- [ ] **Niveau si-1re (js/data/si-1re.js)**
  - [ ] Créer js/data/si-1re/si-1re-sysml.js`n  - [ ] Créer js/data/si-1re/si-1re-cinematique.js`n  - [ ] Créer js/data/si-1re/si-1re-statique-pfs.js`n  - [ ] Créer js/data/si-1re/si-1re-logique-boole.js`n  - [ ] Créer js/data/si-1re/si-1re-asservissement.js`n  - [ ] Créer js/data/si-1re/si-1re-energie-rendement.js`n  - [ ] Créer js/data/si-1re/si-1re-rdm.js`n  - [ ] Créer js/data/si-1re/si-1re-poo.js`n  - [ ] Créer js/data/si-1re/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/si-1re.js et mettre à jour le HTML/Loader

- [ ] **Niveau si-2nde (js/data/si-2nde.js)**
  - [ ] Créer js/data/si-2nde/si-2nde-analyse-fonctionnelle.js`n  - [ ] Créer js/data/si-2nde/si-2nde-chaines-energie-info.js`n  - [ ] Créer js/data/si-2nde/si-2nde-capteurs-actionneurs.js`n  - [ ] Créer js/data/si-2nde/si-2nde-programmation.js`n  - [ ] Créer js/data/si-2nde/si-2nde-mecanique-base.js`n  - [ ] Créer js/data/si-2nde/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/si-2nde.js et mettre à jour le HTML/Loader

- [ ] **Niveau si-bts (js/data/si-bts.js)**
  - [ ] Créer js/data/si-bts/si-bts-mecanique-solides.js`n  - [ ] Créer js/data/si-bts/si-bts-rdm-avancee.js`n  - [ ] Créer js/data/si-bts/si-bts-hydraulique.js`n  - [ ] Créer js/data/si-bts/si-bts-electrotechnique.js`n  - [ ] Créer js/data/si-bts/si-bts-automatique.js`n  - [ ] Créer js/data/si-bts/si-bts-capteurs-industriels.js`n  - [ ] Créer js/data/si-bts/si-bts-cao.js`n  - [ ] Créer js/data/si-bts/si-bts-gestion-energie.js`n  - [ ] Créer js/data/si-bts/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/si-bts.js et mettre à jour le HTML/Loader

- [ ] **Niveau si-tle (js/data/si-tle.js)**
  - [ ] Créer js/data/si-tle/si-tle-dynamique-pfd.js`n  - [ ] Créer js/data/si-tle/si-tle-energie-cinetique.js`n  - [ ] Créer js/data/si-tle/si-tle-asservis-pid.js`n  - [ ] Créer js/data/si-tle/si-tle-grafcet.js`n  - [ ] Créer js/data/si-tle/si-tle-transmission.js`n  - [ ] Créer js/data/si-tle/si-tle-bode.js`n  - [ ] Créer js/data/si-tle/si-tle-reseaux.js`n  - [ ] Créer js/data/si-tle/index.js (qui importe tous les modules ci-dessus)
  - [ ] Supprimer js/data/si-tle.js et mettre à jour le HTML/Loader

## Phase 2 : Découpage de la Logique Métier (js/engines.js)
- [ ] Extraire js/engines/quizEngine.js
- [ ] Extraire js/engines/exerciceEngine.js
- [ ] Extraire js/engines/problemeEngine.js
- [ ] Extraire js/engines/evaluationEngine.js
- [ ] Supprimer js/engines.js et mettre à jour le chargeur/HTML

## Phase 3 : Découpage de l'Interface (js/render.js)
- [ ] Extraire les vues globales (home, catalog, levels) dans js/views/
- [ ] Extraire les onglets du module dans js/components/ (cours, quiz, exercice, etc.)
- [ ] Extraire les fonctions utilitaires (enderLoading, helpers divers) dans js/utils/ui-helpers.js
- [ ] Supprimer js/render.js et mettre à jour le chargeur/HTML
