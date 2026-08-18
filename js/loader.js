/* =========================================================
   Spark Learning – loader.js
   Lazy loading des fichiers de données par niveau
   ========================================================= */

const DATA_FILES = {
  'maths-1': [
    'js/data/6e/6e-fractions.js',
    'js/data/6e/6e-volumes.js',
    'js/data/6e/6e-angles.js',
    'js/data/6e/6e-nombres-decimaux.js',
    'js/data/6e/6e-addition-soustraction.js',
    'js/data/6e/6e-multiplication.js',
    'js/data/6e/6e-division.js',
    'js/data/6e/6e-figures-geometriques.js',
    'js/data/6e/6e-symetrie-axiale.js',
    'js/data/6e/6e-perimetres-aires.js',
    'js/data/5e/reperage-graphique.js',
    'js/data/5e/5e-nombres-relatifs.js',
    'js/data/5e/5e-priorites-operations.js',
    'js/data/5e/5e-fractions-operations.js',
    'js/data/5e/5e-proportionnalite.js',
    'js/data/5e/5e-expressions-litterales.js',
    'js/data/5e/5e-symetrie-centrale.js',
    'js/data/5e/5e-triangles.js',
    'js/data/5e/5e-parallelogrammes.js',
    'js/data/5e/5e-angles-parallelisme.js',
    'js/data/5e/5e-aires-perimetres.js',
    'js/data/5e/5e-volumes.js',
    'js/data/5e/5e-statistiques.js',
    'js/data/5e/5e-probabilites.js',
    'js/data/4e/puissances.js',
    'js/data/4e/calcul-algebrique.js',
    'js/data/4e/4e-pythagore.js',
    'js/data/4e/4e-fractions-mult-div.js',
    'js/data/4e/4e-relatifs-mult-div.js',
    'js/data/4e/4e-triangle-rectangle-cercle.js',
    'js/data/4e/4e-translations.js',
    'js/data/4e/4e-droites-remarquables.js',
    'js/data/4e/4e-cosinus.js',
    'js/data/4e/4e-volumes.js',
    'js/data/4e/4e-statistiques.js',
    'js/data/4e/4e-probabilites.js',
    'js/data/3e/trigonometrie.js',
    'js/data/3e/3e-systemes.js',
    'js/data/3e/3e-thales.js',
    'js/data/3e/3e-arithmetique.js',
    'js/data/3e/3e-identites-remarquables.js',
    'js/data/3e/3e-equations-inequations.js',
    'js/data/3e/3e-fonctions.js',
    'js/data/3e/3e-homotheties.js',
    'js/data/3e/3e-sections-solides.js',
    'js/data/3e/3e-volumes.js',
    'js/data/3e/3e-stats-probas.js',
    'js/data/3e/3e-algorithmique.js'
  ],
  'maths-2': [
    'js/data/lycee-2nde/vecteurs.js',
    'js/data/lycee-2nde/fonctions-affines.js',
    'js/data/lycee-2nde/2nde-ensembles-nombres.js',
    'js/data/lycee-2nde/2nde-calcul-algebrique.js',
    'js/data/lycee-2nde/2nde-equations-inequations.js',
    'js/data/lycee-2nde/2nde-fonctions-generalites.js',
    'js/data/lycee-2nde/2nde-fonctions-reference.js',
    'js/data/lycee-2nde/2nde-reperage-plan.js',
    'js/data/lycee-2nde/2nde-droites-systemes.js',
    'js/data/lycee-2nde/2nde-geometrie-plane.js',
    'js/data/lycee-2nde/2nde-statistiques.js',
    'js/data/lycee-2nde/2nde-probabilites.js',
    'js/data/lycee-2nde/2nde-echantillonnage.js',
    'js/data/lycee-2nde/2nde-algorithmique.js',
    'js/data/lycee-1re/1re-derivation.js',
    'js/data/lycee-1re/1re-suites.js',
    'js/data/lycee-1re/1re-produit-scalaire.js',
    'js/data/lycee-1re/1re-second-degre.js',
    'js/data/lycee-1re/1re-polynomes-signe.js',
    'js/data/lycee-1re/1re-trigonometrie.js',
    'js/data/lycee-1re/1re-geometrie-reperee.js',
    'js/data/lycee-1re/1re-probas-conditionnelles.js',
    'js/data/lycee-1re/1re-variables-aleatoires.js',
    'js/data/lycee-1re/1re-information-chiffree.js',
    'js/data/lycee-tle/tle-exponentielle-logarithme.js',
    'js/data/lycee-tle/tle-primitives-integrales.js',
    'js/data/lycee-tle/tle-equations-differentielles.js',
    'js/data/lycee-tle/tle-limites-continuite.js',
    'js/data/lycee-tle/tle-derivation-complements.js',
    'js/data/lycee-tle/tle-logarithme.js',
    'js/data/lycee-tle/tle-convexite.js',
    'js/data/lycee-tle/tle-suites-complements.js',
    'js/data/lycee-tle/tle-denombrement.js',
    'js/data/lycee-tle/tle-lois-continues.js',
    'js/data/lycee-tle/tle-geometrie-espace.js',
    'js/data/lycee-tle/tle-orthogonalite-espace.js'
  ],
  'maths-3': [
    // Remise à niveau BTS — Prérequis (chargés en premier)
    'js/data/bts-prep/bts-prep-calcul-litteral.js',
    'js/data/bts-prep/bts-prep-equations.js',
    'js/data/bts-prep/bts-prep-proportionnalite.js',
    'js/data/bts-prep/bts-prep-puissances.js',
    'js/data/bts-prep/bts-prep-fonctions.js',
    'js/data/bts-prep/bts-prep-trigonometrie.js',
    'js/data/bts-prep/bts-prep-logarithme.js',
    'js/data/bts-prep/bts-prep-vecteurs.js',
    'js/data/bts-prep/bts-prep-si-unites.js',
    'js/data/bts-prep/bts-prep-analyse-dim.js',
    'js/data/bts-prep/bts-prep-conversions.js',
    'js/data/bts-prep/bts-prep-equations-transf.js',
    'js/data/bts-prep/bts-prep-graphiques.js',
    'js/data/bts-prep/bts-prep-donnees-techniques.js',
    // Modules BTS Maths avancés
    'js/data/bts/complexes.js',
    'js/data/bts/eq-diff-2.js',
    'js/data/bts/statistiques.js',
    'js/data/bts/bts-loi-normale.js',
    'js/data/bts/bts-fonctions-reelles.js',
    'js/data/bts/bts-derivation-appliquee.js',
    'js/data/bts/bts-integrales-appliquees.js',
    'js/data/bts/bts-stats-deux-variables.js',
    'js/data/bts/bts-probas-discretes.js',
    'js/data/bts/bts-suites-appliquees.js',
    'js/data/bts/bts-matrices.js',
    'js/data/bts/bts-fourier.js',
    'js/data/bts/bts-laplace.js'
  ],
  'si-2': [
    'js/data/si-2nde/si-2nde-analyse-fonctionnelle.js',
    'js/data/si-2nde/si-2nde-chaines-energie-info.js',
    'js/data/si-2nde/si-2nde-capteurs-actionneurs.js',
    'js/data/si-2nde/si-2nde-programmation.js',
    'js/data/si-2nde/si-2nde-mecanique-base.js',
    'js/data/si-1re/si-1re-sysml.js',
    'js/data/si-1re/si-1re-cinematique.js',
    'js/data/si-1re/si-1re-statique-pfs.js',
    'js/data/si-1re/si-1re-logique-boole.js',
    'js/data/si-1re/si-1re-asservissement.js',
    'js/data/si-1re/si-1re-energie-rendement.js',
    'js/data/si-1re/si-1re-rdm.js',
    'js/data/si-1re/si-1re-poo.js',
    'js/data/si-tle/si-tle-dynamique-pfd.js',
    'js/data/si-tle/si-tle-energie-cinetique.js',
    'js/data/si-tle/si-tle-asservis-pid.js',
    'js/data/si-tle/si-tle-grafcet.js',
    'js/data/si-tle/si-tle-transmission.js',
    'js/data/si-tle/si-tle-bode.js',
    'js/data/si-tle/si-tle-reseaux.js'
  ],
  'si-3': [
    'js/data/si-bts/si-bts-mecanique-solides.js',
    'js/data/si-bts/si-bts-rdm-avancee.js',
    'js/data/si-bts/si-bts-hydraulique.js',
    'js/data/si-bts/si-bts-electrotechnique.js',
    'js/data/si-bts/si-bts-automatique.js',
    'js/data/si-bts/si-bts-capteurs-industriels.js',
    'js/data/si-bts/si-bts-cao.js',
    'js/data/si-bts/si-bts-gestion-energie.js'
  ],
  'physique-3': [
    'js/data/physique-bts/physique-bts-mecanique-point.js',
    'js/data/physique-bts/physique-bts-statique-fluides.js',
    'js/data/physique-bts/physique-bts-dynamique-fluides.js',
    'js/data/physique-bts/physique-bts-thermodynamique.js',
    'js/data/physique-bts/physique-bts-circuits-continu.js',
    'js/data/physique-bts/physique-bts-regime-sinusoidal.js',
    'js/data/physique-bts/physique-bts-optique.js',
    'js/data/physique-bts/physique-bts-chimie-solutions.js',
    'js/data/physique-bts/physique-bts-cinetique.js',
    'js/data/physique-bts/physique-bts-electromagnetisme.js'
  ],
  'physique-1': [
    'js/data/physique-4e/physique-4e-atomes-molecules.js',
    'js/data/physique-4e/physique-4e-transformations-chimiques.js',
    'js/data/physique-4e/physique-4e-vitesse.js',
    'js/data/physique-4e/physique-4e-intensite-tension.js',
    'js/data/physique-4e/physique-4e-lois-circuits.js',
    'js/data/physique-4e/physique-4e-lumiere.js',
    'js/data/physique-3e/physique-3e-structure-atome.js',
    'js/data/physique-3e/physique-3e-reactions-chimiques.js',
    'js/data/physique-3e/physique-3e-energie.js',
    'js/data/physique-3e/physique-3e-resistance-ohm.js',
    'js/data/physique-3e/physique-3e-puissance-electrique.js',
    'js/data/physique-3e/physique-3e-gravitation.js'
  ],
  'physique-2': [
    'js/data/physique-2nde/physique-2nde-mouvement.js',
    'js/data/physique-2nde/physique-2nde-forces.js',
    'js/data/physique-2nde/physique-2nde-inertie.js',
    'js/data/physique-2nde/physique-2nde-corps-purs.js',
    'js/data/physique-2nde/physique-2nde-solutions.js',
    'js/data/physique-2nde/physique-2nde-transformations.js',
    'js/data/physique-2nde/physique-2nde-modele-atome.js',
    'js/data/physique-2nde/physique-2nde-signaux.js',
    'js/data/physique-2nde/physique-2nde-son.js',
    'js/data/physique-2nde/physique-2nde-lumiere.js',
    'js/data/physique-1re/physique-1re-champ-gravitationnel.js',
    'js/data/physique-1re/physique-1re-champ-electrique.js',
    'js/data/physique-1re/physique-1re-cinematique.js',
    'js/data/physique-1re/physique-1re-newton.js',
    'js/data/physique-1re/physique-1re-travail-energie.js',
    'js/data/physique-1re/physique-1re-reaction-avancement.js',
    'js/data/physique-1re/physique-1re-titrage.js',
    'js/data/physique-1re/physique-1re-lewis.js',
    'js/data/physique-1re/physique-1re-ondes-mecaniques.js',
    'js/data/physique-1re/physique-1re-lumiere-ondes.js',
    'js/data/physique-1re/physique-1re-kirchhoff.js',
    'js/data/physique-tle/physique-tle-mouvement-champ.js',
    'js/data/physique-tle/physique-tle-satellites.js',
    'js/data/physique-tle/physique-tle-dynamique.js',
    'js/data/physique-tle/physique-tle-energie-mecanique.js',
    'js/data/physique-tle/physique-tle-thermodynamique.js',
    'js/data/physique-tle/physique-tle-evolution-chimique.js',
    'js/data/physique-tle/physique-tle-acides-bases.js',
    'js/data/physique-tle/physique-tle-oxydoreduction.js',
    'js/data/physique-tle/physique-tle-ondes-signaux.js',
    'js/data/physique-tle/physique-tle-quantique.js',
    'js/data/physique-tle/physique-tle-radioactivite.js'
  ],
  'fed-3': [
    'js/data/fed-bts/fed-bts-a1-1-thermique-tubes.js',
    'js/data/fed-bts/fed-bts-a1-2-hygrothermie.js',
    'js/data/fed-bts/fed-bts-a2-1-genie-civil.js',
    'js/data/fed-bts/fed-bts-a2-2-std.js',
    'js/data/fed-bts/fed-bts-a2-3-bilan-thermique.js',
    'js/data/fed-bts/fed-bts-a2-4-dju.js',
    'js/data/fed-bts/fed-bts-a3-dynamique-fluides.js',
    'js/data/fed-bts/fed-bts-a4-traitement-air.js',
    'js/data/fed-bts/fed-bts-a5-thermodynamique-appliquee.js',
    'js/data/fed-bts/fed-bts-a7-acoustique.js',
    'js/data/fed-bts/fed-bts-a8-combustion.js',
    'js/data/fed-bts/fed-bts-b1-1-production-chauffage.js',
    'js/data/fed-bts/fed-bts-b1-2-emission-chauffage.js',
    'js/data/fed-bts/fed-bts-b2-1-ventilation.js',
    'js/data/fed-bts/fed-bts-b2-2-climatisation.js',
    'js/data/fed-bts/fed-bts-b2-3-desenfumage.js',
    'js/data/fed-bts/fed-bts-b3-1-alimentation-efs.js',
    'js/data/fed-bts/fed-bts-b3-2-production-ecs.js',
    'js/data/fed-bts/fed-bts-b3-3-traitement-eau-sanitaire.js',
    'js/data/fed-bts/fed-bts-b3-4-eaux-usees.js',
    'js/data/fed-bts/fed-bts-b4-1-reseaux-hydrauliques.js',
    'js/data/fed-bts/fed-bts-b4-2-reseaux-aerauliques.js',
    'js/data/fed-bts/fed-bts-b5-1-compresseurs-volumetriques.js',
    'js/data/fed-bts/fed-bts-b5-2-compresseurs-centrifuges.js',
    'js/data/fed-bts/fed-bts-b5-3-evaporateurs.js',
    'js/data/fed-bts/fed-bts-b5-4-detendeurs.js',
    'js/data/fed-bts/fed-bts-b5-5-rejet-chaleur.js',
    'js/data/fed-bts/fed-bts-b5-6-composants-annexes-froid.js',
    'js/data/fed-bts/fed-bts-b5-7-organes-regulation-frigorifique.js',
    'js/data/fed-bts/fed-bts-b5-8-retour-huile.js',
    'js/data/fed-bts/fed-bts-b5-9-securite-froid.js',
    'js/data/fed-bts/fed-bts-b5-10-tuyauteries-froid.js',
    'js/data/fed-bts/fed-bts-b5-11-recuperation-energie-froid.js',
    'js/data/fed-bts/fed-bts-b5-12-systemes-frigorifiques-avances.js',
    'js/data/fed-bts/fed-bts-b5-13-stockage-froid.js',
    'js/data/fed-bts/fed-bts-b6-1-photovoltaique.js',
    'js/data/fed-bts/fed-bts-b6-2-eolien.js',
    'js/data/fed-bts/fed-bts-b6-3-cogeneration.js',
    'js/data/fed-bts/fed-bts-b6-4-pile-combustible.js',
    'js/data/fed-bts/fed-bts-b7-eclairage.js',
    'js/data/fed-bts/fed-bts-b8-1-architecture-systemes-centralises.js',
    'js/data/fed-bts/fed-bts-b8-2-domaines-applications-gtb.js',
    'js/data/fed-bts/fed-bts-b9-comptage-energies.js',
    'js/data/fed-bts/fed-bts-b10-stockage-energie.js',
    'js/data/fed-bts/fed-bts-b11-regulation.js',
    'js/data/fed-bts/fed-bts-c1-1-distribution-bt.js',
    'js/data/fed-bts/fed-bts-c2-1-moteurs-electriques.js',
    'js/data/fed-bts/fed-bts-c2-2-variation-vitesse.js',
    'js/data/fed-bts/fed-bts-c3-gestion-energie-electrique.js',
    'js/data/fed-bts/fed-bts-d1-1-medias-communication.js',
    'js/data/fed-bts/fed-bts-d1-2-standards-communication.js',
    'js/data/fed-bts/fed-bts-d2-1-reseaux-informatiques.js',
    'js/data/fed-bts/fed-bts-d2-2-vdi.js',
    'js/data/fed-bts/fed-bts-d2-3-telephonie.js'
  ]
};

