const test = require('node:test');
const assert = require('node:assert/strict');
const { pdfPath, mdPath } = require('../src/storagePaths');

test('pdfPath', function () {
  assert.equal(pdfPath('sess123'), 'tutoringSessions/sess123/cours.pdf');
});

test('mdPath', function () {
  assert.equal(mdPath('sess123'), 'tutoringSessions/sess123/cours.md');
});
