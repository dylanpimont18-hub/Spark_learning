const test = require('node:test');
const assert = require('node:assert/strict');
const { buildTectonicArgs } = require('../src/latexCompiler');

test('buildTectonicArgs targets pdf output and keeps logs', function () {
  var args = buildTectonicArgs('/tmp/work/cours.tex');
  assert.ok(args.includes('/tmp/work/cours.tex'));
  assert.ok(args.includes('--outfmt'));
  assert.ok(args.includes('pdf'));
  assert.ok(args.includes('--keep-logs'));
});
