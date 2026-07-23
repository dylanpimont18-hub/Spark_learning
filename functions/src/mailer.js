// Simon pas encore ajouté (adresse réelle à fournir avant qu'il utilise le générateur).
var TUTOR_EMAILS = ['dylan.pimont18@gmail.com'];

async function queueSuccessEmail(db, params) {
  await db.collection('mail').add({
    to: TUTOR_EMAILS,
    message: {
      subject: 'Cours généré : ' + params.session.subject + ' — ' + params.session.topic,
      html: 'Le cours demandé est prêt : <a href="' + params.pdfUrl + '">' + params.pdfUrl + '</a>'
    }
  });
}

async function queueFailureEmail(db, params) {
  var requesterDoc = await db.collection('users').doc(params.session.generationRequestedBy).get();
  var requesterEmail = requesterDoc.data().email;

  await db.collection('mail').add({
    to: [requesterEmail],
    message: {
      subject: 'Échec de génération : ' + params.session.subject + ' — ' + params.session.topic,
      html: 'La génération du cours a échoué après plusieurs tentatives.<br/>Détail : ' + params.errorMessage
    }
  });
}

module.exports = { queueSuccessEmail: queueSuccessEmail, queueFailureEmail: queueFailureEmail };
