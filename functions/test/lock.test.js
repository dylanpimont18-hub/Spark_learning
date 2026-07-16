const test = require('node:test');
const assert = require('node:assert/strict');
const { shouldClaim } = require('../src/lock');

test('no session data -> cannot claim', function () {
  assert.equal(shouldClaim(null, new Date()), false);
});

test('status not generating -> cannot claim', function () {
  assert.equal(shouldClaim({ generationStatus: 'generated' }, new Date()), false);
});

test('generating with no lock yet -> can claim', function () {
  assert.equal(shouldClaim({ generationStatus: 'generating', generationLockAt: null }, new Date()), true);
});

test('generating with a fresh lock -> cannot claim (another invocation owns it)', function () {
  var now = new Date('2026-07-16T10:10:00Z');
  var lockAt = { toMillis: function () { return new Date('2026-07-16T10:05:00Z').getTime(); } };
  assert.equal(shouldClaim({ generationStatus: 'generating', generationLockAt: lockAt }, now), false);
});

test('generating with a stale lock (>10min) -> can reclaim', function () {
  var now = new Date('2026-07-16T10:20:00Z');
  var lockAt = { toMillis: function () { return new Date('2026-07-16T10:05:00Z').getTime(); } };
  assert.equal(shouldClaim({ generationStatus: 'generating', generationLockAt: lockAt }, now), true);
});
