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

- [x] **Niveau 5e (js/data/5e.js)**
  - [x] Créer js/data/5e/proportionnalite.js`n  - [x] Créer js/data/5e/reperage-graphique.js`n  - [x] Créer js/data/5e/5e-nombres-relatifs.js`n  - [x] Créer js/data/5e/5e-priorites-operations.js`n  - [x] Créer js/data/5e/5e-fractions-operations.js`n  - [x] Créer js/data/5e/5e-proportionnalite.js`n  - [x] Créer js/data/5e/5e-expressions-litterales.js`n  - [x] Créer js/data/5e/5e-symetrie-centrale.js`n  - [x] Créer js/data/5e/5e-triangles.js`n  - [x] Créer js/data/5e/5e-parallelogrammes.js`n  - [x] Créer js/data/5e/5e-angles-parallelisme.js`n  - [x] Créer js/data/5e/5e-aires-perimetres.js`n  - [x] Créer js/data/5e/5e-volumes.js`n  - [x] Créer js/data/5e/5e-statistiques.js`n  - [x] Créer js/data/5e/5e-probabilites.js`n  - [x] Créer js/data/5e/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/5e.js et mettre à jour le HTML/Loader

- [x] **Niveau 6e (js/data/6e.js)**
  - [x] Créer js/data/6e/6e-fractions.js`n  - [x] Créer js/data/6e/6e-volumes.js`n  - [x] Créer js/data/6e/6e-angles.js`n  - [x] Créer js/data/6e/6e-nombres-decimaux.js`n  - [x] Créer js/data/6e/6e-addition-soustraction.js`n  - [x] Créer js/data/6e/6e-multiplication.js`n  - [x] Créer js/data/6e/6e-division.js`n  - [x] Créer js/data/6e/6e-figures-geometriques.js`n  - [x] Créer js/data/6e/6e-symetrie-axiale.js`n  - [x] Créer js/data/6e/6e-perimetres-aires.js`n  - [x] Créer js/data/6e/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/6e.js et mettre à jour le HTML/Loader

- [x] **Niveau bts (js/data/bts.js)**
  - [x] Créer js/data/bts/complexes.js`n  - [x] Créer js/data/bts/eq-diff-2.js`n  - [x] Créer js/data/bts/statistiques.js`n  - [x] Créer js/data/bts/bts-loi-normale.js`n  - [x] Créer js/data/bts/bts-fonctions-reelles.js`n  - [x] Créer js/data/bts/bts-derivation-appliquee.js`n  - [x] Créer js/data/bts/bts-integrales-appliquees.js`n  - [x] Créer js/data/bts/bts-stats-deux-variables.js`n  - [x] Créer js/data/bts/bts-probas-discretes.js`n  - [x] Créer js/data/bts/bts-suites-appliquees.js`n  - [x] Créer js/data/bts/bts-matrices.js`n  - [x] Créer js/data/bts/bts-fourier.js`n  - [x] Créer js/data/bts/bts-laplace.js`n  - [x] Créer js/data/bts/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/bts.js et mettre à jour le HTML/Loader

- [x] **Niveau lycee-1re (js/data/lycee-1re.js)**
  - [x] Créer js/data/lycee-1re/1re-derivation.js`n  - [x] Créer js/data/lycee-1re/1re-suites.js`n  - [x] Créer js/data/lycee-1re/1re-produit-scalaire.js`n  - [x] Créer js/data/lycee-1re/1re-second-degre.js`n  - [x] Créer js/data/lycee-1re/1re-polynomes-signe.js`n  - [x] Créer js/data/lycee-1re/1re-trigonometrie.js`n  - [x] Créer js/data/lycee-1re/1re-geometrie-reperee.js`n  - [x] Créer js/data/lycee-1re/1re-probas-conditionnelles.js`n  - [x] Créer js/data/lycee-1re/1re-variables-aleatoires.js`n  - [x] Créer js/data/lycee-1re/1re-information-chiffree.js`n  - [x] Créer js/data/lycee-1re/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/lycee-1re.js et mettre à jour le HTML/Loader