/* Static index: moduleId → data group key (for direct URL access) */
const MODULE_INDEX = {
  // 6e
  '6e-fractions':'maths-1','6e-volumes':'maths-1','6e-angles':'maths-1','6e-nombres-decimaux':'maths-1',
  '6e-addition-soustraction':'maths-1','6e-multiplication':'maths-1','6e-division':'maths-1',
  '6e-figures-geometriques':'maths-1','6e-symetrie-axiale':'maths-1','6e-perimetres-aires':'maths-1',
  // 5e
  'reperage-graphique':'maths-1','5e-nombres-relatifs':'maths-1',
  '5e-priorites-operations':'maths-1','5e-fractions-operations':'maths-1','5e-proportionnalite':'maths-1',
  '5e-expressions-litterales':'maths-1','5e-symetrie-centrale':'maths-1','5e-triangles':'maths-1',
  '5e-parallelogrammes':'maths-1','5e-angles-parallelisme':'maths-1','5e-aires-perimetres':'maths-1',
  '5e-volumes':'maths-1','5e-statistiques':'maths-1','5e-probabilites':'maths-1',
  // 4e
  'puissances':'maths-1','calcul-algebrique':'maths-1','4e-pythagore':'maths-1',
  '4e-fractions-mult-div':'maths-1','4e-relatifs-mult-div':'maths-1','4e-triangle-rectangle-cercle':'maths-1',
  '4e-translations':'maths-1','4e-droites-remarquables':'maths-1','4e-cosinus':'maths-1',
  '4e-volumes':'maths-1','4e-statistiques':'maths-1','4e-probabilites':'maths-1',
  // 3e
  'trigonometrie':'maths-1','3e-systemes':'maths-1','3e-thales':'maths-1','3e-arithmetique':'maths-1',
  '3e-identites-remarquables':'maths-1','3e-equations-inequations':'maths-1','3e-fonctions':'maths-1',
  '3e-homotheties':'maths-1','3e-sections-solides':'maths-1','3e-volumes':'maths-1',
  '3e-stats-probas':'maths-1','3e-algorithmique':'maths-1',
  // 2nde
  'vecteurs':'maths-2','fonctions-affines':'maths-2','2nde-ensembles-nombres':'maths-2',
  '2nde-calcul-algebrique':'maths-2','2nde-equations-inequations':'maths-2','2nde-fonctions-generalites':'maths-2',
  '2nde-fonctions-reference':'maths-2','2nde-reperage-plan':'maths-2','2nde-droites-systemes':'maths-2',
  '2nde-geometrie-plane':'maths-2','2nde-statistiques':'maths-2','2nde-probabilites':'maths-2',
  '2nde-echantillonnage':'maths-2','2nde-algorithmique':'maths-2',
  // 1re
  '1re-derivation':'maths-2','1re-suites':'maths-2','1re-produit-scalaire':'maths-2',
  '1re-second-degre':'maths-2','1re-polynomes-signe':'maths-2','1re-trigonometrie':'maths-2',
  '1re-geometrie-reperee':'maths-2','1re-probas-conditionnelles':'maths-2',
  '1re-variables-aleatoires':'maths-2','1re-information-chiffree':'maths-2',
  // Tle
  'tle-exponentielle-logarithme':'maths-2','tle-primitives-integrales':'maths-2','tle-equations-differentielles':'maths-2','tle-limites-continuite':'maths-2',
  'tle-derivation-complements':'maths-2','tle-logarithme':'maths-2','tle-convexite':'maths-2',
  'tle-suites-complements':'maths-2','tle-denombrement':'maths-2','tle-lois-continues':'maths-2',
  'tle-geometrie-espace':'maths-2','tle-orthogonalite-espace':'maths-2',
  // BTS Prérequis
  'bts-prep-calcul-litteral':'maths-3','bts-prep-equations':'maths-3','bts-prep-proportionnalite':'maths-3',
  'bts-prep-puissances':'maths-3','bts-prep-fonctions':'maths-3','bts-prep-trigonometrie':'maths-3',
  'bts-prep-logarithme':'maths-3','bts-prep-vecteurs':'maths-3','bts-prep-si-unites':'maths-3',
  'bts-prep-analyse-dim':'maths-3','bts-prep-conversions':'maths-3','bts-prep-equations-transf':'maths-3',
  'bts-prep-graphiques':'maths-3','bts-prep-donnees-techniques':'maths-3',
  // BTS
  'complexes':'maths-3','eq-diff-2':'maths-3','statistiques':'maths-3','bts-loi-normale':'maths-3',
  'bts-fonctions-reelles':'maths-3','bts-derivation-appliquee':'maths-3','bts-integrales-appliquees':'maths-3',
  'bts-stats-deux-variables':'maths-3','bts-probas-discretes':'maths-3','bts-suites-appliquees':'maths-3',
  'bts-matrices':'maths-3','bts-fourier':'maths-3','bts-laplace':'maths-3',
  // SI 2nde
  'si-2nde-analyse-fonctionnelle':'si-2','si-2nde-chaines-energie-info':'si-2',
  'si-2nde-capteurs-actionneurs':'si-2','si-2nde-programmation':'si-2',
  'si-2nde-mecanique-base':'si-2',
  // SI 1re
  'si-1re-sysml':'si-2','si-1re-cinematique':'si-2','si-1re-statique-pfs':'si-2',
  'si-1re-logique-boole':'si-2','si-1re-asservissement':'si-2','si-1re-energie-rendement':'si-2',
  'si-1re-rdm':'si-2','si-1re-poo':'si-2',
  // SI Tle
  'si-tle-dynamique-pfd':'si-2','si-tle-energie-cinetique':'si-2','si-tle-asservis-pid':'si-2',
  'si-tle-grafcet':'si-2','si-tle-transmission':'si-2','si-tle-bode':'si-2',
  'si-tle-reseaux':'si-2',
  // SI BTS
  'si-bts-mecanique-solides':'si-3','si-bts-rdm-avancee':'si-3','si-bts-hydraulique':'si-3',
  'si-bts-electrotechnique':'si-3','si-bts-automatique':'si-3','si-bts-capteurs-industriels':'si-3',
  'si-bts-cao':'si-3','si-bts-gestion-energie':'si-3',
  // Physique-Chimie BTS
  'physique-bts-mecanique-point':'physique-3','physique-bts-statique-fluides':'physique-3',
  'physique-bts-dynamique-fluides':'physique-3','physique-bts-thermodynamique':'physique-3',
  'physique-bts-circuits-continu':'physique-3','physique-bts-regime-sinusoidal':'physique-3',
  'physique-bts-optique':'physique-3','physique-bts-chimie-solutions':'physique-3',
  'physique-bts-cinetique':'physique-3','physique-bts-electromagnetisme':'physique-3',
  // Physique-Chimie 4e/3e (collège)
  'physique-4e-atomes-molecules':'physique-1','physique-4e-transformations-chimiques':'physique-1',
  'physique-4e-vitesse':'physique-1','physique-4e-intensite-tension':'physique-1',
  'physique-4e-lois-circuits':'physique-1','physique-4e-lumiere':'physique-1',
  'physique-3e-structure-atome':'physique-1','physique-3e-reactions-chimiques':'physique-1',
  'physique-3e-energie':'physique-1','physique-3e-resistance-ohm':'physique-1',
  'physique-3e-puissance-electrique':'physique-1','physique-3e-gravitation':'physique-1',
  // Physique-Chimie 2nde/1re/Tle (lycée)
  'physique-2nde-mouvement':'physique-2','physique-2nde-forces':'physique-2',
  'physique-2nde-inertie':'physique-2','physique-2nde-corps-purs':'physique-2',
  'physique-2nde-solutions':'physique-2','physique-2nde-transformations':'physique-2',
  'physique-2nde-modele-atome':'physique-2','physique-2nde-signaux':'physique-2',
  'physique-2nde-son':'physique-2','physique-2nde-lumiere':'physique-2',
  'physique-1re-champ-gravitationnel':'physique-2','physique-1re-champ-electrique':'physique-2',
  'physique-1re-cinematique':'physique-2','physique-1re-newton':'physique-2',
  'physique-1re-travail-energie':'physique-2','physique-1re-reaction-avancement':'physique-2',
  'physique-1re-titrage':'physique-2','physique-1re-lewis':'physique-2',
  'physique-1re-ondes-mecaniques':'physique-2','physique-1re-lumiere-ondes':'physique-2',
  'physique-1re-kirchhoff':'physique-2',
  'physique-tle-mouvement-champ':'physique-2','physique-tle-satellites':'physique-2',
  'physique-tle-dynamique':'physique-2','physique-tle-energie-mecanique':'physique-2',
  'physique-tle-thermodynamique':'physique-2','physique-tle-evolution-chimique':'physique-2',
  'physique-tle-acides-bases':'physique-2','physique-tle-oxydoreduction':'physique-2',
  'physique-tle-ondes-signaux':'physique-2','physique-tle-quantique':'physique-2',
  'physique-tle-radioactivite':'physique-2',

  // BTS FED
  'fed-bts-a1-1-thermique-tubes':'fed-3','fed-bts-a1-2-hygrothermie':'fed-3','fed-bts-a2-1-genie-civil':'fed-3',
  'fed-bts-a2-2-std':'fed-3','fed-bts-a2-3-bilan-thermique':'fed-3','fed-bts-a2-4-dju':'fed-3',
  'fed-bts-a3-dynamique-fluides':'fed-3','fed-bts-a4-traitement-air':'fed-3',
  'fed-bts-a5-thermodynamique-appliquee':'fed-3','fed-bts-a7-acoustique':'fed-3','fed-bts-a8-combustion':'fed-3',
  'fed-bts-b1-1-production-chauffage':'fed-3','fed-bts-b1-2-emission-chauffage':'fed-3',
  'fed-bts-b2-1-ventilation':'fed-3','fed-bts-b2-2-climatisation':'fed-3','fed-bts-b2-3-desenfumage':'fed-3',
  'fed-bts-b3-1-alimentation-efs':'fed-3','fed-bts-b3-2-production-ecs':'fed-3',
  'fed-bts-b3-3-traitement-eau-sanitaire':'fed-3','fed-bts-b3-4-eaux-usees':'fed-3',
  'fed-bts-b4-1-reseaux-hydrauliques':'fed-3','fed-bts-b4-2-reseaux-aerauliques':'fed-3',
  'fed-bts-b5-1-compresseurs-volumetriques':'fed-3','fed-bts-b5-2-compresseurs-centrifuges':'fed-3',
  'fed-bts-b5-3-evaporateurs':'fed-3','fed-bts-b5-4-detendeurs':'fed-3','fed-bts-b5-5-rejet-chaleur':'fed-3',
  'fed-bts-b5-6-composants-annexes-froid':'fed-3','fed-bts-b5-7-organes-regulation-frigorifique':'fed-3',
  'fed-bts-b5-8-retour-huile':'fed-3','fed-bts-b5-9-securite-froid':'fed-3','fed-bts-b5-10-tuyauteries-froid':'fed-3',
  'fed-bts-b5-11-recuperation-energie-froid':'fed-3','fed-bts-b5-12-systemes-frigorifiques-avances':'fed-3',
  'fed-bts-b5-13-stockage-froid':'fed-3',
  'fed-bts-b6-1-photovoltaique':'fed-3','fed-bts-b6-2-eolien':'fed-3','fed-bts-b6-3-cogeneration':'fed-3',
  'fed-bts-b6-4-pile-combustible':'fed-3','fed-bts-b7-eclairage':'fed-3',
  'fed-bts-b8-1-architecture-systemes-centralises':'fed-3','fed-bts-b8-2-domaines-applications-gtb':'fed-3',
  'fed-bts-b9-comptage-energies':'fed-3','fed-bts-b10-stockage-energie':'fed-3',
  'fed-bts-b11-regulation':'fed-3','fed-bts-c1-1-distribution-bt':'fed-3',
  'fed-bts-c2-1-moteurs-electriques':'fed-3','fed-bts-c2-2-variation-vitesse':'fed-3',
  'fed-bts-c3-gestion-energie-electrique':'fed-3','fed-bts-d1-1-medias-communication':'fed-3',
  'fed-bts-d1-2-standards-communication':'fed-3','fed-bts-d2-1-reseaux-informatiques':'fed-3',
  'fed-bts-d2-2-vdi':'fed-3','fed-bts-d2-3-telephonie':'fed-3'
};

