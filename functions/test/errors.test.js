const test = require('node:test');
const assert = require('node:assert/strict');
const { formatGenerationError } = require('../src/errors');

test('null error -> generic message', function () {
  assert.equal(formatGenerationError(null), 'Erreur inconnue lors de la génération.');
});

test('Error instance -> its message', function () {
  assert.equal(formatGenerationError(new Error('boom')), 'boom');
});

test('string error -> passed through', function () {
  assert.equal(formatGenerationError('boom'), 'boom');
});

test('long message -> truncated to 300 chars with ellipsis', function () {
  var long = 'x'.repeat(400);
  var result = formatGenerationError(new Error(long));
  assert.equal(result.length, 300);
  assert.ok(result.endsWith('...'));
});