- [x] **Niveau lycee-2nde (js/data/lycee-2nde.js)**
  - [x] Créer js/data/lycee-2nde/vecteurs.js`n  - [x] Créer js/data/lycee-2nde/fonctions-affines.js`n  - [x] Créer js/data/lycee-2nde/2nde-ensembles-nombres.js`n  - [x] Créer js/data/lycee-2nde/2nde-calcul-algebrique.js`n  - [x] Créer js/data/lycee-2nde/2nde-equations-inequations.js`n  - [x] Créer js/data/lycee-2nde/2nde-fonctions-generalites.js`n  - [x] Créer js/data/lycee-2nde/2nde-fonctions-reference.js`n  - [x] Créer js/data/lycee-2nde/2nde-reperage-plan.js`n  - [x] Créer js/data/lycee-2nde/2nde-droites-systemes.js`n  - [x] Créer js/data/lycee-2nde/2nde-geometrie-plane.js`n  - [x] Créer js/data/lycee-2nde/2nde-statistiques.js`n  - [x] Créer js/data/lycee-2nde/2nde-probabilites.js`n  - [x] Créer js/data/lycee-2nde/2nde-echantillonnage.js`n  - [x] Créer js/data/lycee-2nde/2nde-algorithmique.js`n  - [x] Créer js/data/lycee-2nde/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/lycee-2nde.js et mettre à jour le HTML/Loader

- [x] **Niveau lycee-tle (js/data/lycee-tle.js)**
  - [x] Créer js/data/lycee-tle/tle-exponentielle-logarithme.js`n  - [x] Créer js/data/lycee-tle/tle-primitives-integrales.js`n  - [x] Créer js/data/lycee-tle/tle-equations-differentielles.js`n  - [x] Créer js/data/lycee-tle/tle-limites-continuite.js`n  - [x] Créer js/data/lycee-tle/tle-derivation-complements.js`n  - [x] Créer js/data/lycee-tle/tle-logarithme.js`n  - [x] Créer js/data/lycee-tle/tle-convexite.js`n  - [x] Créer js/data/lycee-tle/tle-suites-complements.js`n  - [x] Créer js/data/lycee-tle/tle-denombrement.js`n  - [x] Créer js/data/lycee-tle/tle-lois-continues.js`n  - [x] Créer js/data/lycee-tle/tle-geometrie-espace.js`n  - [x] Créer js/data/lycee-tle/tle-orthogonalite-espace.js`n  - [x] Créer js/data/lycee-tle/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/lycee-tle.js et mettre à jour le HTML/Loader

- [x] **Niveau si-1re (js/data/si-1re.js)**
  - [x] Créer js/data/si-1re/si-1re-sysml.js`n  - [x] Créer js/data/si-1re/si-1re-cinematique.js`n  - [x] Créer js/data/si-1re/si-1re-statique-pfs.js`n  - [x] Créer js/data/si-1re/si-1re-logique-boole.js`n  - [x] Créer js/data/si-1re/si-1re-asservissement.js`n  - [x] Créer js/data/si-1re/si-1re-energie-rendement.js`n  - [x] Créer js/data/si-1re/si-1re-rdm.js`n  - [x] Créer js/data/si-1re/si-1re-poo.js`n  - [x] Créer js/data/si-1re/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/si-1re.js et mettre à jour le HTML/Loader

- [x] **Niveau si-2nde (js/data/si-2nde.js)**
  - [x] Créer js/data/si-2nde/si-2nde-analyse-fonctionnelle.js`n  - [x] Créer js/data/si-2nde/si-2nde-chaines-energie-info.js`n  - [x] Créer js/data/si-2nde/si-2nde-capteurs-actionneurs.js`n  - [x] Créer js/data/si-2nde/si-2nde-programmation.js`n  - [x] Créer js/data/si-2nde/si-2nde-mecanique-base.js`n  - [x] Créer js/data/si-2nde/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/si-2nde.js et mettre à jour le HTML/Loader

- [x] **Niveau si-bts (js/data/si-bts.js)**
  - [x] Créer js/data/si-bts/si-bts-mecanique-solides.js`n  - [x] Créer js/data/si-bts/si-bts-rdm-avancee.js`n  - [x] Créer js/data/si-bts/si-bts-hydraulique.js`n  - [x] Créer js/data/si-bts/si-bts-electrotechnique.js`n  - [x] Créer js/data/si-bts/si-bts-automatique.js`n  - [x] Créer js/data/si-bts/si-bts-capteurs-industriels.js`n  - [x] Créer js/data/si-bts/si-bts-cao.js`n  - [x] Créer js/data/si-bts/si-bts-gestion-energie.js`n  - [x] Créer js/data/si-bts/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/si-bts.js et mettre à jour le HTML/Loader

- [x] **Niveau si-tle (js/data/si-tle.js)**
  - [x] Créer js/data/si-tle/si-tle-dynamique-pfd.js`n  - [x] Créer js/data/si-tle/si-tle-energie-cinetique.js`n  - [x] Créer js/data/si-tle/si-tle-asservis-pid.js`n  - [x] Créer js/data/si-tle/si-tle-grafcet.js`n  - [x] Créer js/data/si-tle/si-tle-transmission.js`n  - [x] Créer js/data/si-tle/si-tle-bode.js`n  - [x] Créer js/data/si-tle/si-tle-reseaux.js`n  - [x] Créer js/data/si-tle/index.js (qui importe tous les modules ci-dessus)
  - [x] Supprimer js/data/si-tle.js et mettre à jour le HTML/Loader

