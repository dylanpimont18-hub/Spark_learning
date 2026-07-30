/* =========================================================
   Spark Learning – scripts/test-companion-srs.js
   Vérifie le moteur de répétition espacée de companionEngine.js
   sans dépendance externe (fs/vm/assert du cœur Node).
   Lancer : node scripts/test-companion-srs.js
   ========================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

function loadCompanionEngine(sandbox) {
  const code = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'engines', 'companionEngine.js'),
    'utf8'
  );
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox;
}

function freshSandbox(modules) {
  const stored = {};
  const sandbox = {
    console,
    Date,
    Math,
    Object,
    JSON,
    localStorage: {
      setItem: (k, v) => { stored[k] = v; },
      getItem: (k) => (k in stored ? stored[k] : null)
    },
    state: {
      companionState: {
        points: 0,
        badges: [],
        objectives: { completed: [], inProgress: [] },
        remediation: { moduleId: null, lacunes: [], attempts: {} },
        srs: {}
      }
    },
    window: { MODULES: modules },
    getModule: (id) => modules.find(m => m.id === id),
    isModuleUnavailable: () => false,
    pick: (arr) => arr[0],
    showToast: () => {}
  };
  loadCompanionEngine(sandbox);
  return sandbox;
}

const MODULES = [{ id: 'mod-1', title: 'Équations du premier degré', icon: '📐' }];
let passed = 0;

function check(label, fn) {
  fn();
  passed++;
  console.log('OK: ' + label);
}

check('une mauvaise réponse planifie la révision à l\'échelon 0 (~1 jour)', () => {
  const sb = freshSandbox(MODULES);
  const before = Date.now();
  const entry = sb.scheduleReview('mod-1', false);
  assert.strictEqual(entry.intervalIndex, 0);
  assert.strictEqual(entry.lastResult, 'wrong');
  const dueMs = new Date(entry.dueAt).getTime();
  assert.ok(dueMs > before, 'dueAt doit être dans le futur');
  assert.ok(dueMs <= before + 2 * 86400000, 'dueAt doit être proche de +1 jour');
});

check('des bonnes réponses consécutives font monter l\'échelle', () => {
  const sb = freshSandbox(MODULES);
  sb.scheduleReview('mod-1', true);
  const second = sb.scheduleReview('mod-1', true);
  assert.strictEqual(second.intervalIndex, 1);
});

check('un échec après progression revient à l\'échelon 0', () => {
  const sb = freshSandbox(MODULES);
  sb.scheduleReview('mod-1', true);
  sb.scheduleReview('mod-1', true);
  const lapsed = sb.scheduleReview('mod-1', false);
  assert.strictEqual(lapsed.intervalIndex, 0);
});

check('getDueReviews ne retourne que les modules dont l\'échéance est passée', () => {
  const sb = freshSandbox(MODULES);
  sb.state.companionState.srs['mod-1'] = {
    intervalIndex: 0,
    dueAt: new Date(Date.now() - 3600000).toISOString(),
    lastResult: 'wrong'
  };
  const due = sb.getDueReviews();
  assert.strictEqual(due.length, 1);
  assert.strictEqual(due[0].moduleId, 'mod-1');

  sb.state.companionState.srs['mod-1'].dueAt = new Date(Date.now() + 3 * 86400000).toISOString();
  assert.strictEqual(sb.getDueReviews().length, 0);
});

check('réussir une révision en retard rapporte +15 points Companion', () => {
  const sb = freshSandbox(MODULES);
  sb.state.companionState.srs['mod-1'] = {
    intervalIndex: 0,
    dueAt: new Date(Date.now() - 3600000).toISOString(),
    lastResult: 'wrong'
  };
  const before = sb.state.companionState.points;
  sb.scheduleReview('mod-1', true);
  assert.strictEqual(sb.state.companionState.points, before + 15);
});

console.log('\n' + passed + '/5 tests passés.');
