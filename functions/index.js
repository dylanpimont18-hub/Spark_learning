var path = require('path');
var os = require('os');
var fs = require('fs/promises');
var { onDocumentWritten } = require('firebase-functions/v2/firestore');
var { defineSecret } = require('firebase-functions/params');
var admin = require('firebase-admin');
var Anthropic = require('@anthropic-ai/sdk');

var { handleGenerationRequest } = require('./src/generateCourse');
var { queueSuccessEmail, queueFailureEmail } = require('./src/mailer');
var { compileTex } = require('./src/latexCompiler');
var { draftCourse, reviewDraft, fixCompileError } = require('./src/anthropicClient');

admin.initializeApp();

var ANTHROPIC_API_KEY = defineSecret('ANTHROPIC_API_KEY');

exports.generateCourse = onDocumentWritten(
  { document: 'tutoringSessions/{sessionId}', secrets: [ANTHROPIC_API_KEY], memory: '2GiB', timeoutSeconds: 540 },
  async function (event) {
    var after = event.data.after;
    if (!after || !after.exists) return;
    var data = after.data();
    if (data.generationStatus !== 'generating') return;

    var db = admin.firestore();
    var bucket = admin.storage().bucket();
    var anthropicClient = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });
    var workDir = path.join(os.tmpdir(), event.params.sessionId);
    await fs.mkdir(workDir, { recursive: true });

    await handleGenerationRequest(after.ref, {
      anthropicClient: anthropicClient,
      tectonicPath: path.join(__dirname, 'bin', 'tectonic'),
      workDirFor: function () { return workDir; },
      storageBucket: {
        upload: async function (localPath, remotePath) {
          await bucket.upload(localPath, { destination: remotePath });
          var file = bucket.file(remotePath);
          var signed = await file.getSignedUrl({ action: 'read', expires: '2100-01-01' });
          return signed[0];
        }
      },
      db: db,
      now: function () { return admin.firestore.Timestamp.now(); },
      draftCourse: draftCourse,
      reviewDraft: reviewDraft,
      fixCompileError: fixCompileError,
      compileTex: compileTex,
      queueSuccessEmail: queueSuccessEmail,
      queueFailureEmail: queueFailureEmail,
      writeTexFile: async function (filePath, content) { await fs.writeFile(filePath, content, 'utf8'); },
      getStudentLevel: async function (studentId) {
        var studentDoc = await db.collection('tutoringStudents').doc(studentId).get();
        return studentDoc.exists ? studentDoc.data().level : '';
      }
    });
  }
);
