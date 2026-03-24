/* =========================================================
   Spark Learning – loader.js
   Lazy loading des fichiers de données par niveau
   ========================================================= */

const DATA_FILES = {
  'maths-1': ['js/data/6e.js', 'js/data/5e.js', 'js/data/4e.js', 'js/data/3e.js'],
  'maths-2': ['js/data/lycee-2nde.js', 'js/data/lycee-1re.js', 'js/data/lycee-tle.js'],
  'maths-3': ['js/data/bts.js']
  // Future: 'physique-1': [...], 'si-2': [...], etc.
};

/* Static index: moduleId → data group key (for direct URL access) */
const MODULE_INDEX = {
  // 6e
  '6e-fractions':'maths-1','6e-volumes':'maths-1','6e-angles':'maths-1','6e-nombres-decimaux':'maths-1',
  '6e-addition-soustraction':'maths-1','6e-multiplication':'maths-1','6e-division':'maths-1',
  '6e-figures-geometriques':'maths-1','6e-symetrie-axiale':'maths-1','6e-perimetres-aires':'maths-1',
  // 5e
  'proportionnalite':'maths-1','reperage-graphique':'maths-1','5e-nombres-relatifs':'maths-1',
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
  'derivation':'maths-2','1re-suites':'maths-2','1re-produit-scalaire':'maths-2',
  '1re-second-degre':'maths-2','1re-polynomes-signe':'maths-2','1re-trigonometrie':'maths-2',
  '1re-geometrie-reperee':'maths-2','1re-probas-conditionnelles':'maths-2',
  '1re-variables-aleatoires':'maths-2','1re-information-chiffree':'maths-2',
  // Tle
  'exp-log':'maths-2','integration':'maths-2','eq-diff-1':'maths-2','tle-limites-continuite':'maths-2',
  'tle-derivation-complements':'maths-2','tle-logarithme':'maths-2','tle-convexite':'maths-2',
  'tle-suites-complements':'maths-2','tle-denombrement':'maths-2','tle-lois-continues':'maths-2',
  'tle-geometrie-espace':'maths-2','tle-orthogonalite-espace':'maths-2',
  // BTS
  'complexes':'maths-3','eq-diff-2':'maths-3','statistiques':'maths-3','bts-loi-normale':'maths-3',
  'bts-fonctions-reelles':'maths-3','bts-derivation-appliquee':'maths-3','bts-integrales-appliquees':'maths-3',
  'bts-stats-deux-variables':'maths-3','bts-probas-discretes':'maths-3','bts-suites-appliquees':'maths-3',
  'bts-matrices':'maths-3','bts-fourier':'maths-3','bts-laplace':'maths-3'
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
