// Tests des règles de sécurité Firestore du module devoir, dans l'émulateur.
// Garantie vérifiée (cahier des charges §8 et §11.4) : un étudiant ne lit que sa propre copie —
// ni corrigé, ni barème, ni note, ni copie d'un autre ; l'enseignant lit tout ; aucun client
// n'écrit dans les collections du passage en classe.
// Lancement : node scripts/devoir-emulateurs.js test regles
const assert = require('assert');
const E = require('./lib/devoir-emulateur.js');

const REFUS = 403;

async function lancer() {
  const { test, etat } = E.cadre();
  await E.toutEffacer();
  const { prof, exercices, rediges } = await E.semer();

  // Une session ouverte, deux étudiants entrés, un brouillon enregistré.
  const creation = await E.appeler('createSession', {
    titre: 'Devoir règles', classe_id: 'classe-demo', exercice_ids: exercices.map((x) => x.id)
  }, prof.jeton);
  assert.ok(creation.ok, 'création de session : ' + creation.message);
  const sessionId = creation.resultat.session_id;
  const code = (await E.appeler('updateSession', { session_id: sessionId, action: 'ouvrir' }, prof.jeton)).resultat.code;
  assert.ok((await E.appeler('updateSession', { session_id: sessionId, action: 'lancer' }, prof.jeton)).ok, 'lancement');
  const alice = await E.connexionAnonyme();
  const bilal = await E.connexionAnonyme();
  const intrus = await E.connexionAnonyme();   // connecté anonymement, mais entré dans aucune session
  const copieAlice = (await E.appeler('joinSession', { code, etudiant_id: 'etu-01' }, alice.jeton)).resultat.copie_id;
  const copieBilal = (await E.appeler('joinSession', { code, etudiant_id: 'etu-02' }, bilal.jeton)).resultat.copie_id;
  const maCopie = (await E.lire('devoir_copies/' + copieAlice, alice.jeton)).donnees;
  await E.appeler('saveDraft', { copie_id: copieAlice, attribution_id: maCopie.attributions[0].id, blocs: { methode: 'U = R I' } }, alice.jeton);
  // Une correction fictive, comme en écrira le MVP-4.
  await E.ecrire('devoir_corrections/' + maCopie.attributions[0].id, { copie_id: copieAlice, note_finale: 12, statut: 'validee' });

  console.log('Étudiant');
  await test('lit sa propre copie', async () => {
    const r = await E.lire('devoir_copies/' + copieAlice, alice.jeton);
    assert.strictEqual(r.statut, 200);
    assert.strictEqual(r.donnees.nom, 'Alice M.');
  });
  await test('sa copie ne contient ni corrigé, ni barème, ni valeurs tirées, ni note', async () => {
    const r = await E.lire('devoir_copies/' + copieAlice, alice.jeton);
    const brut = JSON.stringify(r.donnees);
    ['corrige', 'bareme', 'points', 'valeurs', 'donnees', 'note', 'expression', 'exercice_id'].forEach((mot) => {
      assert.ok(brut.indexOf('"' + mot) === -1, 'la copie expose un champ « ' + mot + '… »');
    });
    assert.ok(r.donnees.attributions.every((a) => a.enonce && a.blocs.every((b) => Object.keys(b).sort().join() === 'id,label')));
  });
  await test('ne lit pas la copie d\'un autre étudiant', async () => {
    assert.strictEqual((await E.lire('devoir_copies/' + copieBilal, alice.jeton)).statut, REFUS);
  });
  await test('ne peut ni lister ni interroger les copies', async () => {
    assert.strictEqual((await E.lister('devoir_copies', alice.jeton)).ok, false);
    assert.strictEqual((await E.chercher('devoir_copies', 'session_id', sessionId, alice.jeton)).ok, false);
    assert.strictEqual((await E.chercher('devoir_copies', 'uid', alice.uid, alice.jeton)).ok, false);
  });
  await test('ne lit pas la partie privée de sa copie (valeurs, corrigé, barème)', async () => {
    assert.strictEqual((await E.lire('devoir_copies_prive/' + copieAlice, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lister('devoir_copies_prive', alice.jeton)).ok, false);
  });
  await test('ne lit ni la banque d\'exercices, ni les classes, ni les sessions', async () => {
    assert.strictEqual((await E.lire('devoir_exercices/' + exercices[0].id, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lister('devoir_exercices', alice.jeton)).ok, false);
    assert.strictEqual((await E.lire('devoir_classes/classe-demo', alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lire('devoir_sessions/' + sessionId, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lister('devoir_sessions', alice.jeton)).ok, false);
  });
  await test('ne lit ni les notes, ni les corrections, ni le journal d\'événements', async () => {
    assert.strictEqual((await E.lire('devoir_corrections/' + maCopie.attributions[0].id, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lister('devoir_corrections', alice.jeton)).ok, false);
    assert.strictEqual((await E.lister('devoir_evenements', alice.jeton)).ok, false);
    assert.strictEqual((await E.chercher('devoir_evenements', 'copie_id', copieAlice, alice.jeton)).ok, false);
  });
  await test('ne lit ni les codes de session, ni l\'historique, ni les compteurs de tentatives', async () => {
    assert.strictEqual((await E.lire('devoir_codes/' + code, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lister('devoir_codes', alice.jeton)).ok, false);
    assert.strictEqual((await E.lire('devoir_historique/etu-01', alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lire('devoir_tentatives/uid_' + alice.uid, alice.jeton)).statut, REFUS);
  });
  await test('n\'écrit nulle part directement (copie, réponses, événements, corrections, session)', async () => {
    assert.strictEqual((await E.ecrire('devoir_copies/' + copieAlice, { statut: 'en_cours', uid: alice.uid, fin: new Date(Date.now() + 9e6) }, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_copies/nouvelle', { uid: alice.uid }, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.supprimer('devoir_copies/' + copieAlice, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_evenements/x', { type: 'submit' }, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_corrections/' + maCopie.attributions[0].id, { note_finale: 20 }, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_sessions/' + sessionId, { statut: 'ouverte' }, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_copies_prive/' + copieAlice, { x: 1 }, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('users/' + alice.uid, { role: 'admin' }, alice.jeton)).statut, REFUS);
  });

  console.log('Visiteur sans session');
  await test('un anonyme entré dans aucune session ne lit aucune copie', async () => {
    assert.strictEqual((await E.lire('devoir_copies/' + copieAlice, intrus.jeton)).statut, REFUS);
    assert.strictEqual((await E.lire('devoir_copies_prive/' + copieAlice, intrus.jeton)).statut, REFUS);
  });
  await test('un visiteur non connecté ne lit rien du module', async () => {
    for (const chemin of ['devoir_copies/' + copieAlice, 'devoir_copies_prive/' + copieAlice, 'devoir_sessions/' + sessionId,
      'devoir_exercices/' + exercices[0].id, 'devoir_classes/classe-demo', 'devoir_corrections/' + maCopie.attributions[0].id]) {
      assert.strictEqual((await E.lire(chemin, false)).statut, REFUS, chemin);
    }
  });

  console.log('Enseignant');
  await test('lit tout : session, copies, partie privée, événements, corrections, banque, classes', async () => {
    assert.strictEqual((await E.lire('devoir_sessions/' + sessionId, prof.jeton)).statut, 200);
    assert.strictEqual((await E.lister('devoir_sessions', prof.jeton)).docs.length, 1);
    assert.strictEqual((await E.chercher('devoir_copies', 'session_id', sessionId, prof.jeton)).docs.length, 2);
    const prive = await E.lire('devoir_copies_prive/' + copieAlice, prof.jeton);
    assert.strictEqual(prive.statut, 200);
    const att = prive.donnees.attributions[maCopie.attributions[0].id];
    assert.ok(att.corrige && typeof att.corrige.valeur === 'number' && att.bareme.length === 4, 'corrigé et barème attendus côté enseignant');
    assert.ok((await E.chercher('devoir_evenements', 'session_id', sessionId, prof.jeton)).docs.length >= 2);
    assert.strictEqual((await E.lire('devoir_corrections/' + maCopie.attributions[0].id, prof.jeton)).statut, 200);
    assert.strictEqual((await E.lister('devoir_exercices', prof.jeton)).docs.length, exercices.length + rediges.length);
    assert.strictEqual((await E.lire('devoir_classes/classe-demo', prof.jeton)).statut, 200);
  });
  await test('n\'écrit pas directement dans les collections pilotées par le serveur', async () => {
    assert.strictEqual((await E.ecrire('devoir_sessions/' + sessionId, { statut: 'ouverte' }, prof.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_copies/' + copieAlice, { statut: 'rendue' }, prof.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_evenements/x', { type: 'submit' }, prof.jeton)).statut, REFUS);
    assert.strictEqual((await E.ecrire('devoir_corrections/x', { note_finale: 20 }, prof.jeton)).statut, REFUS);
  });
  await test('garde la main sur la banque et les classes (MVP-1 inchangé)', async () => {
    assert.strictEqual((await E.ecrire('devoir_classes/autre', { nom: 'Autre', annee_scolaire: '2026-2027', etudiants: [] }, prof.jeton)).statut, 200);
    assert.strictEqual((await E.supprimer('devoir_classes/autre', prof.jeton)).statut, 200);
  });

  console.log('Règles existantes (non modifiées)');
  await test('config reste lisible publiquement, users reste protégé', async () => {
    await E.ecrire('config/settings', { maintenance: false });
    assert.strictEqual((await E.lire('config/settings', false)).statut, 200);
    assert.strictEqual((await E.lire('users/' + prof.uid, alice.jeton)).statut, REFUS);
    assert.strictEqual((await E.lire('users/' + prof.uid, prof.jeton)).statut, 200);
    assert.strictEqual((await E.lire('adminLogs/x', alice.jeton)).statut, REFUS);
  });

  return etat;
}

module.exports = { lancer };