const _loadedGroups = new Set();
const _loadingPromises = {};

function _loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('Failed to load ' + src));
    document.head.appendChild(s);
  });
}

/**
 * Ensure data for a given subject+level is loaded.
 * Returns a Promise that resolves when all required scripts are ready.
 */
function ensureLevelData(subject, level) {
  const key = subject + '-' + level;
  if (_loadedGroups.has(key)) return Promise.resolve();
  if (_loadingPromises[key]) return _loadingPromises[key];

  const files = DATA_FILES[key];
  if (!files || files.length === 0) return Promise.resolve();

  _loadingPromises[key] = Promise.all(files.map(f => _loadScript(f)))
    .then(() => {
      _loadedGroups.add(key);
      delete _loadingPromises[key];
    })
    .catch(err => {
      delete _loadingPromises[key];
      console.error('Loader error:', err);
      throw err;
    });

  return _loadingPromises[key];
}

/**
 * Ensure data for a specific module is loaded (for direct URL access).
 */
function ensureModuleData(moduleId) {
  const groupKey = MODULE_INDEX[moduleId];
  if (!groupKey) return Promise.resolve(); // unknown module, no-op
  const parts = groupKey.split('-');
  return ensureLevelData(parts[0], parseInt(parts[1]));
}

/**
 * Load ALL data (used for home page stats, search across levels, etc.)
 */
function ensureAllData() {
  return Promise.all(
    Object.keys(DATA_FILES).map(key => {
      const parts = key.split('-');
      return ensureLevelData(parts[0], parseInt(parts[1]));
    })
  );
}
