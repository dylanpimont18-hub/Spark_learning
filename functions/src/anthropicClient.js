var promptBuilder = require('./promptBuilder');

var MODEL = 'claude-opus-4-8';
var MAX_CONTINUATIONS = 5;

async function runMessageWithPauseHandling(anthropic, requestParams) {
  var messages = requestParams.messages.slice();
  var continuations = 0;
  var response = await anthropic.messages.stream(Object.assign({}, requestParams, { messages: messages })).finalMessage();

  while (response.stop_reason === 'pause_turn' && continuations < MAX_CONTINUATIONS) {
    messages = messages.concat([{ role: 'assistant', content: response.content }]);
    response = await anthropic.messages.stream(Object.assign({}, requestParams, { messages: messages })).finalMessage();
    continuations++;
  }

  return response;
}

function extractText(response) {
  return response.content
    .filter(function (block) { return block.type === 'text'; })
    .map(function (block) { return block.text; })
    .join('\n');
}

function extractGeneratedFiles(response) {
  var files = [];
  response.content.forEach(function (block) {
    if (block.type !== 'bash_code_execution_tool_result') return;
    var result = block.content;
    if (!result || result.type !== 'bash_code_execution_result' || !result.content) return;
    result.content.forEach(function (item) {
      if (item.type === 'bash_code_execution_output' && item.file_id) {
        files.push({ filename: item.filename || item.file_id, fileId: item.file_id });
      }
    });
  });
  return files;
}

async function draftCourse(anthropic, params) {
  var prompt = promptBuilder.buildDraftingPrompt(params);
  var response = await runMessageWithPauseHandling(anthropic, {
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'max' },
    tools: [
      { type: 'code_execution_20260521', name: 'code_execution' },
      { type: 'web_search_20260209', name: 'web_search', max_uses: 5 }
    ],
    messages: [{ role: 'user', content: prompt }]
  });
  return { tex: extractText(response), figures: extractGeneratedFiles(response), response: response };
}

async function reviewDraft(anthropic, params) {
  var prompt = promptBuilder.buildReviewPrompt(params);
  var response = await runMessageWithPauseHandling(anthropic, {
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'max' },
    messages: [{ role: 'user', content: prompt }]
  });
  return { tex: extractText(response), response: response };
}

async function fixCompileError(anthropic, params) {
  var prompt = promptBuilder.buildFixCompilePrompt(params);
  var response = await runMessageWithPauseHandling(anthropic, {
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'high' },
    messages: [{ role: 'user', content: prompt }]
  });
  return { tex: extractText(response), response: response };
}

// Le tool code_execution ne renvoie que des références (file_id) aux fichiers générés
// (figures) : il faut ensuite les récupérer via l'API Files pour pouvoir les inclure
// (\includegraphics) lors de la compilation LaTeX.
async function downloadGeneratedFile(anthropic, fileId) {
  var response = await anthropic.get('/v1/files/' + fileId + '/content', {
    headers: { 'anthropic-beta': 'files-api-2025-04-14' },
    __binaryResponse: true
  });
  var arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

module.exports = {
  draftCourse: draftCourse,
  reviewDraft: reviewDraft,
  fixCompileError: fixCompileError,
  downloadGeneratedFile: downloadGeneratedFile,
  runMessageWithPauseHandling: runMessageWithPauseHandling
};
