/* =========================================================
   Spark Learning – positioningReport.js
   Comparaison niveau déclaré / niveaux estimés par thème
   ========================================================= */

var POSITIONING_LEVEL_LABELS = ['6e', '5e', '4e', '3e', '2nde', '1re', 'Tle', 'BTS1', 'BTS2'];

function positioningNormalizeLevel(raw) {
  var s = String(raw || '').trim().toLowerCase().replace(/\s+/g, '');
  var idx = POSITIONING_LEVEL_LABELS.findIndex(function(l) { return l.toLowerCase() === s; });
  return idx === -1 ? null : idx + 1;
}

function positioningBuildRecommendation(declaredLevel, themeResults) {
  var declaredPalier = positioningNormalizeLevel(declaredLevel);
  if (declaredPalier === null) {
    return 'Compare le niveau estimé par thème ci-dessous à la classe réellement suivie par l\'élève pour juger de l\'écart.';
  }

  var behindLabels = Object.keys(themeResults || {}).filter(function(themeId) {
    var themePalier = positioningNormalizeLevel(themeResults[themeId].level);
    return themePalier !== null && themePalier <= declaredPalier - 2;
  }).map(function(themeId) { return themeResults[themeId].label || themeId; });

  if (behindLabels.length > 0) {
    return 'Lacunes probables sur ' + behindLabels.join(', ') + ' — envisager une remise à niveau avant d\'attaquer le programme de l\'année.';
  }
  return 'Pas de lacune bloquante détectée par rapport à la classe déclarée — peut suivre directement le programme de la classe.';
}

// Thèmes du test de positionnement (functions/src/positioningBank/maths/index.js) vers les
// modules "Prérequis BTS" (js/data/bts-prep/, tag: 'prep') qui couvrent ce thème. La banque
// Physique-Chimie n'est pas mappée : aucun module `bts-prep` (ni public) ne couvre encore ces
// thèmes — voir le sujet `physique` vide dans js/state.js/js/loader.js.
var POSITIONING_THEME_TO_BTS_PREP = {
  'numerique-calcul': ['bts-prep-calcul-litteral', 'bts-prep-puissances', 'bts-prep-proportionnalite'],
  'algebre-equations': ['bts-prep-equations', 'bts-prep-equations-transf'],
  'geometrie': ['bts-prep-vecteurs', 'bts-prep-trigonometrie'],
  'fonctions': ['bts-prep-fonctions', 'bts-prep-graphiques', 'bts-prep-logarithme'],
};

// Titres affichés en secours si le module `bts-prep` correspondant n'est pas encore chargé
// dans `window.MODULES` (chargement paresseux par matière/niveau via js/loader.js).
var POSITIONING_BTS_PREP_TITLES = {
  'bts-prep-calcul-litteral': 'Calcul Littéral & Isolation de l\'Inconnue',
  'bts-prep-puissances': 'Puissances de 10 & Notation Scientifique',
  'bts-prep-proportionnalite': 'Proportionnalité & Pourcentages',
  'bts-prep-equations': 'Équations & Systèmes',
  'bts-prep-equations-transf': 'Équations à Transformations',
  'bts-prep-vecteurs': 'Vecteurs & Géométrie',
  'bts-prep-trigonometrie': 'Trigonométrie',
  'bts-prep-fonctions': 'Fonctions & Lecture Graphique',
  'bts-prep-graphiques': 'Lecture et Exploitation de Graphiques',
  'bts-prep-logarithme': 'Logarithmes & Exponentielles',
};

// Retourne les modules `bts-prep` à recommander pour les thèmes où l'élève est ≥2 paliers
// en dessous de sa classe déclarée — même critère que positioningBuildRecommendation().
function positioningRecommendedModules(declaredLevel, themeResults) {
  var declaredPalier = positioningNormalizeLevel(declaredLevel);
  if (declaredPalier === null) return [];

  var modules = [];
  Object.keys(themeResults || {}).forEach(function(themeId) {
    var themePalier = positioningNormalizeLevel(themeResults[themeId].level);
    if (themePalier === null || themePalier > declaredPalier - 2) return;
    (POSITIONING_THEME_TO_BTS_PREP[themeId] || []).forEach(function(moduleId) {
      if (modules.some(function(m) { return m.id === moduleId; })) return;
      var mod = (typeof getModule === 'function') ? getModule(moduleId) : null;
      modules.push({
        id: moduleId,
        title: (mod && mod.title) || POSITIONING_BTS_PREP_TITLES[moduleId] || moduleId,
      });
    });
  });
  return modules;
}
