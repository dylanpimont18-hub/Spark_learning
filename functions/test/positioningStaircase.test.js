const test = require('node:test');
const assert = require('node:assert/strict');
const {
  STAIRCASE_STEPS, START_PALIER, MIN_PALIER, MAX_PALIER, LEVEL_LABELS,
  applyStep, runStaircase, palierToLabel
} = require('../src/positioningStaircase');

test('STAIRCASE_STEPS has 6 steps and LEVEL_LABELS has 9 entries', function () {
  assert.equal(STAIRCASE_STEPS.length, 6);
  assert.equal(LEVEL_LABELS.length, 9);
  assert.equal(START_PALIER, 5);
});

test('runStaircase with all correct answers reaches MAX_PALIER', function () {
  assert.equal(runStaircase([true, true, true, true, true, true]), MAX_PALIER);
});

test('runStaircase with all wrong answers reaches MIN_PALIER', function () {
  assert.equal(runStaircase([false, false, false, false, false, false]), MIN_PALIER);
});

test('runStaircase with alternating answers converges to a mid palier', function () {
  var palier = runStaircase([true, false, true, false, true, false]);
  assert.equal(palier, 7);
});

test('runStaircase throws on wrong-length input', function () {
  assert.throws(function () { runStaircase([true, false]); });
});

test('applyStep clamps at MIN_PALIER and MAX_PALIER', function () {
  assert.equal(applyStep(MIN_PALIER, 0, false), MIN_PALIER);
  assert.equal(applyStep(MAX_PALIER, 0, true), MAX_PALIER);
});

test('palierToLabel maps 1..9 to the school-level scale', function () {
  assert.equal(palierToLabel(1), '6e');
  assert.equal(palierToLabel(4), '3e');
  assert.equal(palierToLabel(9), 'BTS2');
});