## Phase 2 : Découpage de la Logique Métier (js/engines.js)
- [x] Extraire js/engines/quizEngine.js
- [x] Extraire js/engines/exerciceEngine.js
- [x] Extraire js/engines/problemeEngine.js
- [x] Extraire js/engines/evaluationEngine.js
- [x] Supprimer js/engines.js et mettre à jour le chargeur/HTML

## Phase 3 : Découpage de l'Interface (js/render.js)
- [x] Extraire les vues globales (home, catalog, levels) dans js/views/
- [x] Extraire les onglets du module dans js/components/ (cours, quiz, exercice, etc.)
- [x] Extraire les fonctions utilitaires (renderLoading, helpers divers) dans js/utils/ui-helpers.js
- [x] Supprimer js/render.js et mettre à jour le chargeur/HTML

## Phase 4 : Mise en place du module "Spark Companion" (exercices interactifs et rattrapage)
- [ ] Définir le périmètre fonctionnel
  - [ ] Rédiger le cahier des charges court : exercices interactifs + rattrapage des cours en maths, sans IA pour l'instant.
  - [ ] Lister les scénarios d'usage : élève en difficulté, révision ciblée, séance de rattrapage, préparation CCF.
  - [ ] Identifier les points d'entrée UI : onglet de module, menu enseignant, page de parcours.
  - [ ] Prévoir un mode « avancement libre » où l'étudiant avance à son rythme et peut aller au-delà du programme pour préparer son CCF.
- [ ] Étendre l'état global dans `js/state.js`
  - [ ] Ajouter `companionState` avec progression, points, badges, objectifs CCF et historique de rattrapage.
  - [ ] Prévoir la sauvegarde dans `localStorage` et la récupération au démarrage.
- [ ] Implémenter la logique métier dans `js/engines/companionEngine.js`
  - [ ] Créer les fonctions de génération d'exercices dynamiques avec `pick()` pour varier le texte et les valeurs.
  - [ ] Créer les fonctions de validation des réponses et les feedbacks positifs.
  - [ ] Créer la logique de sélection de rattrapage basée sur les lacunes et les modules déjà vus.
  - [ ] Ajouter le support de parcours libre : l'étudiant choisit son niveau, avance hors séquence, et débloque des exercices CCF.
- [ ] Construire l'interface dans `js/components/companion.js` ou `js/render/companionRender.js`
  - [ ] Concevoir un affichage aéré avec `<strong>` et KaTeX pour les formules.
  - [ ] Ajouter une section « Rattrapage » présentant les exercices recommandés et le plan de remise à niveau.
  - [ ] Ajouter un panneau de suivi simple : progression, score, activités à refaire et préparation CCF.
  - [ ] Prévoir une zone « Aller plus loin » pour proposer des exercices supplémentaires en préparation du CCF.
- [ ] Ajouter le routage dans `js/app.js`
  - [ ] Prévoir le hash `#companion/{moduleId}` et la navigation vers le module compagnon.
  - [ ] Ajouter l'accès depuis le module existant (nouveau bouton/onglet « Spark Companion »).
- [ ] Mettre à jour `contenu.md`
  - [ ] Documenter le nouveau module et les fichiers créés.
  - [ ] Décrire le rôle de rattrapage des cours et de préparation CCF dans la nouvelle architecture.
- [ ] Valider au fur et à mesure
  - [ ] Vérifier la création de chaque fichier dans l'éditeur.
  - [ ] Tester l'accès au module dans le navigateur.
  - [ ] Faire un test fonctionnel de rattrapage et de parcours libre sur un module existant.
