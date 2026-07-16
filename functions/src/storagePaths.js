function pdfPath(sessionId) {
  return 'tutoringSessions/' + sessionId + '/cours.pdf';
}

function mdPath(sessionId) {
  return 'tutoringSessions/' + sessionId + '/cours.md';
}

module.exports = { pdfPath: pdfPath, mdPath: mdPath };
