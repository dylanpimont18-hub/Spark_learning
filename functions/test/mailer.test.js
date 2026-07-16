const test = require('node:test');
const assert = require('node:assert/strict');
const { queueSuccessEmail, queueFailureEmail } = require('../src/mailer');

function fakeDb(userEmail) {
  var added = [];
  return {
    added: added,
    collection: function (name) {
      return {
        add: async function (doc) { added.push({ collection: name, doc: doc }); },
        doc: function (id) {
          return { get: async function () { return { data: function () { return { email: userEmail }; } }; } };
        }
      };
    }
  };
}

test('queueSuccessEmail addresses Dylan and Simon with the PDF link', async function () {
  var db = fakeDb();
  await queueSuccessEmail(db, {
    session: { studentId: 'stu1', subject: 'Maths', topic: 'Dérivation' },
    pdfUrl: 'https://storage.example/cours.pdf'
  });
  assert.equal(db.added.length, 1);
  assert.equal(db.added[0].collection, 'mail');
  assert.ok(db.added[0].doc.to.length >= 2);
  assert.ok(db.added[0].doc.message.html.includes('https://storage.example/cours.pdf'));
});

test('queueFailureEmail addresses only the requester with the error', async function () {
  var db = fakeDb('simon@example.com');
  await queueFailureEmail(db, {
    session: { studentId: 'stu1', subject: 'Maths', topic: 'Dérivation', generationRequestedBy: 'uid-simon' },
    errorMessage: 'Échec de compilation'
  });
  assert.equal(db.added.length, 1);
  assert.deepEqual(db.added[0].doc.to, ['simon@example.com']);
  assert.ok(db.added[0].doc.message.html.includes('Échec de compilation'));
});
