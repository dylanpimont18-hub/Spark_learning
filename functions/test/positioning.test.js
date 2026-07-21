// functions/test/positioning.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const { handleGetLinkInfo, handleSubmitResult, THEME_IDS } = require('../src/positioning');

function fakeQuestion(id, correctIndex) {
  return { id: id, question: 'Q?', options: ['a', 'b', 'c', 'd'], correctIndex: correctIndex };
}

function fixtureBank() {
  var themes = {};
  THEME_IDS.maths.forEach(function (themeId) {
    themes[themeId] = {
      id: themeId,
      label: themeId,
      levels: { 1: [
        fakeQuestion(themeId + '-q1', 0), fakeQuestion(themeId + '-q2', 0),
        fakeQuestion(themeId + '-q3', 0), fakeQuestion(themeId + '-q4', 0),
        fakeQuestion(themeId + '-q5', 0), fakeQuestion(themeId + '-q6', 0)
      ] }
    };
  });
  return { themes: themes };
}

function fakeTestRef(initialData) {
  var data = Object.assign({ results: {} }, initialData);
  return {
    get: async function () { return { exists: true, data: function () { return data; } }; },
    update: async function (patch) {
      Object.keys(patch).forEach(function (key) {
        if (key.indexOf('results.') === 0) {
          data.results = data.results || {};
          data.results[key.slice('results.'.length)] = patch[key];
        } else {
          data[key] = patch[key];
        }
      });
    },
    _data: function () { return data; }
  };
}

function allCorrectAnswers(bank, themeId) {
  return bank.themes[themeId].levels[1].map(function (q) {
    return { themeId: themeId, questionId: q.id, selectedOption: q.correctIndex };
  });
}

test('handleGetLinkInfo reports no completed subject on a fresh test', async function () {
  var ref = fakeTestRef({ studentId: 'stu1' });
  var info = await handleGetLinkInfo(ref);
  assert.equal(info.studentNameKnown, true);
  assert.equal(info.alreadyCompleted.maths, false);
  assert.equal(info.alreadyCompleted.physique, false);
});

test('handleGetLinkInfo reports studentNameKnown=false for a fully standalone link', async function () {
  var ref = fakeTestRef({ studentId: null, studentNameInput: null });
  var info = await handleGetLinkInfo(ref);
  assert.equal(info.studentNameKnown, false);
});

test('handleSubmitResult grades all-correct answers as MAX_PALIER for every theme', async function () {
  var bank = fixtureBank();
  var ref = fakeTestRef({ studentId: 'stu1' });
  var answers = [];
  THEME_IDS.maths.forEach(function (themeId) {
    answers = answers.concat(allCorrectAnswers(bank, themeId));
  });
  var result = await handleSubmitResult(ref, { subject: 'maths', answers: answers }, {
    getBank: function () { return bank; },
    now: function () { return 'TIMESTAMP'; }
  });
  THEME_IDS.maths.forEach(function (themeId) {
    assert.equal(result.themes[themeId].level, 'BTS2');
  });
  assert.equal(ref._data().results.maths.status, 'completed');
});

test('handleSubmitResult rejects a second submission for an already-completed subject', async function () {
  var ref = fakeTestRef({ studentId: 'stu1', results: { maths: { status: 'completed', themes: {} } } });
  await assert.rejects(function () {
    return handleSubmitResult(ref, { subject: 'maths', answers: [] }, { getBank: fixtureBank, now: function () { return 'T'; } });
  }, /déjà été testée/);
});

test('handleSubmitResult rejects an unknown questionId', async function () {
  var bank = fixtureBank();
  var ref = fakeTestRef({ studentId: 'stu1' });
  var answers = [{ themeId: THEME_IDS.maths[0], questionId: 'does-not-exist', selectedOption: 0 }];
  await assert.rejects(function () {
    return handleSubmitResult(ref, { subject: 'maths', answers: answers }, { getBank: function () { return bank; }, now: function () { return 'T'; } });
  }, /Question inconnue/);
});
