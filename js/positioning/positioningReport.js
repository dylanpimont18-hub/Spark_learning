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
