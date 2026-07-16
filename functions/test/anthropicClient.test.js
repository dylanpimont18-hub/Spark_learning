const test = require('node:test');
const assert = require('node:assert/strict');
const { draftCourse, reviewDraft, fixCompileError, runMessageWithPauseHandling } = require('../src/anthropicClient');

function fakeAnthropic(responses) {
  var calls = [];
  var i = 0;
  return {
    calls: calls,
    messages: {
      stream: function (requestParams) {
        calls.push(requestParams);
        var resp = responses[Math.min(i, responses.length - 1)];
        i++;
        return { finalMessage: async function () { return resp; } };
      }
    }
  };
}

function textResponse(text, stopReason) {
  return { stop_reason: stopReason || 'end_turn', content: [{ type: 'text', text: text }] };
}

test('runMessageWithPauseHandling returns immediately on end_turn', async function () {
  var client = fakeAnthropic([textResponse('done')]);
  var result = await runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(result.stop_reason, 'end_turn');
  assert.equal(client.calls.length, 1);
});

test('runMessageWithPauseHandling resumes once on pause_turn then stops on end_turn', async function () {
  var client = fakeAnthropic([textResponse('partial', 'pause_turn'), textResponse('final')]);
  var result = await runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(result.stop_reason, 'end_turn');
  assert.equal(client.calls.length, 2);
  // second call must NOT append a "Continue" user message — only assistant content is added
  var secondCallMessages = client.calls[1].messages;
  assert.equal(secondCallMessages[secondCallMessages.length - 1].role, 'assistant');
});

test('runMessageWithPauseHandling gives up after 5 continuations', async function () {
  var always_pause = [];
  for (var i = 0; i < 10; i++) always_pause.push(textResponse('x', 'pause_turn'));
  var client = fakeAnthropic(always_pause);
  var result = await runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(result.stop_reason, 'pause_turn');
  assert.equal(client.calls.length, 6); // 1 initial + 5 continuations
});

test('draftCourse extracts tex text and passes drafting tools/model', async function () {
  var client = fakeAnthropic([textResponse('\\section{Cours}')]);
  var result = await draftCourse(client, {
    subject: 'Maths', topic: 'Dérivation', level: '1re',
    difficultiesObserved: '', contentType: 'cours', figuresCount: 0
  });
  assert.equal(result.tex, '\\section{Cours}');
  assert.equal(client.calls[0].model, 'claude-opus-4-8');
  var toolTypes = client.calls[0].tools.map(function (t) { return t.type; });
  assert.ok(toolTypes.includes('code_execution_20260521'));
  assert.ok(toolTypes.includes('web_search_20260209'));
  assert.deepEqual(client.calls[0].thinking, { type: 'adaptive' });
  assert.equal(client.calls[0].output_config.effort, 'max');
});

test('reviewDraft extracts corrected tex text', async function () {
  var client = fakeAnthropic([textResponse('\\section{Corrigé}')]);
  var result = await reviewDraft(client, { texSource: '\\section{Brouillon}', figureDescriptions: [] });
  assert.equal(result.tex, '\\section{Corrigé}');
});

test('fixCompileError extracts corrected tex text', async function () {
  var client = fakeAnthropic([textResponse('\\section{Corrigé}')]);
  var result = await fixCompileError(client, { texSource: '\\section{Brouillon}', compileErrorLog: 'erreur' });
  assert.equal(result.tex, '\\section{Corrigé}');
});
