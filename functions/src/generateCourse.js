var path = require('path');
var fs = require('fs');
var { shouldClaim } = require('./lock');
var { formatGenerationError } = require('./errors');
var { pdfPath: pdfPathFor, mdPath: mdPathFor } = require('./storagePaths');

var MAX_COMPILE_ATTEMPTS = 4; // 1 initial + 3 Claude-assisted fixes

async function handleGenerationRequest(sessionRef, deps) {
  var snap = await sessionRef.get();
  var sessionData = snap.data();

  if (!shouldClaim(sessionData, deps.now())) {
    return;
  }

  await sessionRef.update({ generationLockAt: deps.now() });

  var workDir = deps.workDirFor(sessionRef.id);
  var texSource;
  var figures;
  try {
    var level = await deps.getStudentLevel(sessionData.studentId);
    var draft = await deps.draftCourse(deps.anthropicClient, Object.assign({}, sessionData, { level: level }));
    texSource = draft.tex;
    figures = draft.figures;

    var reviewed = await deps.reviewDraft(deps.anthropicClient, {
      texSource: texSource,
      figureDescriptions: figures.map(function (f) { return f.filename; })
    });
    texSource = reviewed.tex;

    for (var i = 0; i < figures.length; i++) {
      var figureBuffer = await deps.downloadGeneratedFile(deps.anthropicClient, figures[i].fileId);
      await deps.writeBinaryFile(path.join(workDir, figures[i].filename), figureBuffer);
    }
  } catch (draftError) {
    await failSession(sessionRef, deps, sessionData, draftError);
    return;
  }

  var texFilename = 'cours.tex';
  var compileResult = null;

  for (var attempt = 0; attempt < MAX_COMPILE_ATTEMPTS; attempt++) {
    await deps.writeTexFile(path.join(workDir, texFilename), texSource);
    compileResult = await deps.compileTex({ tectonicPath: deps.tectonicPath, workDir: workDir, texFilename: texFilename });
    if (compileResult.success) break;
    if (attempt < MAX_COMPILE_ATTEMPTS - 1) {
      try {
        var fixed = await deps.fixCompileError(deps.anthropicClient, { texSource: texSource, compileErrorLog: compileResult.errorLog });
        texSource = fixed.tex;
      } catch (fixError) {
        await failSession(sessionRef, deps, sessionData, fixError);
        return;
      }
    }
  }

  if (!compileResult.success) {
    await failSession(sessionRef, deps, sessionData, new Error(compileResult.errorLog || 'Échec de compilation LaTeX.'));
    return;
  }

  try {
    var pdfUrl = await deps.storageBucket.upload(compileResult.pdfPath, pdfPathFor(sessionRef.id));
    var mdLocalPath = path.join(workDir, 'cours.md');
    await deps.writeTexFile(mdLocalPath, texSource);
    var mdUrl = await deps.storageBucket.upload(mdLocalPath, mdPathFor(sessionRef.id));

    await sessionRef.update({
      generationStatus: 'generated',
      pdfUrl: pdfUrl,
      mdUrl: mdUrl,
      generatedAt: deps.now(),
      generationError: null
    });

    await deps.queueSuccessEmail(deps.db, { session: sessionData, pdfUrl: pdfUrl });
  } catch (deliveryError) {
    await failSession(sessionRef, deps, sessionData, deliveryError);
  }
}

async function failSession(sessionRef, deps, sessionData, error) {
  var message = formatGenerationError(error);
  await sessionRef.update({ generationStatus: 'failed', generationError: message });
  await deps.queueFailureEmail(deps.db, { session: sessionData, errorMessage: message });
}

module.exports = { handleGenerationRequest: handleGenerationRequest };
