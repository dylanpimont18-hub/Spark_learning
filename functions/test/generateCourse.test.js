const test = require('node:test');
const assert = require('node:assert/strict');
const { handleGenerationRequest } = require('../src/generateCourse');

function fakeSessionRef(initialData) {
  var data = Object.assign({}, initialData);
  var updates = [];
  return {
    id: 'sess1',
    updates: updates,
    get: async function () { return { data: function () { return data; }, exists: true }; },
    update: async function (patch) { Object.assign(data, patch); updates.push(patch); }
  };
}

function baseDeps(overrides) {
  var uploaded = [];
  return Object.assign({
    anthropicClient: {},
    tectonicPath: '/fake/tectonic',
    workDirFor: function () { return '/tmp/fake'; },
    storageBucket: {
      upload: async function (localPath, remotePath) { uploaded.push({ localPath: localPath, remotePath: remotePath }); return 'https://storage.example/' + remotePath; }
    },
    uploaded: uploaded,
    db: { collection: function () { return { add: async function () {} }; } },
    now: function () { return new Date('2026-07-16T10:00:00Z'); },
    draftCourse: async function () { return { tex: '\\section{Draft}', figures: [] }; },
    reviewDraft: async function () { return { tex: '\\section{Reviewed}' }; },
    fixCompileError: async function () { return { tex: '\\section{Fixed}' }; },
    downloadGeneratedFile: async function () { return Buffer.from('fake-image-bytes'); },
    compileTex: async function () { return { success: true, pdfPath: '/tmp/fake/cours.pdf', errorLog: null }; },
    queueSuccessEmail: async function () {},
    queueFailureEmail: async function () {},
    writeTexFile: async function () {},
    writeBinaryFile: async function () {},
    getStudentLevel: async function () { return '1re'; }
  }, overrides || {});
}

test('skips when lock already held (shouldClaim false)', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: { toMillis: function () { return Date.now(); } } });
  var deps = baseDeps();
  await handleGenerationRequest(ref, deps);
  assert.equal(ref.updates.length, 0);
});

test('happy path: draft -> review -> compile -> generated status + success email', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1', subject: 'Maths', topic: 'Dérivation', studentId: 'stu1' });
  var successEmailCalls = [];
  var draftCalls = [];
  var deps = baseDeps({
    queueSuccessEmail: async function (db, params) { successEmailCalls.push(params); },
    draftCourse: async function (anthropic, params) { draftCalls.push(params); return { tex: '\\section{Draft}', figures: [] }; },
    getStudentLevel: async function (studentId) { assert.equal(studentId, 'stu1'); return '1re'; }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'generated');
  assert.ok(last.pdfUrl);
  assert.ok(last.mdUrl);
  assert.equal(successEmailCalls.length, 1);
  // level must be fetched from the student doc and merged into the drafting params,
  // since tutoringSessions itself has no "level" field
  assert.equal(draftCalls[0].level, '1re');
  assert.equal(draftCalls[0].subject, 'Maths');
});

test('compile fails 3 times -> failed status + failure email to requester', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1' });
  var failureEmailCalls = [];
  var compileAttempts = 0;
  var deps = baseDeps({
    compileTex: async function () { compileAttempts++; return { success: false, pdfPath: null, errorLog: 'boom' }; },
    queueFailureEmail: async function (db, params) { failureEmailCalls.push(params); }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'failed');
  assert.ok(last.generationError);
  assert.equal(failureEmailCalls.length, 1);
  // 1 initial compile + up to 3 fix-retries = 4 total attempts
  assert.equal(compileAttempts, 4);
});

test('compile fails then succeeds on retry -> generated status', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1' });
  var attempt = 0;
  var deps = baseDeps({
    compileTex: async function () {
      attempt++;
      if (attempt < 2) return { success: false, pdfPath: null, errorLog: 'boom' };
      return { success: true, pdfPath: '/tmp/fake/cours.pdf', errorLog: null };
    }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'generated');
});

test('figures returned by draftCourse are downloaded and written before compiling', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1' });
  var downloadedIds = [];
  var writtenFiles = [];
  var deps = baseDeps({
    draftCourse: async function () {
      return { tex: '\\section{Draft}', figures: [{ filename: 'schema1.png', fileId: 'file_abc' }] };
    },
    downloadGeneratedFile: async function (anthropic, fileId) { downloadedIds.push(fileId); return Buffer.from('png-bytes'); },
    writeBinaryFile: async function (filePath, buffer) { writtenFiles.push({ filePath: filePath, buffer: buffer }); }
  });
  await handleGenerationRequest(ref, deps);
  assert.deepEqual(downloadedIds, ['file_abc']);
  assert.equal(writtenFiles.length, 1);
  assert.match(writtenFiles[0].filePath, /schema1\.png$/);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'generated');
});

test('figure download failure -> failed status (not an unhandled rejection)', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1' });
  var deps = baseDeps({
    draftCourse: async function () {
      return { tex: '\\section{Draft}', figures: [{ filename: 'schema1.png', fileId: 'file_abc' }] };
    },
    downloadGeneratedFile: async function () { throw new Error('files API unavailable'); }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'failed');
});

test('storage upload failure after successful compile -> failed status, not stuck in "generating"', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1' });
  var failureEmailCalls = [];
  var deps = baseDeps({
    storageBucket: { upload: async function () { throw new Error('network error during upload'); } },
    queueFailureEmail: async function (db, params) { failureEmailCalls.push(params); }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'failed');
  assert.ok(last.generationError);
  assert.equal(failureEmailCalls.length, 1);
});
