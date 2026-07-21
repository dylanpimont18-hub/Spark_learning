var STAIRCASE_STEPS = [4, 2, 1, 1, 1, 1];
var START_PALIER = 5;
var MIN_PALIER = 1;
var MAX_PALIER = 9;
var LEVEL_LABELS = ['6e', '5e', '4e', '3e', '2nde', '1re', 'Tle', 'BTS1', 'BTS2'];

function clampPalier(value) {
  return Math.max(MIN_PALIER, Math.min(MAX_PALIER, value));
}

function applyStep(currentPalier, stepIndex, correct) {
  var step = STAIRCASE_STEPS[stepIndex];
  return clampPalier(currentPalier + (correct ? step : -step));
}

function runStaircase(correctFlags) {
  if (!Array.isArray(correctFlags) || correctFlags.length !== STAIRCASE_STEPS.length) {
    throw new Error('runStaircase attend exactement ' + STAIRCASE_STEPS.length + ' réponses graduées.');
  }
  var palier = START_PALIER;
  for (var i = 0; i < STAIRCASE_STEPS.length; i++) {
    palier = applyStep(palier, i, !!correctFlags[i]);
  }
  return palier;
}

function palierToLabel(palier) {
  return LEVEL_LABELS[clampPalier(palier) - 1];
}

module.exports = {
  STAIRCASE_STEPS: STAIRCASE_STEPS,
  START_PALIER: START_PALIER,
  MIN_PALIER: MIN_PALIER,
  MAX_PALIER: MAX_PALIER,
  LEVEL_LABELS: LEVEL_LABELS,
  applyStep: applyStep,
  runStaircase: runStaircase,
  palierToLabel: palierToLabel
};
