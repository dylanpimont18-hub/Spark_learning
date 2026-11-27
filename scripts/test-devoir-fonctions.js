// Tests des Cloud Functions du module devoir contre les émulateurs (API appelable, sans navigateur).
// Vérifie ce que le serveur décide seul : accès, tirage, temps, statuts, quotas.
// Lancement : node scripts/devoir-emulateurs.js test fonctions
const assert = require('assert');
const E = require('./lib/devoir-emulateur.js');

// Par défaut l'épreuve est lancée aussitôt ouverte (les étudiants démarrent en entrant) ;
// { attente: true } laisse la session en salle d'attente.
async function ouvrirSession(prof, exercices, options) {
  const opt = Object.assign({}, options || {});
  const attente = opt.attente === true;
  delete opt.attente;
  const c = await E.appeler('createSession', Object.assign({
    titre: 'Devoir de test', classe_id: 'classe-demo', exercice_ids: exercices.map((x) => x.id)
  }, opt), prof.jeton);
  assert.ok(c.ok, 'createSession : ' + c.message);
  const o = await E.appeler('updateSession', { session_id: c.resultat.session_id, action: 'ouvrir' }, prof.jeton);
  assert.ok(o.ok, 'ouverture : ' + o.message);
  if (!attente) {
    const l = await E.appeler('updateSession', { session_id: c.resultat.session_id, action: 'lancer' }, prof.jeton);
    assert.ok(l.ok, 'lancement : ' + l.message);
  }
  return { sessionId: c.resultat.session_id, code: o.resultat.code, avertissement: c.resultat.avertissement };
}

async function entrer(code, etudiantId) {
  const u = await E.connexionAnonyme();
  const r = await E.appeler('joinSession', { code, etudiant_id: etudiantId }, u.jeton);
  assert.ok(r.ok, 'joinSession ' + etudiantId + ' : ' + r.message);
  return Object.assign(u, { copieId: r.resultat.copie_id, etudiantId });
}

async function copie(id) { return (await E.lire('devoir_copies/' + id)).donnees; }
async function prive(id) { return (await E.lire('devoir_copies_prive/' + id)).donnees; }
async function evenements(copieId) { return (await E.chercher('devoir_evenements', 'copie_id', copieId)).docs; }

async function suiteAttente(test, prof, exercices) {
  console.log('Salle d\'attente — choix de la classe, noms, lancement par l\'enseignant');
  let s, alice, bilal;
  await test('la liste des classes ne montre que celles qui ont un devoir ouvert', async () => {
    const u = await E.connexionAnonyme();
    const avant = (await E.appeler('listOpenClasses', {}, u.jeton)).resultat.classes;
    s = await ouvrirSession(prof, exercices, { attente: true });
    const apres = (await E.appeler('listOpenClasses', {}, u.jeton)).resultat.classes;
    assert.ok(apres.some((c) => c.id === 'classe-demo'), 'classe proposée');
    assert.ok(apres.every((c) => Object.keys(c).sort().join() === 'id,nom'), 'ni étudiants ni code dans la liste');
    assert.ok(apres.length >= avant.length);
    assert.strictEqual((await E.appeler('listOpenClasses', {})).code, 'UNAUTHENTICATED');
  });
  await test('un code valide avec la mauvaise classe est refusé comme un mauvais code', async () => {
    const u = await E.connexionAnonyme();
    const r = await E.appeler('joinSession', { code: s.code, classe_id: 'autre-classe' }, u.jeton);
    assert.strictEqual(r.code, 'NOT_FOUND');
    assert.strictEqual(r.message, 'Code invalide ou session fermée.');
    const ok = await E.appeler('joinSession', { code: s.code, classe_id: 'classe-demo' }, u.jeton);
    assert.strictEqual(ok.resultat.etape, 'choix');
    assert.strictEqual(ok.resultat.session.lancee, false);
  });
  await test('avant le lancement : la copie porte le nom, sans exercice, sans minuteur, sans partie privée', async () => {
    alice = await entrer(s.code, 'etu-01');
    bilal = await entrer(s.code, 'etu-02');
    const c = await copie(alice.copieId);
    assert.strictEqual(c.statut, 'en_attente');
    assert.strictEqual(c.nom, 'Alice M.');
    assert.deepStrictEqual(c.attributions, []);
    assert.strictEqual(c.debut, null);
    assert.strictEqual(c.fin, null);
    assert.strictEqual(await prive(alice.copieId), null);
    const lu = await E.lire('devoir_copies/' + alice.copieId, alice.jeton);
    assert.ok(lu.ok, 'l\'étudiant lit sa copie en attente');
    assert.ok(!(await E.lire('devoir_copies/' + alice.copieId, bilal.jeton)).ok, 'pas celle du voisin');
  });
  await test('en attente : aucun brouillon, aucun rendu, aucun incident n\'est accepté', async () => {
    const b = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: 'x', blocs: {} }, alice.jeton);
    assert.strictEqual(b.resultat.enregistre, false);
    const r = await E.appeler('submitCopy', { copie_id: alice.copieId }, alice.jeton);
    assert.strictEqual(r.resultat.statut, 'en_attente');
    await E.appeler('logEvent', { copie_id: alice.copieId, type: 'focus_perdu', source: 'blur' }, alice.jeton);
    await E.appeler('logEvent', { copie_id: alice.copieId, type: 'focus_revenu', duree_ms: 9000 }, alice.jeton);
    const c = await copie(alice.copieId);
    assert.strictEqual(c.statut, 'en_attente');
    assert.strictEqual(c.changements_utilises, 0);
  });
  await test('l\'étudiant qui s\'est trompé de nom le rend lui-même ; un autre ne le peut pas', async () => {
    const carla = await entrer(s.code, 'etu-03');
    assert.strictEqual((await E.appeler('leaveWaiting', { copie_id: carla.copieId }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.ok((await E.appeler('leaveWaiting', { copie_id: carla.copieId }, carla.jeton)).ok);
    assert.strictEqual(await copie(carla.copieId), null);
    const liste = (await E.appeler('joinSession', { code: s.code }, carla.jeton)).resultat.etudiants;
    assert.strictEqual(liste.find((x) => x.id === 'etu-03').pris, false, 'le nom est de nouveau libre');
    assert.strictEqual(liste.find((x) => x.id === 'etu-01').pris, true);
  });
  await test('seul l\'enseignant lance ; le lancement tire les exercices et donne la même fin à tous', async () => {
    assert.strictEqual((await E.appeler('updateSession', { session_id: s.sessionId, action: 'lancer' }, alice.jeton)).code, 'PERMISSION_DENIED');
    const l = await E.appeler('updateSession', { session_id: s.sessionId, action: 'lancer' }, prof.jeton);
    assert.ok(l.ok, l.message);
    assert.strictEqual(l.resultat.copies_lancees, 2);
    const a = await copie(alice.copieId);
    const b = await copie(bilal.copieId);
    assert.strictEqual(a.statut, 'connecte');
    assert.strictEqual(a.attributions.length, 3);
    assert.strictEqual(String(a.fin), String(b.fin), 'même heure de fin');
    assert.ok(Math.abs(new Date(a.fin).getTime() - Date.now() - 60 * 60000) < 15000, 'fin = lancement + 60 min');
    assert.strictEqual(Object.keys((await prive(alice.copieId)).attributions).length, 3);
    assert.ok((await evenements(alice.copieId)).some((e) => e.type === 'depart'));
    assert.strictEqual((await E.appeler('updateSession', { session_id: s.sessionId, action: 'lancer' }, prof.jeton)).code, 'FAILED_PRECONDITION');
  });
  await test('entré juste après le lancement : même fin que la classe, sans message de retard', async () => {
    const dina = await entrer(s.code, 'etu-04');
    const d = await copie(dina.copieId);
    assert.strictEqual(d.statut, 'connecte');
    assert.strictEqual(d.attributions.length, 3);
    assert.strictEqual(d.fin.getTime(), (await copie(alice.copieId)).fin.getTime(), 'même heure de fin que ceux qui attendaient');
    assert.deepStrictEqual([d.message, d.retard_ms], [null, undefined]);
  });
  await test('retardataire : il compose sur le temps restant et finit en même temps que la classe', async () => {
    // Simule un lancement vieux de 10 minutes : il reste 50 minutes à toute la classe.
    const lancement = Date.now() - 10 * 60000;
    const finClasse = new Date(lancement + 60 * 60000);
    await E.majChamps('devoir_sessions/' + s.sessionId, { lancee_a: new Date(lancement), fin_prevue: finClasse });
    await E.majChamps('devoir_copies/' + alice.copieId, { fin: finClasse });
    const u = await E.connexionAnonyme();
    const annonce = (await E.appeler('joinSession', { code: s.code }, u.jeton)).resultat.session;
    assert.strictEqual(annonce.lancee, true);
    assert.ok(annonce.reste_minutes === 49 || annonce.reste_minutes === 50, 'temps restant annoncé avant de confirmer son nom : ' + annonce.reste_minutes);
    const r = await E.appeler('joinSession', { code: s.code, etudiant_id: 'etu-07' }, u.jeton);
    assert.ok(r.ok, r.message);
    const g = await copie(r.resultat.copie_id);
    assert.strictEqual(g.statut, 'connecte');
    assert.strictEqual(g.fin.getTime(), finClasse.getTime(), 'fin commune, pas début + 60 min');
    assert.ok(g.fin.getTime() - g.debut.getTime() < 50 * 60000 + 1000 && g.fin.getTime() - g.debut.getTime() > 49 * 60000, 'il compose sur les 50 minutes restantes');
    assert.ok(g.retard_ms >= 10 * 60000 && g.retard_ms < 10 * 60000 + 20000, 'retard mesuré par le serveur : ' + g.retard_ms);
    assert.strictEqual(g.message.type, 'retard');
    assert.ok(/temps restant, soit 50 minutes/.test(g.message.texte) && /termine à la même heure/.test(g.message.texte), g.message.texte);
    assert.ok(!/trich|sanction|faute/i.test(g.message.texte), 'message sans reproche');
    const depart = (await evenements(r.resultat.copie_id)).find((e) => e.type === 'depart');
    assert.ok(/10 minutes après le lancement, 50 minutes pour composer/.test(depart.detail), depart.detail);
    // Le serveur applique cette fin : une saisie après l'heure commune est refusée.
    await E.majChamps('devoir_copies/' + r.resultat.copie_id, { fin: new Date(Date.now() - 60000) });
    const tard = await E.appeler('saveDraft', { copie_id: r.resultat.copie_id, attribution_id: g.attributions[0].id, blocs: { methode: 'trop tard' } }, u.jeton);
    assert.deepStrictEqual([tard.resultat.enregistre, tard.resultat.statut], [false, 'rendue_auto']);
  });
  await test('prolongation : la fin commune recule, un retardataire entré ensuite en profite comme les autres', async () => {
    const avant = (await E.lire('devoir_sessions/' + s.sessionId)).donnees.fin_prevue.getTime();
    assert.ok((await E.appeler('updateSession', { session_id: s.sessionId, action: 'prolonger', minutes: 5 }, prof.jeton)).ok);
    const apres = (await E.lire('devoir_sessions/' + s.sessionId)).donnees;
    assert.strictEqual(apres.fin_prevue.getTime() - avant, 5 * 60000);
    const h = await entrer(s.code, 'etu-08');
    const c = await copie(h.copieId);
    assert.strictEqual(c.fin.getTime(), apres.fin_prevue.getTime());
    assert.strictEqual(c.fin.getTime(), (await copie(alice.copieId)).fin.getTime(), 'toute la classe finit à la même heure');
    assert.ok(/soit 55 minutes/.test(c.message.texte), c.message.texte);
  });
  await test('temps de la classe écoulé : plus personne ne commence, et aucune copie fantôme ne prend le nom', async () => {
    await E.majChamps('devoir_sessions/' + s.sessionId, { fin_prevue: new Date(Date.now() - 1000) });
    const u = await E.connexionAnonyme();
    const liste = await E.appeler('joinSession', { code: s.code }, u.jeton);
    assert.strictEqual(liste.resultat.session.reste_minutes, 0);
    const r = await E.appeler('joinSession', { code: s.code, etudiant_id: 'etu-09' }, u.jeton);
    assert.strictEqual(r.code, 'FAILED_PRECONDITION');
    assert.ok(/temps de cette épreuve est écoulé/.test(r.message), r.message);
    assert.strictEqual(await copie(s.sessionId + '_etu-09'), null);
    const encore = (await E.appeler('joinSession', { code: s.code }, u.jeton)).resultat.etudiants;
    assert.strictEqual(encore.find((x) => x.id === 'etu-09').pris, false);
  });
  await test('fermer une session jamais lancée efface les copies en attente', async () => {
    const s2 = await ouvrirSession(prof, exercices, { attente: true });
    const e = await entrer(s2.code, 'etu-05');
    assert.ok((await E.appeler('updateSession', { session_id: s2.sessionId, action: 'fermer' }, prof.jeton)).ok);
    assert.strictEqual(await copie(e.copieId), null);
    await E.appeler('updateSession', { session_id: s.sessionId, action: 'fermer' }, prof.jeton);
  });
  await test('nom libéré en attente puis repris après le lancement : la copie démarre', async () => {
    const s3 = await ouvrirSession(prof, exercices, { attente: true });
    const f = await entrer(s3.code, 'etu-06');
    assert.ok((await E.appeler('releaseName', { copie_id: f.copieId }, prof.jeton)).ok);
    const l = await E.appeler('updateSession', { session_id: s3.sessionId, action: 'lancer' }, prof.jeton);
    assert.strictEqual(l.resultat.copies_lancees, 0, 'un nom libéré ne démarre pas tout seul');
    assert.strictEqual((await copie(f.copieId)).statut, 'en_attente');
    const g = await entrer(s3.code, 'etu-06');
    assert.strictEqual((await copie(g.copieId)).statut, 'connecte');
    await E.appeler('updateSession', { session_id: s3.sessionId, action: 'fermer' }, prof.jeton);
  });
}

async function suiteMvp2(test, prof, exercices, classe) {
  console.log('MVP-2 — sessions');
  await test('seul l\'enseignant crée et pilote une session', async () => {
    const etu = await E.connexionAnonyme();
    const donnees = { titre: 'X', classe_id: 'classe-demo', exercice_ids: exercices.map((x) => x.id) };
    assert.strictEqual((await E.appeler('createSession', donnees, etu.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('createSession', donnees, null)).code, 'UNAUTHENTICATED');
    assert.strictEqual((await E.appeler('updateSession', { session_id: 'x', action: 'ouvrir' }, etu.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('releaseName', { copie_id: 'x' }, etu.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('syncSession', { session_id: 'x' }, etu.jeton)).code, 'PERMISSION_DENIED');
  });
  await test('valeurs par défaut du cahier des charges : 3 exercices, 60 min, 2 remplacements, 2 s', async () => {
    const s = await ouvrirSession(prof, exercices);
    const d = (await E.lire('devoir_sessions/' + s.sessionId)).donnees;
    assert.deepStrictEqual([d.exercices_par_etudiant, d.duree_minutes, d.quota_remplacements, d.delai_perte_focus_ms], [3, 60, 2, 2000]);
    assert.strictEqual(d.etudiants.length, 11);
    assert.ok(/^[A-Z2-9]{6}$/.test(d.code));
    assert.strictEqual(s.avertissement, null);
    await E.appeler('updateSession', { session_id: s.sessionId, action: 'fermer' }, prof.jeton);
  });
  await test('avertit si la sélection ne couvre pas les remplacements ; refuse si elle est trop petite', async () => {
    const petit = await E.appeler('createSession', { titre: 'Petit', classe_id: 'classe-demo', exercice_ids: exercices.slice(0, 4).map((x) => x.id) }, prof.jeton);
    assert.ok(petit.ok && /remplacement/.test(petit.resultat.avertissement));
    const trop = await E.appeler('createSession', { titre: 'Trop petit', classe_id: 'classe-demo', exercice_ids: exercices.slice(0, 2).map((x) => x.id) }, prof.jeton);
    assert.strictEqual(trop.code, 'FAILED_PRECONDITION');
    assert.ok((await E.appeler('updateSession', { session_id: petit.resultat.session_id, action: 'supprimer' }, prof.jeton)).ok);
  });

  console.log('MVP-2 — entrée');
  const s = await ouvrirSession(prof, exercices);
  await test('code invalide, ou session encore en brouillon : même message neutre', async () => {
    const u = await E.connexionAnonyme();
    const brouillon = await E.appeler('createSession', { titre: 'B', classe_id: 'classe-demo', exercice_ids: exercices.map((x) => x.id) }, prof.jeton);
    const faux = await E.appeler('joinSession', { code: 'ZZZZZZ' }, u.jeton);
    assert.strictEqual(faux.code, 'NOT_FOUND');
    assert.strictEqual(faux.message, 'Code invalide ou session fermée.');
    assert.strictEqual((await E.appeler('joinSession', { code: '' }, u.jeton)).message, faux.message);
    assert.strictEqual((await E.appeler('joinSession', { code: s.code }, null)).code, 'UNAUTHENTICATED');
    await E.appeler('updateSession', { session_id: brouillon.resultat.session_id, action: 'supprimer' }, prof.jeton);
  });
  await test('le code donne la liste des noms de la classe, aucun pris', async () => {
    const u = await E.connexionAnonyme();
    const r = await E.appeler('joinSession', { code: s.code.toLowerCase() }, u.jeton);
    assert.strictEqual(r.resultat.etape, 'choix');
    assert.strictEqual(r.resultat.etudiants.length, 11);
    assert.ok(r.resultat.etudiants.every((x) => x.pris === false && Object.keys(x).sort().join() === 'id,nom,pris'));
  });

  const etudiants = [];
  await test('11 étudiants entrent : 3 exercices distincts chacun, variantes tirées par le serveur', async () => {
    for (const e of classe.etudiants) etudiants.push(await entrer(s.code, e.id));
    assert.strictEqual(new Set(etudiants.map((x) => x.copieId)).size, 11);
    const signatures = new Set();
    for (const etu of etudiants) {
      const c = await copie(etu.copieId);
      const p = await prive(etu.copieId);
      assert.strictEqual(c.statut, 'connecte');
      assert.strictEqual(c.attributions.length, 3);
      const exIds = c.attributions.map((a) => p.attributions[a.id].exercice_id);
      assert.strictEqual(new Set(exIds).size, 3, 'exercices distincts');
      c.attributions.forEach((a) => {
        const pa = p.attributions[a.id];
        assert.ok(typeof pa.corrige.valeur === 'number' && isFinite(pa.corrige.valeur));
        assert.ok(a.enonce.indexOf('{{') === -1, 'énoncé instancié');
        signatures.add(pa.exercice_id + JSON.stringify(pa.valeurs));
      });
      assert.strictEqual(Math.round((c.fin - c.debut) / 60000), 60);
    }
    assert.ok(signatures.size > 20, 'les variantes diffèrent d\'un étudiant à l\'autre (' + signatures.size + ' distinctes sur 33)');
  });
  await test('un exercice à ligne de catalogue est stocké sans tableau imbriqué et tiré correctement', async () => {
    const brut = (await E.lire('devoir_exercices/demo-surface')).donnees;
    const lignes = brut.parametres.find((p) => p.nom === 'mur').lignes;
    assert.ok(lignes.every((l) => !Array.isArray(l) && Array.isArray(l.v)), 'lignes stockées sous la forme { v: [..] }');
    const s = await ouvrirSession(prof, exercices.filter((x) => x.id === 'demo-surface'), { exercices_par_etudiant: 1 });
    const etu = await entrer(s.code, 'etu-01');
    const c = await copie(etu.copieId);
    const p = await prive(etu.copieId);
    assert.strictEqual(c.attributions.length, 1);
    assert.ok(/Un mur (de refend|de façade|pignon) mesure/.test(c.attributions[0].enonce), c.attributions[0].enonce);
    const v = p.attributions[c.attributions[0].id].valeurs;
    assert.ok([2.5, 2.7, 3].indexOf(v.h) !== -1, 'hauteur prise dans la ligne tirée : ' + JSON.stringify(v));
    await E.appeler('updateSession', { session_id: s.sessionId, action: 'fermer' }, prof.jeton);
  });
  await test('un nom déjà pris est signalé et refusé à un autre poste', async () => {
    const u = await E.connexionAnonyme();
    const liste = await E.appeler('joinSession', { code: s.code }, u.jeton);
    assert.ok(liste.resultat.etudiants.every((x) => x.pris === true));
    assert.strictEqual((await E.appeler('joinSession', { code: s.code, etudiant_id: 'etu-01' }, u.jeton)).code, 'ALREADY_EXISTS');
    assert.strictEqual((await E.appeler('joinSession', { code: s.code, etudiant_id: 'inconnu' }, u.jeton)).code, 'NOT_FOUND');
  });

  console.log('MVP-2 — brouillon');
  const alice = etudiants[0];
  const bilal = etudiants[1];
  let attAlice;
  await test('le brouillon est enregistré, versionné, et la copie passe « en cours »', async () => {
    attAlice = (await copie(alice.copieId)).attributions;
    const r1 = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attAlice[0].id, blocs: { methode: 'R = U / I' }, exercice_courant: attAlice[0].id }, alice.jeton);
    assert.deepStrictEqual([r1.resultat.enregistre, r1.resultat.version, r1.resultat.statut], [true, 1, 'en_cours']);
    const r2 = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attAlice[0].id, blocs: { methode: 'R = U / I', calcul: '230 / 5' } }, alice.jeton);
    assert.strictEqual(r2.resultat.version, 2);
    const identique = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attAlice[0].id, blocs: { methode: 'R = U / I', calcul: '230 / 5' } }, alice.jeton);
    assert.deepStrictEqual([identique.resultat.enregistre, identique.resultat.version], [false, 2]);
    const c = await copie(alice.copieId);
    assert.strictEqual(c.reponses[attAlice[0].id].blocs.calcul, '230 / 5');
    assert.ok(Math.abs(r2.resultat.maintenant - Date.now()) < 5000, 'heure serveur renvoyée');
  });
  await test('l\'historique de brouillon garde les 5 dernières versions, côté enseignant seulement', async () => {
    for (let i = 0; i < 6; i++) {
      await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attAlice[1].id, blocs: { methode: 'version ' + i } }, alice.jeton);
    }
    const h = (await prive(alice.copieId)).historique[attAlice[1].id];
    assert.strictEqual(h.length, 5);
    assert.strictEqual(h[4].blocs.methode, 'version 5');
    assert.strictEqual((await copie(alice.copieId)).historique, undefined);
  });
  await test('refus : copie d\'un autre, bloc inconnu, texte trop long, exercice étranger', async () => {
    const base = { copie_id: alice.copieId, attribution_id: attAlice[0].id };
    assert.strictEqual((await E.appeler('saveDraft', Object.assign({}, base, { blocs: { methode: 'triche' } }), bilal.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('saveDraft', { copie_id: 'inexistante', attribution_id: 'x', blocs: {} }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('saveDraft', Object.assign({}, base, { blocs: { note: '20' } }), alice.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('saveDraft', Object.assign({}, base, { blocs: { methode: 'x'.repeat(2001) } }), alice.jeton)).code, 'INVALID_ARGUMENT');
    const attBilal = (await copie(bilal.copieId)).attributions[0].id;
    assert.strictEqual((await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attBilal, blocs: { methode: 'x' } }, alice.jeton)).code, 'NOT_FOUND');
    assert.strictEqual((await E.appeler('submitCopy', { copie_id: alice.copieId }, bilal.jeton)).code, 'PERMISSION_DENIED');
  });

  console.log('MVP-2 — reconnexion');
  await test('même navigateur : la reconnexion reprend la même copie, réponses comprises', async () => {
    const r = await E.appeler('joinSession', { code: s.code }, alice.jeton);
    assert.deepStrictEqual([r.resultat.etape, r.resultat.copie_id], ['copie', alice.copieId]);
    const c = await copie(alice.copieId);
    assert.strictEqual(c.reponses[attAlice[0].id].blocs.methode, 'R = U / I');
    assert.strictEqual(c.exercice_courant, attAlice[0].id);
    assert.ok((await evenements(alice.copieId)).some((e) => e.type === 'reconnect'));
  });
  await test('autre poste : après libération du nom, la copie est reprise là où elle en était', async () => {
    const autrePoste = await E.connexionAnonyme();
    assert.strictEqual((await E.appeler('joinSession', { code: s.code, etudiant_id: alice.etudiantId }, autrePoste.jeton)).code, 'ALREADY_EXISTS');
    assert.ok((await E.appeler('releaseName', { copie_id: alice.copieId }, prof.jeton)).ok);
    const liste = await E.appeler('joinSession', { code: s.code }, autrePoste.jeton);
    assert.strictEqual(liste.resultat.etudiants.find((x) => x.id === alice.etudiantId).pris, false);
    const r = await E.appeler('joinSession', { code: s.code, etudiant_id: alice.etudiantId }, autrePoste.jeton);
    assert.strictEqual(r.resultat.copie_id, alice.copieId);
    const c = await copie(alice.copieId);
    assert.strictEqual(c.uid, autrePoste.uid);
    assert.strictEqual(c.reponses[attAlice[0].id].blocs.calcul, '230 / 5');
    assert.strictEqual(c.attributions.length, 3, 'pas de nouveau tirage');
    // L'ancien poste a perdu la main ; le nouveau continue.
    assert.strictEqual((await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attAlice[0].id, blocs: { methode: 'ancien poste' } }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.lire('devoir_copies/' + alice.copieId, alice.jeton)).statut, 403);
    alice.jeton = autrePoste.jeton; alice.uid = autrePoste.uid;
    assert.ok((await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attAlice[0].id, blocs: { methode: 'R = U / I', calcul: '230 / 5', resultat: '46' } }, alice.jeton)).resultat.enregistre);
  });

  console.log('MVP-2 — minuteur et rendu (heure du serveur)');
  await test('prolonger ajoute des minutes aux copies en cours', async () => {
    const avant = (await copie(bilal.copieId)).fin.getTime();
    const r = await E.appeler('updateSession', { session_id: s.sessionId, action: 'prolonger', minutes: 10 }, prof.jeton);
    assert.strictEqual(r.resultat.copies_prolongees, 11);
    assert.strictEqual((await copie(bilal.copieId)).fin.getTime() - avant, 600000);
  });
  await test('rendu anticipé : copie figée, plus aucune modification', async () => {
    const r = await E.appeler('submitCopy', { copie_id: alice.copieId, brouillons: { [attAlice[2].id]: { methode: 'dernière saisie' } } }, alice.jeton);
    assert.strictEqual(r.resultat.statut, 'rendue');
    const c = await copie(alice.copieId);
    assert.strictEqual(c.statut, 'rendue');
    assert.ok(c.attributions.every((a) => a.statut === 'rendue'));
    assert.strictEqual(c.reponses[attAlice[2].id].blocs.methode, 'dernière saisie', 'la dernière saisie jointe au rendu est conservée');
    const apres = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: attAlice[0].id, blocs: { methode: 'après coup' } }, alice.jeton);
    assert.deepStrictEqual([apres.resultat.enregistre, apres.resultat.statut], [false, 'rendue']);
    assert.strictEqual((await copie(alice.copieId)).reponses[attAlice[0].id].blocs.methode, 'R = U / I');
    assert.strictEqual((await E.appeler('submitCopy', { copie_id: alice.copieId }, alice.jeton)).resultat.statut, 'rendue');
    assert.ok((await evenements(alice.copieId)).some((e) => e.type === 'submit'));
  });
  await test('un rendu « automatique » demandé avant l\'heure est refusé par le serveur', async () => {
    const r = await E.appeler('submitCopy', { copie_id: bilal.copieId, auto: true }, bilal.jeton);
    assert.strictEqual(r.resultat.trop_tot, true);
    assert.strictEqual((await copie(bilal.copieId)).statut, 'connecte');
  });
  await test('temps écoulé : l\'enregistrement est refusé et la copie rendue automatiquement', async () => {
    const att = (await copie(bilal.copieId)).attributions[0].id;
    await E.appeler('saveDraft', { copie_id: bilal.copieId, attribution_id: att, blocs: { methode: 'dans les temps' } }, bilal.jeton);
    await E.majChamps('devoir_copies/' + bilal.copieId, { fin: new Date(Date.now() - 60000) });   // simule 1 h plus tard
    const r = await E.appeler('saveDraft', { copie_id: bilal.copieId, attribution_id: att, blocs: { methode: 'hors délai' } }, bilal.jeton);
    assert.deepStrictEqual([r.resultat.enregistre, r.resultat.statut], [false, 'rendue_auto']);
    const c = await copie(bilal.copieId);
    assert.strictEqual(c.statut, 'rendue_auto');
    assert.strictEqual(c.reponses[att].blocs.methode, 'dans les temps');
    assert.ok((await evenements(bilal.copieId)).some((e) => e.type === 'timeout'));
  });
  await test('rendu à zéro : la saisie arrivée dans la tolérance réseau est gardée, statut rendue_auto', async () => {
    const chloe = etudiants[2];
    const att = (await copie(chloe.copieId)).attributions[0].id;
    await E.majChamps('devoir_copies/' + chloe.copieId, { fin: new Date(Date.now() - 1000) });
    const r = await E.appeler('submitCopy', { copie_id: chloe.copieId, auto: true, brouillons: { [att]: { methode: 'écrit à la dernière seconde' } } }, chloe.jeton);
    assert.strictEqual(r.resultat.statut, 'rendue_auto');
    assert.strictEqual((await copie(chloe.copieId)).reponses[att].blocs.methode, 'écrit à la dernière seconde');
  });
  await test('étudiant parti sans rendre : le tableau de bord déclenche le rendu automatique', async () => {
    const dimitri = etudiants[3];
    await E.majChamps('devoir_copies/' + dimitri.copieId, { fin: new Date(Date.now() - 60000) });
    const r = await E.appeler('syncSession', { session_id: s.sessionId }, prof.jeton);
    assert.strictEqual(r.resultat.copies_rendues_auto, 1);
    assert.strictEqual((await copie(dimitri.copieId)).statut, 'rendue_auto');
  });
  await test('reconnexion après la fin du temps : la copie est rendue, pas rouverte', async () => {
    const emma = etudiants[4];
    await E.majChamps('devoir_copies/' + emma.copieId, { fin: new Date(Date.now() - 60000) });
    const r = await E.appeler('joinSession', { code: s.code }, emma.jeton);
    assert.strictEqual(r.resultat.copie_id, emma.copieId);
    assert.strictEqual((await copie(emma.copieId)).statut, 'rendue_auto');
  });

  console.log('MVP-2 — passage complet');
  await test('les 11 étudiants passent le devoir de bout en bout', async () => {
    for (const etu of etudiants) {
      const c = await copie(etu.copieId);
      if (['connecte', 'en_cours'].indexOf(c.statut) === -1) continue;
      for (const a of c.attributions) {
        const r = await E.appeler('saveDraft', { copie_id: etu.copieId, attribution_id: a.id, exercice_courant: a.id, blocs: { methode: 'formule', calcul: 'calcul', resultat: '42', unite: 'W' } }, etu.jeton);
        assert.ok(r.ok && r.resultat.enregistre, 'saveDraft ' + etu.etudiantId + ' : ' + r.message);
      }
      assert.strictEqual((await E.appeler('submitCopy', { copie_id: etu.copieId }, etu.jeton)).resultat.statut, 'rendue');
    }
    const toutes = (await E.chercher('devoir_copies', 'session_id', s.sessionId)).docs;
    assert.strictEqual(toutes.length, 11);
    assert.ok(toutes.every((c) => c.statut === 'rendue' || c.statut === 'rendue_auto'), toutes.map((c) => c.statut).join());
    assert.strictEqual(toutes.filter((c) => c.statut === 'rendue').length, 7);
  });
  await test('fermeture : le code ne fonctionne plus, les copies restantes sont rendues', async () => {
    const s2 = await ouvrirSession(prof, exercices);
    const etu = await entrer(s2.code, 'etu-01');
    const r = await E.appeler('updateSession', { session_id: s2.sessionId, action: 'fermer' }, prof.jeton);
    assert.strictEqual(r.resultat.copies_rendues_auto, 1);
    assert.strictEqual((await copie(etu.copieId)).statut, 'rendue_auto');
    const u = await E.connexionAnonyme();
    assert.strictEqual((await E.appeler('joinSession', { code: s2.code }, u.jeton)).message, 'Code invalide ou session fermée.');
    assert.strictEqual((await E.lire('devoir_codes/' + s2.code)).ok, false);
    assert.strictEqual((await E.lire('devoir_copies/' + etu.copieId, etu.jeton)).statut, 200, 'l\'étudiant voit toujours l\'écran « copie rendue »');
  });
  await test('tirage : priorité aux exercices jamais faits lors d\'un devoir précédent', async () => {
    // etu-01 a déjà reçu 3 exercices au premier devoir, puis 3 au second : sur 6, tous sont vus.
    // etu-05 n'a fait que le premier devoir : il doit recevoir exactement les 3 autres.
    const s3 = await ouvrirSession(prof, exercices);
    const emma = etudiants[4];
    const avant = Object.values((await prive(emma.copieId)).attributions).map((a) => a.exercice_id);
    const etu = await entrer(s3.code, emma.etudiantId);
    const apres = Object.values((await prive(etu.copieId)).attributions).map((a) => a.exercice_id);
    assert.strictEqual(apres.filter((id) => avant.indexOf(id) !== -1).length, 0, 'aucun exercice déjà fait : ' + apres.join());
    await E.appeler('updateSession', { session_id: s3.sessionId, action: 'fermer' }, prof.jeton);
  });
  await test('limitation des tentatives : 5 codes faux bloquent ce poste, même avec le bon code', async () => {
    const s4 = await ouvrirSession(prof, exercices);
    const u = await E.connexionAnonyme();
    for (let i = 0; i < 5; i++) assert.strictEqual((await E.appeler('joinSession', { code: 'AAAAA' + i }, u.jeton)).code, 'NOT_FOUND');
    assert.strictEqual((await E.appeler('joinSession', { code: s4.code }, u.jeton)).code, 'RESOURCE_EXHAUSTED');
    const autre = await E.connexionAnonyme();
    assert.ok((await E.appeler('joinSession', { code: s4.code }, autre.jeton)).ok, 'les autres postes ne sont pas bloqués');
    await E.appeler('updateSession', { session_id: s4.sessionId, action: 'fermer' }, prof.jeton);
  });
}

// ── MVP-3 : anti-triche ──────────────────────────────────────────────────────
// Délai de perte de focus ramené à 500 ms dans ces sessions pour garder des tests rapides ;
// la valeur par défaut (2 s) est vérifiée dans la suite de bout en bout.
const DELAI = 500;

async function sortir(etu, ms, source) {
  const c = await copie(etu.copieId);
  const att = c.exercice_courant;
  const depart = await E.appeler('logEvent', { copie_id: etu.copieId, type: 'focus_perdu', source: source || 'visibility_hidden', attribution_id: att }, etu.jeton);
  assert.ok(depart.ok, 'focus_perdu : ' + depart.message);
  await E.attendre(ms);
  const retour = await E.appeler('logEvent', { copie_id: etu.copieId, type: 'focus_revenu', source: source || 'visibility_hidden', attribution_id: att, duree_client_ms: 0 }, etu.jeton);
  assert.ok(retour.ok, 'focus_revenu : ' + retour.message);
  return retour.resultat;
}

function actives(c) { return c.attributions.filter((a) => a.statut === 'active'); }

async function suiteMvp3(test, prof, exercices) {
  console.log('MVP-3 — perte de focus');
  const s = await ouvrirSession(prof, exercices, { delai_perte_focus_ms: DELAI });
  const alice = await entrer(s.code, 'etu-01');
  let avant;
  await test('retour avant le délai : aucun incident, mais l\'absence brève est journalisée', async () => {
    avant = await copie(alice.copieId);
    await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: avant.attributions[0].id, blocs: { methode: 'ma réponse' } }, alice.jeton);
    const r = await sortir(alice, 50);
    assert.deepStrictEqual([r.incident, r.bref], [false, true]);
    const c = await copie(alice.copieId);
    assert.strictEqual(c.changements_utilises, 0);
    assert.strictEqual(actives(c).length, 3);
    assert.strictEqual(c.absence_depuis, null);
    const ev = (await evenements(alice.copieId)).filter((e) => e.type === 'visibility_hidden');
    assert.strictEqual(ev.length, 1);
    assert.deepStrictEqual([ev[0].bref, ev[0].incident], [true, false]);
    assert.ok(ev[0].duree_absence_ms >= 50 && ev[0].duree_absence_ms < DELAI, 'durée mesurée par le serveur : ' + ev[0].duree_absence_ms);
  });
  await test('absence au-delà du délai : l\'exercice en cours est invalidé et remplacé', async () => {
    const r = await sortir(alice, DELAI + 200);
    assert.deepStrictEqual([r.incident, r.effet, r.numero], [true, 'remplacement', 1]);
    const c = await copie(alice.copieId);
    const p = await prive(alice.copieId);
    const invalide = c.attributions.find((a) => a.id === avant.attributions[0].id);
    const remplacant = c.attributions.find((a) => a.remplace === invalide.id);
    assert.strictEqual(invalide.statut, 'invalidee');
    assert.ok(remplacant && remplacant.statut === 'active' && remplacant.rang === invalide.rang, 'remplaçant actif au même rang');
    assert.strictEqual(c.attributions.length, 4);
    assert.strictEqual(c.changements_utilises, 1);
    assert.strictEqual(c.exercice_courant, remplacant.id);
    assert.ok(/remplacé par un nouvel exercice/.test(c.message.texte) && /1 remplacement possible/.test(c.message.texte), c.message.texte);
    assert.ok(!/trich|fraud|sanction/i.test(c.message.texte), 'message sans accusation');
    const dejaLa = avant.attributions.map((a) => p.attributions[a.id].exercice_id);
    assert.ok(dejaLa.indexOf(p.attributions[remplacant.id].exercice_id) === -1, 'exercice non encore attribué à cet étudiant');
    assert.ok(typeof p.attributions[remplacant.id].corrige.valeur === 'number', 'corrigé du remplaçant calculé côté serveur');
    assert.strictEqual(c.reponses[invalide.id].blocs.methode, 'ma réponse', 'réponses de l\'exercice invalidé archivées');
    const ev = (await evenements(alice.copieId)).find((e) => e.incident);
    assert.deepStrictEqual([ev.effet, ev.attribution_id, ev.remplacement_id, ev.annule], ['remplacement', invalide.id, remplacant.id, false]);
    assert.ok(ev.duree_absence_ms >= DELAI, 'durée ' + ev.duree_absence_ms);
  });
  await test('la copie de l\'étudiant n\'expose toujours ni corrigé ni barème après un remplacement', async () => {
    const brut = JSON.stringify((await E.lire('devoir_copies/' + alice.copieId, alice.jeton)).donnees);
    ['corrige', 'bareme', 'points', 'valeurs', 'exercice_id'].forEach((mot) => assert.ok(brut.indexOf('"' + mot) === -1, mot));
    assert.strictEqual((await E.lire('devoir_copies_prive/' + alice.copieId, alice.jeton)).statut, 403);
  });
  await test('on ne peut plus écrire dans un exercice invalidé', async () => {
    const r = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: avant.attributions[0].id, blocs: { methode: 'trop tard' } }, alice.jeton);
    assert.strictEqual(r.resultat.enregistre, false);
    assert.strictEqual((await copie(alice.copieId)).reponses[avant.attributions[0].id].blocs.methode, 'ma réponse');
  });
  await test('2e incident : nouveau remplacement ; 3e incident : copie verrouillée, plus de remplacement', async () => {
    assert.deepStrictEqual((await sortir(alice, DELAI + 200, 'blur')).effet, 'remplacement');
    let c = await copie(alice.copieId);
    assert.strictEqual(c.changements_utilises, 2);
    assert.strictEqual(c.attributions.length, 5);
    assert.ok(/prochaine sortie/.test(c.message.texte));
    const r3 = await sortir(alice, DELAI + 200);
    assert.deepStrictEqual([r3.effet, r3.numero], ['verrouillage', 3]);
    c = await copie(alice.copieId);
    assert.strictEqual(c.statut, 'verrouillee');
    assert.strictEqual(c.attributions.length, 5, 'pas de 3e remplacement');
    assert.strictEqual(actives(c).length, 3);
    const types = (await evenements(alice.copieId)).filter((e) => e.incident).map((e) => e.type).sort();
    assert.deepStrictEqual(types, ['blur', 'visibility_hidden', 'visibility_hidden']);
  });
  await test('copie verrouillée : ni enregistrement ni rendu par l\'étudiant', async () => {
    const c = await copie(alice.copieId);
    const r = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: actives(c)[0].id, blocs: { methode: 'x' } }, alice.jeton);
    assert.deepStrictEqual([r.resultat.enregistre, r.resultat.statut], [false, 'verrouillee']);
    assert.strictEqual((await E.appeler('submitCopy', { copie_id: alice.copieId }, alice.jeton)).resultat.statut, 'verrouillee');
    assert.strictEqual((await sortir(alice, DELAI + 200)).incident, false, 'plus d\'incident compté sur une copie verrouillée');
  });
  await test('l\'enseignant déverrouille la copie ; une nouvelle sortie la verrouille de nouveau', async () => {
    assert.strictEqual((await E.appeler('unlockCopy', { copie_id: alice.copieId }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.ok((await E.appeler('unlockCopy', { copie_id: alice.copieId }, prof.jeton)).ok);
    let c = await copie(alice.copieId);
    assert.strictEqual(c.statut, 'en_cours');
    assert.ok((await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: actives(c)[0].id, blocs: { methode: 'je continue' } }, alice.jeton)).resultat.enregistre);
    assert.strictEqual((await sortir(alice, DELAI + 200)).effet, 'verrouillage');
    assert.strictEqual((await E.appeler('unlockCopy', { copie_id: alice.copieId }, prof.jeton)).ok, true);
  });

  console.log('MVP-3 — annulation d\'un incident');
  await test('l\'incident le plus récent s\'annule en premier ; le verrouillage annulé rouvre la copie', async () => {
    const incidents = (await evenements(alice.copieId)).filter((e) => e.incident && !e.annule).sort((a, b) => a.numero - b.numero);
    assert.deepStrictEqual(incidents.map((e) => e.numero), [1, 2, 3, 4]);
    assert.strictEqual((await E.appeler('cancelIncident', { evenement_id: incidents[0]._id }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('cancelIncident', { evenement_id: incidents[0]._id }, prof.jeton)).code, 'FAILED_PRECONDITION');
    await E.appeler('unlockCopy', { copie_id: alice.copieId }, prof.jeton).catch(() => {});
    // On reverrouille pour vérifier que l'annulation du dernier incident rouvre bien la copie.
    await E.majChamps('devoir_copies/' + alice.copieId, { statut: 'verrouillee' });
    const r = await E.appeler('cancelIncident', { evenement_id: incidents[3]._id }, prof.jeton);
    assert.ok(r.ok, r.message);
    let c = await copie(alice.copieId);
    assert.deepStrictEqual([c.statut, c.changements_utilises], ['en_cours', 3]);
    assert.ok((await E.appeler('cancelIncident', { evenement_id: incidents[2]._id }, prof.jeton)).ok);
    assert.strictEqual((await E.appeler('cancelIncident', { evenement_id: incidents[2]._id }, prof.jeton)).code, 'FAILED_PRECONDITION', 'déjà annulé');
  });
  await test('remplacement annulé : l\'exercice d\'origine redevient actif, le remplaçant est conservé non noté', async () => {
    const incidents = (await evenements(alice.copieId)).filter((e) => e.incident && !e.annule).sort((a, b) => a.numero - b.numero);
    assert.deepStrictEqual(incidents.map((e) => e.numero), [1, 2]);
    assert.ok((await E.appeler('cancelIncident', { evenement_id: incidents[1]._id }, prof.jeton)).ok);
    assert.ok((await E.appeler('cancelIncident', { evenement_id: incidents[0]._id }, prof.jeton)).ok);
    const c = await copie(alice.copieId);
    assert.strictEqual(c.changements_utilises, 0);
    const origine = c.attributions.find((a) => a.id === avant.attributions[0].id);
    assert.strictEqual(origine.statut, 'active');
    assert.strictEqual(origine.motif, undefined);
    assert.strictEqual(c.exercice_courant, origine.id);
    assert.strictEqual(c.attributions.filter((a) => a.statut === 'remplacement_annule').length, 2);
    assert.deepStrictEqual(actives(c).map((a) => a.id).sort(), avant.attributions.map((a) => a.id).sort(), 'retour aux 3 exercices du départ');
    assert.strictEqual(c.reponses[origine.id].blocs.methode, 'ma réponse');
    assert.ok(/retrouvez l'exercice précédent/.test(c.message.texte));
    assert.ok((await evenements(alice.copieId)).filter((e) => e.type === 'incident_annule').length === 4);
  });
  await test('annulation après le rendu : l\'exercice invalidé est rétabli comme rendu', async () => {
    const bilal = await entrer(s.code, 'etu-02');
    const c0 = await copie(bilal.copieId);
    await sortir(bilal, DELAI + 200);
    await E.appeler('submitCopy', { copie_id: bilal.copieId }, bilal.jeton);
    const incident = (await evenements(bilal.copieId)).find((e) => e.incident);
    assert.ok((await E.appeler('cancelIncident', { evenement_id: incident._id }, prof.jeton)).ok);
    const c = await copie(bilal.copieId);
    assert.strictEqual(c.statut, 'rendue');
    assert.strictEqual(c.attributions.find((a) => a.id === c0.attributions[0].id).statut, 'rendue');
    assert.strictEqual(c.attributions.find((a) => a.remplace === c0.attributions[0].id).statut, 'remplacement_annule');
  });

  console.log('MVP-3 — collage, cas limites');
  const chloe = await entrer(s.code, 'etu-03');
  await test('un collage ou un glisser-déposer bloqué est journalisé et compté', async () => {
    const att = (await copie(chloe.copieId)).attributions[0].id;
    assert.ok((await E.appeler('logEvent', { copie_id: chloe.copieId, type: 'paste_blocked', attribution_id: att, bloc: 'calcul' }, chloe.jeton)).ok);
    assert.ok((await E.appeler('logEvent', { copie_id: chloe.copieId, type: 'drop_blocked', attribution_id: att, bloc: 'methode' }, chloe.jeton)).ok);
    assert.strictEqual((await copie(chloe.copieId)).collages_bloques, 2);
    const ev = (await evenements(chloe.copieId)).filter((e) => /_blocked$/.test(e.type));
    assert.deepStrictEqual(ev.map((e) => e.type).sort(), ['drop_blocked', 'paste_blocked']);
    assert.ok(ev.every((e) => e.attribution_id === att && e.horodatage instanceof Date));
    assert.strictEqual((await copie(chloe.copieId)).changements_utilises, 0, 'un collage ne remplace pas l\'exercice');
  });
  await test('refus : événement sur la copie d\'un autre, type inconnu, fonctions de l\'enseignant', async () => {
    assert.strictEqual((await E.appeler('logEvent', { copie_id: chloe.copieId, type: 'paste_blocked' }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('logEvent', { copie_id: chloe.copieId, type: 'focus_revenu', duree_client_ms: 9000 }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('logEvent', { copie_id: chloe.copieId, type: 'submit' }, chloe.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('replaceAssignment', { copie_id: chloe.copieId, attribution_id: 'x' }, chloe.jeton)).code, 'PERMISSION_DENIED');
  });
  await test('signal de départ perdu : la durée déclarée au retour suffit à déclencher l\'incident', async () => {
    const r = await E.appeler('logEvent', { copie_id: chloe.copieId, type: 'focus_revenu', source: 'blur', duree_client_ms: 4000 }, chloe.jeton);
    assert.deepStrictEqual([r.resultat.incident, r.resultat.effet], [true, 'remplacement']);
    assert.strictEqual((await evenements(chloe.copieId)).find((e) => e.incident).duree_absence_ms, 4000);
  });
  await test('onglet quitté puis fermé : l\'absence est soldée à la reconnexion', async () => {
    const dimitri = await entrer(s.code, 'etu-04');
    await E.appeler('logEvent', { copie_id: dimitri.copieId, type: 'focus_perdu', source: 'visibility_hidden' }, dimitri.jeton);
    assert.ok((await copie(dimitri.copieId)).absence_depuis instanceof Date, 'le tableau de bord voit l\'absence en cours');
    await E.attendre(DELAI + 200);
    await E.appeler('joinSession', { code: s.code, absence_client_ms: 61000 }, dimitri.jeton);
    const c = await copie(dimitri.copieId);
    assert.strictEqual(c.changements_utilises, 1);
    assert.strictEqual(c.absence_depuis, null);
    const ev = await evenements(dimitri.copieId);
    assert.strictEqual(ev.find((e) => e.type === 'reconnect').duree_absence_ms, 61000);
  });
  await test('reconnexion simple (plantage, rafraîchissement) : aucun incident', async () => {
    const emma = await entrer(s.code, 'etu-05');
    await E.appeler('joinSession', { code: s.code, absence_client_ms: 30000 }, emma.jeton);
    const c = await copie(emma.copieId);
    assert.deepStrictEqual([c.changements_utilises, c.attributions.length], [0, 3]);
  });
  await test('l\'enseignant remplace un exercice à la main, sans toucher au compteur', async () => {
    const farid = await entrer(s.code, 'etu-06');
    const c0 = await copie(farid.copieId);
    const r = await E.appeler('replaceAssignment', { copie_id: farid.copieId, attribution_id: c0.attributions[1].id }, prof.jeton);
    assert.ok(r.ok, r.message);
    const c = await copie(farid.copieId);
    assert.strictEqual(c.changements_utilises, 0);
    assert.strictEqual(c.attributions.find((a) => a.id === c0.attributions[1].id).statut, 'invalidee');
    assert.strictEqual(c.attributions.find((a) => a.id === r.resultat.remplacement_id).rang, 2);
  });
  await test('sélection épuisée : un exercice déjà vu est réutilisé avec de nouvelles valeurs', async () => {
    const petite = await ouvrirSession(prof, exercices.slice(0, 4), { delai_perte_focus_ms: DELAI });
    const gaelle = await entrer(petite.code, 'etu-07');
    assert.strictEqual((await sortir(gaelle, DELAI + 200)).effet, 'remplacement');   // prend le 4e exercice
    const r = await sortir(gaelle, DELAI + 200);                                      // plus aucun inédit
    assert.strictEqual(r.effet, 'remplacement');
    const c = await copie(gaelle.copieId);
    const p = await prive(gaelle.copieId);
    const idsActifs = actives(c).map((a) => p.attributions[a.id].exercice_id);
    assert.strictEqual(new Set(idsActifs).size, 3, 'jamais deux fois le même exercice parmi les exercices en cours');
    await E.appeler('updateSession', { session_id: petite.sessionId, action: 'fermer' }, prof.jeton);
  });
  await test('fermeture : une copie verrouillée le reste, ses exercices sont figés', async () => {
    const hugo = await entrer(s.code, 'etu-08');
    for (let i = 0; i < 3; i++) await sortir(hugo, DELAI + 200);
    assert.strictEqual((await copie(hugo.copieId)).statut, 'verrouillee');
    await E.appeler('updateSession', { session_id: s.sessionId, action: 'fermer' }, prof.jeton);
    const c = await copie(hugo.copieId);
    assert.strictEqual(c.statut, 'verrouillee');
    assert.strictEqual(actives(c).length, 0);
    assert.strictEqual(c.attributions.filter((a) => a.statut === 'rendue').length, 3);
  });
}

// ── MVP-4 : correction (IA simulée par scripts/lib/devoir-fausse-ia.js) ──────────────
async function fiches(copieId) {
  const docs = (await E.chercher('devoir_corrections', 'copie_id', copieId)).docs;
  return docs.sort((a, b) => a.rang - b.rang);
}

// Compose puis rend une copie. reponses : une entrée par exercice (objet de blocs, ou null).
async function composerEtRendre(etu, reponses) {
  const c = await copie(etu.copieId);
  const actifs = c.attributions.filter((a) => a.statut === 'active').sort((a, b) => a.rang - b.rang);
  for (let i = 0; i < actifs.length; i++) {
    if (!reponses[i]) continue;
    const r = await E.appeler('saveDraft', { copie_id: etu.copieId, attribution_id: actifs[i].id, blocs: reponses[i] }, etu.jeton);
    assert.ok(r.ok, r.message);
  }
  assert.strictEqual((await E.appeler('submitCopy', { copie_id: etu.copieId }, etu.jeton)).resultat.statut, 'rendue');
  return actifs.map((a) => a.id);
}

const COMPLET = { methode: 'P = U x I', calcul: '230 x 5', resultat: '1150', unite: 'W' };

async function suiteMvp4(test, prof, exercices, fausseIa) {
  console.log('MVP-4 — pré-correction par l\'IA (simulée)');
  const s = await ouvrirSession(prof, exercices, { delai_perte_focus_ms: DELAI });
  const alice = await entrer(s.code, 'etu-01');
  const bilal = await entrer(s.code, 'etu-02');
  const chloe = await entrer(s.code, 'etu-03');
  const dimitri = await entrer(s.code, 'etu-04');
  const emma = await entrer(s.code, 'etu-05');
  const farid = await entrer(s.code, 'etu-06');
  const attAlice = await composerEtRendre(alice, [COMPLET, COMPLET, COMPLET]);
  const attBilal = await composerEtRendre(bilal, [{ methode: 'IA_JSON_INVALIDE_UNE_FOIS' }, { methode: 'IA_TOUJOURS_INVALIDE', calcul: '3 x 4' }, null]);
  const attChloe = await composerEtRendre(chloe, [Object.assign({}, COMPLET, { calcul: 'IA_SOMME_FAUSSE' }), { methode: 'IA_CONFIANCE_BASSE' }, { methode: 'Q = m c dT' }]);
  await sortir(emma, DELAI + 200);                       // un exercice invalidé dans la copie d'Emma
  await composerEtRendre(emma, [COMPLET, COMPLET, COMPLET]);
  await composerEtRendre(farid, [COMPLET, { methode: 'formule seule' }, null]);
  const appelsPour = (ids) => fausseIa.journal.filter((r) => ids.some((id) => r.message.indexOf('"attribution_id": "' + id + '"') !== -1));

  await test('seul l\'enseignant lance, modifie et valide ; une copie en cours est refusée', async () => {
    assert.strictEqual((await E.appeler('runPreCorrection', { copie_id: alice.copieId }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('saveCorrection', { attribution_id: attAlice[0], criteres: [{ critere_id: 'methode', points_obtenus: 40 }] }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('validateCorrection', { copie_id: alice.copieId }, alice.jeton)).code, 'PERMISSION_DENIED');
    assert.strictEqual((await E.appeler('runPreCorrection', { copie_id: dimitri.copieId }, prof.jeton)).code, 'FAILED_PRECONDITION');
    assert.strictEqual((await E.appeler('validateCorrection', { copie_id: alice.copieId }, prof.jeton)).code, 'FAILED_PRECONDITION', 'pas de validation sans fiche');
    assert.strictEqual(fausseIa.journal.length, 0, 'aucun appel à l\'IA avant le lancement par l\'enseignant');
  });
  await test('lancement manuel : une copie est pré-corrigée, sortie JSON conforme à la section 6', async () => {
    const r = await E.appeler('runPreCorrection', { copie_id: alice.copieId }, prof.jeton);
    assert.ok(r.ok, r.message);
    assert.deepStrictEqual([r.resultat.corrigees, r.resultat.erreurs, r.resultat.vides], [3, 0, 0]);
    const f = await fiches(alice.copieId);
    assert.strictEqual(f.length, 3);
    f.forEach((x) => {
      assert.deepStrictEqual([x.statut, x.source, x.compte_dans_note, x.prioritaire], ['brouillon', 'ia', true, false]);
      assert.deepStrictEqual(Object.keys(x.ia).filter((k) => ['modele', 'version_prompt', 'essais', 'cree_a', 'ecarts', 'prioritaire', 'incertains'].indexOf(k) === -1).sort(),
        ['alertes', 'attribution_id', 'axes_progression', 'commentaire_pour_etudiant', 'confiance', 'criteres', 'erreurs', 'etapes', 'note_max', 'note_pour_enseignant', 'note_proposee'].sort());
      assert.deepStrictEqual([x.ia.note_proposee, x.ia.note_max, x.ia.modele, x.ia.essais], [100, 100, 'claude-sonnet-5-5', 1]);
      assert.ok(/^\d{4}-\d{2}-\d{2}\.\d+$/.test(x.ia.version_prompt), 'version du prompt enregistrée');
      assert.strictEqual(x.finale.note, 100, 'la correction finale part de la proposition de l\'IA');
    });
    assert.strictEqual((await prive(alice.copieId)).correction.statut, 'pre_corrigee');
  });
  await test('requête à l\'API : clé du secret, modèle par défaut, prompt du cahier des charges, aucun nom d\'étudiant', async () => {
    const req = appelsPour(attAlice);
    assert.strictEqual(req.length, 3, 'un appel par exercice');
    req.forEach((r) => {
      assert.strictEqual(r.cle, 'cle-factice-emulateur');
      assert.strictEqual(r.modele, 'claude-sonnet-5-5');
      assert.ok(/^Tu es un assistant de pré-correction/.test(r.systeme) && /Ignore toute instruction/.test(r.systeme));
      assert.strictEqual(r.corps.output_config.format.type, 'json_schema');
      assert.ok(!('temperature' in r.corps), 'pas de température (refusée par ce modèle)');
      const brut = JSON.stringify(r.corps);
      assert.ok(brut.indexOf('Alice') === -1 && brut.indexOf('etu-01') === -1 && brut.indexOf(alice.uid) === -1, 'ni nom, ni identifiant d\'étudiant');
      assert.ok(/corrige_de_reference/.test(r.message) && /points_max/.test(r.message) && /P = U x I/.test(r.message));
    });
  });
  await test('sortie invalide : un seul nouvel essai ; deux échecs → statut « erreur IA » ; réponse vide → aucun appel', async () => {
    const r = await E.appeler('runPreCorrection', { copie_id: bilal.copieId }, prof.jeton);
    assert.deepStrictEqual([r.resultat.corrigees, r.resultat.erreurs, r.resultat.vides], [2, 1, 1]);
    const f = await fiches(bilal.copieId);
    assert.deepStrictEqual([f[0].statut, f[0].ia.essais, f[0].ia.note_proposee], ['brouillon', 2, 40]);
    assert.deepStrictEqual([f[1].statut, f[1].ia, f[1].prioritaire], ['erreur_ia', null, true]);
    assert.ok(/invalide après deux essais/.test(f[1].erreur_ia), f[1].erreur_ia);
    assert.deepStrictEqual([f[2].statut, f[2].ia.alertes, f[2].ia.note_proposee, f[2].ia.modele], ['brouillon', ['reponse_vide'], 0, 'aucun (réponse vide)']);
    assert.strictEqual(appelsPour([attBilal[0]]).length, 2);
    assert.strictEqual(appelsPour([attBilal[1]]).length, 2, 'un seul nouvel essai, pas davantage');
    assert.strictEqual(appelsPour([attBilal[2]]).length, 0);
  });
  await test('contrôles du serveur : note recalculée et écart signalé ; confiance basse mise en tête', async () => {
    await E.appeler('runPreCorrection', { copie_id: chloe.copieId }, prof.jeton);
    const f = await fiches(chloe.copieId);
    assert.strictEqual(f[0].ia.criteres[0].points_obtenus, 40, 'points ramenés au maximum du barème');
    assert.deepStrictEqual([f[0].ia.note_proposee, f[0].ia.note_max, f[0].prioritaire], [100, 100, true]);
    assert.ok(f[0].ia.ecarts.some((e) => /recalculée/.test(e)) && f[0].ia.ecarts.some((e) => /ramenés à 40/.test(e)), f[0].ia.ecarts.join(' | '));
    assert.deepStrictEqual([f[1].ia.confiance, f[1].ia.alertes, f[1].prioritaire], [0.3, ['incoherence'], true]);
    assert.strictEqual(f[2].prioritaire, false);
  });
  await test('relancer ne rappelle pas l\'IA pour ce qui est déjà pré-corrigé (budget)', async () => {
    const avant = fausseIa.journal.length;
    const r = await E.appeler('runPreCorrection', { copie_id: alice.copieId }, prof.jeton);
    assert.deepStrictEqual([r.resultat.corrigees, r.resultat.ignorees], [0, 3]);
    assert.strictEqual(fausseIa.journal.length, avant);
  });
  await test('l\'étudiant ne voit rien : ni fiche, ni note, ni statut de correction', async () => {
    for (const id of attAlice) assert.strictEqual((await E.lire('devoir_corrections/' + id, alice.jeton)).statut, 403);
    assert.strictEqual((await E.chercher('devoir_corrections', 'copie_id', alice.copieId, alice.jeton)).ok, false);
    assert.strictEqual((await E.lire('devoir_copies_prive/' + alice.copieId, alice.jeton)).statut, 403);
    const vue = (await E.lire('devoir_copies/' + alice.copieId, alice.jeton)).donnees;
    assert.strictEqual(vue.statut, 'rendue');
    const brut = JSON.stringify(vue);
    ['note', 'correction', 'points', 'criteres', 'commentaire', 'corrige', 'bareme', 'confiance'].forEach((mot) => assert.ok(brut.indexOf('"' + mot) === -1, 'la copie expose « ' + mot + ' »'));
  });

  console.log('MVP-4 — modification manuelle et validation');
  await test('modification manuelle : la note change, la proposition de l\'IA est conservée', async () => {
    const r = await E.appeler('saveCorrection', {
      attribution_id: attAlice[0], criteres: [{ critere_id: 'methode', points_obtenus: 25 }],
      commentaire_pour_etudiant: 'La formule est juste, mais elle n\'est pas justifiée.',
      axes_progression: [{ axe: 'Justification', action_concrete: 'Citer la loi utilisée avant de calculer.' }]
    }, prof.jeton);
    assert.ok(r.ok, r.message);
    assert.deepStrictEqual([r.resultat.note, r.resultat.note_max], [85, 100]);
    const f = (await fiches(alice.copieId))[0];
    assert.deepStrictEqual([f.finale.note, f.source, f.statut], [85, 'enseignant', 'brouillon']);
    assert.strictEqual(f.finale.criteres.find((c) => c.critere_id === 'methode').points_obtenus, 25);
    assert.strictEqual(f.finale.commentaire_pour_etudiant, 'La formule est juste, mais elle n\'est pas justifiée.');
    assert.deepStrictEqual([f.ia.note_proposee, f.ia.criteres.find((c) => c.critere_id === 'methode').points_obtenus], [100, 40], 'proposition de l\'IA intacte');
    assert.strictEqual(f.ia.commentaire_pour_etudiant, 'Correction simulée : le raisonnement est présent.');
    assert.strictEqual(f.modifications.length, 1);
    assert.deepStrictEqual([f.modifications[0].avant.note, f.modifications[0].apres.note, f.modifications[0].par], [100, 85, prof.uid]);
  });
  await test('refus : points hors barème, critère inconnu, fiche inexistante', async () => {
    assert.strictEqual((await E.appeler('saveCorrection', { attribution_id: attAlice[0], criteres: [{ critere_id: 'methode', points_obtenus: 41 }] }, prof.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('saveCorrection', { attribution_id: attAlice[0], criteres: [{ critere_id: 'methode', points_obtenus: -1 }] }, prof.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('saveCorrection', { attribution_id: attAlice[0], criteres: [{ critere_id: 'soin', points_obtenus: 5 }] }, prof.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('saveCorrection', { attribution_id: 'inconnue', criteres: [] }, prof.jeton)).code, 'NOT_FOUND');
    assert.strictEqual((await fiches(alice.copieId))[0].finale.note, 85);
  });
  await test('validation : note finale sur 20 arrondie au demi-point, fiches validées', async () => {
    const r = await E.appeler('validateCorrection', { copie_id: alice.copieId }, prof.jeton);
    assert.ok(r.ok, r.message);
    assert.deepStrictEqual([r.resultat.points, r.resultat.points_max, r.resultat.note_finale, r.resultat.note_sur], [285, 300, 19, 20]);
    assert.ok((await fiches(alice.copieId)).every((f) => f.statut === 'validee' && f.validee_par === prof.uid));
    const p = await prive(alice.copieId);
    assert.deepStrictEqual([p.correction.statut, p.correction.note_finale], ['validee', 19]);
  });
  await test('après validation, l\'étudiant ne voit toujours rien (pas de publication dans le MVP)', async () => {
    const vue = (await E.lire('devoir_copies/' + alice.copieId, alice.jeton)).donnees;
    assert.strictEqual(vue.statut, 'rendue');
    assert.ok(!/"note|"correction|"validee/.test(JSON.stringify(vue)), 'aucune trace de note ou de correction dans la copie');
    assert.strictEqual((await E.lire('devoir_corrections/' + attAlice[0], alice.jeton)).statut, 403);
    assert.strictEqual((await E.lire('devoir_copies_prive/' + alice.copieId, alice.jeton)).statut, 403);
  });
  await test('« erreur IA » : validation refusée tant que l\'exercice n\'est pas corrigé à la main', async () => {
    assert.strictEqual((await E.appeler('validateCorrection', { copie_id: bilal.copieId }, prof.jeton)).code, 'FAILED_PRECONDITION');
    const r = await E.appeler('saveCorrection', { attribution_id: attBilal[1], criteres: [{ critere_id: 'methode', points_obtenus: 20 }, { critere_id: 'calcul', points_obtenus: 15 }] }, prof.jeton);
    assert.strictEqual(r.resultat.note, 35);
    const v = await E.appeler('validateCorrection', { copie_id: bilal.copieId }, prof.jeton);
    // 40 + 35 + 0 = 75 points sur 300 → 5,0 / 20.
    assert.deepStrictEqual([v.resultat.points, v.resultat.note_finale], [75, 5]);
    const f = (await fiches(bilal.copieId))[1];
    assert.deepStrictEqual([f.statut, f.ia, f.source], ['validee', null, 'enseignant']);
  });
  await test('arrondi au demi-point : 16,67 → 16,5', async () => {
    // Chloé : 100 + 40 + 40 = 180 → 12,0 ; on retire 5 points → 175 / 300 × 20 = 11,67 → 11,5.
    await E.appeler('saveCorrection', { attribution_id: attChloe[0], criteres: [{ critere_id: 'unite', points_obtenus: 5 }] }, prof.jeton);
    const v = await E.appeler('validateCorrection', { copie_id: chloe.copieId }, prof.jeton);
    assert.deepStrictEqual([v.resultat.points, v.resultat.note_finale], [175, 11.5]);
  });
  await test('exercice invalidé : non noté par l\'IA ; l\'enseignant décide de sa prise en compte', async () => {
    const avant = fausseIa.journal.length;
    const r = await E.appeler('runPreCorrection', { copie_id: emma.copieId }, prof.jeton);
    assert.deepStrictEqual([r.resultat.corrigees, r.resultat.ignorees], [3, 1]);
    assert.strictEqual(fausseIa.journal.length - avant, 3, 'aucun appel pour l\'exercice invalidé');
    const f = await fiches(emma.copieId);
    const invalide = f.find((x) => x.statut_attribution === 'invalidee');
    assert.deepStrictEqual([invalide.statut, invalide.compte_dans_note, invalide.ia], ['non_notee', false, null]);
    let v = await E.appeler('validateCorrection', { copie_id: emma.copieId }, prof.jeton);
    assert.deepStrictEqual([v.resultat.points_max, v.resultat.note_finale], [300, 20]);
    // Décision de l'enseignant : compter l'exercice invalidé, noté 50 / 100.
    await E.appeler('saveCorrection', { attribution_id: invalide.attribution_id, compte_dans_note: true, criteres: [{ critere_id: 'methode', points_obtenus: 30 }, { critere_id: 'calcul', points_obtenus: 20 }] }, prof.jeton);
    assert.deepStrictEqual([(await prive(emma.copieId)).correction.statut, (await prive(emma.copieId)).correction.note_finale], ['pre_corrigee', null], 'une modification annule la validation');
    v = await E.appeler('validateCorrection', { copie_id: emma.copieId }, prof.jeton);
    assert.deepStrictEqual([v.resultat.points, v.resultat.points_max, v.resultat.note_finale], [350, 400, 17.5]);
  });
  await test('une copie validée n\'est pas pré-corrigée de nouveau ; une fiche modifiée n\'est jamais écrasée', async () => {
    const avant = fausseIa.journal.length;
    assert.strictEqual((await E.appeler('runPreCorrection', { copie_id: alice.copieId }, prof.jeton)).resultat.deja_validee, true);
    const r = await E.appeler('runPreCorrection', { copie_id: alice.copieId, forcer: true }, prof.jeton);
    assert.strictEqual(r.resultat.corrigees, 0);
    assert.strictEqual(fausseIa.journal.length, avant);
    assert.strictEqual((await fiches(alice.copieId))[0].finale.note, 85);
    assert.deepStrictEqual([(await prive(alice.copieId)).correction.statut, (await prive(alice.copieId)).correction.note_finale], ['validee', 19]);
  });
  await test('correction sans IA : fiches préparées, aucun appel, puis notation à la main et validation', async () => {
    const avant = fausseIa.journal.length;
    const r = await E.appeler('runPreCorrection', { copie_id: farid.copieId, sans_ia: true }, prof.jeton);
    assert.strictEqual(r.resultat.preparees, 3);
    assert.strictEqual(fausseIa.journal.length, avant);
    const f = await fiches(farid.copieId);
    assert.ok(f.every((x) => x.statut === 'brouillon' && x.ia === null && x.finale.note === 0));
    await E.appeler('saveCorrection', { attribution_id: f[0].attribution_id, criteres: [{ critere_id: 'methode', points_obtenus: 40 }, { critere_id: 'calcul', points_obtenus: 30 }, { critere_id: 'resultat', points_obtenus: 20 }, { critere_id: 'unite', points_obtenus: 10 }] }, prof.jeton);
    const v = await E.appeler('validateCorrection', { copie_id: farid.copieId }, prof.jeton);
    assert.deepStrictEqual([v.resultat.points, v.resultat.note_finale], [100, 6.5]);   // 100 / 300 × 20 = 6,67 → 6,5
  });
  await E.appeler('updateSession', { session_id: s.sessionId, action: 'fermer' }, prof.jeton);
}

// ── Questions rédigées et exercices mixtes ───────────────────────────────────
// Renvoie { redige, mixte } : l'attribution (publique) de chaque exercice de démonstration.
async function attributionsRedigees(copieId) {
  const c = await copie(copieId);
  const p = await prive(copieId);
  const de = (exId) => c.attributions.find((a) => p.attributions[a.id].exercice_id === exId);
  return { redige: de('demo-redige-isolation'), mixte: de('demo-mixte-disjoncteur'), prive: p, copie: c };
}

async function suiteRedige(test, prof, rediges, fausseIa) {
  console.log('Questions rédigées — tirage, saisie, pré-correction élément par élément');
  const s = await ouvrirSession(prof, rediges, { exercices_par_etudiant: 2, quota_remplacements: 0 });
  const alice = await entrer(s.code, 'etu-01');
  const bilal = await entrer(s.code, 'etu-02');
  const chloe = await entrer(s.code, 'etu-03');
  const dimitri = await entrer(s.code, 'etu-04');
  const REDACTION = 'L\'isolant ajoute une résistance thermique, donc le tube perd moins de chaleur vers le local. Au-delà d\'une certaine épaisseur, le gain devient faible devant le coût.';
  const appelsPour = (id) => fausseIa.journal.filter((r) => r.message.indexOf('"attribution_id": "' + id + '"') !== -1);
  let a;

  await test('tirage : la copie montre l\'énoncé et un bloc de rédaction, jamais les éléments attendus', async () => {
    a = await attributionsRedigees(alice.copieId);
    assert.ok(a.redige && a.mixte, 'les deux exercices sont attribués');
    assert.deepStrictEqual(a.redige.blocs, [{ id: 'redaction', label: 'Votre réponse rédigée', long: true }]);
    assert.deepStrictEqual(a.mixte.blocs.map((b) => [b.id, b.long === true]), [['methode', false], ['calcul', false], ['resultat', false], ['unite', false], ['redaction', true]]);
    const vue = JSON.stringify((await E.lire('devoir_copies/' + alice.copieId, alice.jeton)).donnees);
    ['attendu', 'elements', 'reponse_modele', 'corrige', 'bareme', 'points', 'nature'].forEach((mot) => assert.ok(vue.indexOf('"' + mot) === -1, 'la copie de l\'étudiant expose « ' + mot + ' »'));
    assert.ok(vue.indexOf('résistance thermique entre') === -1 && vue.indexOf('inférieure au calibre') === -1, 'aucun texte du corrigé dans la copie');
    assert.strictEqual((await E.lire('devoir_copies_prive/' + alice.copieId, alice.jeton)).statut, 403);
  });
  await test('partie privée : type, éléments attendus instanciés avec les valeurs tirées, barème par élément', async () => {
    const pr = a.prive.attributions[a.redige.id];
    assert.deepStrictEqual([pr.type, pr.chapitre, pr.corrige.resultat, pr.corrige.valeur], ['redige', '02', null, null]);
    assert.deepStrictEqual(pr.bareme.map((c) => [c.id, c.points, c.nature]), [['pertes', 60, 'element'], ['epaisseur', 40, 'element']]);
    assert.ok(new RegExp('l\'eau à ' + pr.valeurs.T + ' °C').test(pr.bareme[0].attendu), pr.bareme[0].attendu);
    assert.ok(new RegExp('eau à ' + pr.valeurs.T + ' °C').test(pr.corrige.reponse_modele));
    const pm = a.prive.attributions[a.mixte.id];
    assert.strictEqual(pm.type, 'mixte');
    assert.ok(Math.abs(pm.corrige.valeur - pm.valeurs.P / 230) < 1e-9, 'résultat du calcul recalculé côté serveur');
    assert.deepStrictEqual(pm.bareme.map((c) => [c.id, c.points]), [['methode', 24], ['calcul', 18], ['resultat', 12], ['unite', 6], ['conclusion', 40]]);
    assert.ok(/inférieure au calibre de (10|16) A/.test(pm.bareme[4].attendu));
  });
  await test('saisie : une rédaction longue est acceptée dans le bloc long, refusée ailleurs et au-delà de 6 000 caractères', async () => {
    const long = 'Rédaction. '.repeat(400);   // 4 400 caractères
    const ok = await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: a.redige.id, blocs: { redaction: long } }, alice.jeton);
    assert.ok(ok.ok && ok.resultat.enregistre, ok.message);
    assert.strictEqual((await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: a.redige.id, blocs: { redaction: 'x'.repeat(6001) } }, alice.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: a.mixte.id, blocs: { methode: 'x'.repeat(2001) } }, alice.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: a.redige.id, blocs: { pertes: 'un élément n\'est pas un bloc de saisie' } }, alice.jeton)).code, 'INVALID_ARGUMENT');
  });
  await test('pré-correction : chaque élément attendu est noté, avec le passage de la copie qui le justifie', async () => {
    await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: a.redige.id, blocs: { redaction: REDACTION } }, alice.jeton);
    await E.appeler('saveDraft', { copie_id: alice.copieId, attribution_id: a.mixte.id, blocs: { methode: 'I = P / U', calcul: '1500 / 230', resultat: '6,5', unite: 'A', redaction: 'Le courant reste sous le calibre, le disjoncteur convient.' } }, alice.jeton);
    assert.strictEqual((await E.appeler('submitCopy', { copie_id: alice.copieId }, alice.jeton)).resultat.statut, 'rendue');
    const r = await E.appeler('runPreCorrection', { copie_id: alice.copieId }, prof.jeton);
    assert.ok(r.ok, r.message);
    assert.deepStrictEqual([r.resultat.corrigees, r.resultat.erreurs], [2, 0]);
    const f = (await E.lire('devoir_corrections/' + a.redige.id)).donnees;
    assert.deepStrictEqual([f.type, f.chapitre, f.statut, f.prioritaire], ['redige', '02', 'brouillon', false]);
    assert.deepStrictEqual(f.ia.criteres.map((c) => [c.critere_id, c.nature, c.points_obtenus, c.incertain]), [['pertes', 'element', 60, false], ['epaisseur', 'element', 40, false]]);
    assert.ok(f.ia.criteres.every((c) => c.extrait_reponse && REDACTION.indexOf(c.extrait_reponse) === 0), 'citation tirée de la copie');
    assert.deepStrictEqual(f.finale.criteres.map((c) => [c.critere_id, c.nature, c.points_obtenus, c.points_max]), [['pertes', 'element', 60, 60], ['epaisseur', 'element', 40, 40]]);
    assert.deepStrictEqual([f.ia.ecarts, f.ia.incertains, f.ia.version_prompt >= '2026-11-27.2'], [[], 0, true]);
    const fm = (await E.lire('devoir_corrections/' + a.mixte.id)).donnees;
    assert.deepStrictEqual(fm.finale.criteres.map((c) => c.critere_id), ['methode', 'calcul', 'resultat', 'unite', 'conclusion']);
    assert.deepStrictEqual([fm.finale.note, fm.finale.note_max, fm.type], [100, 100, 'mixte']);
  });
  await test('requête à l\'IA : éléments attendus et corrigé envoyés, réponse par bloc de saisie, toujours sans identité', async () => {
    const req = appelsPour(a.redige.id);
    assert.strictEqual(req.length, 1);
    assert.ok(/"nature": "element"/.test(req[0].message) && /"attendu": "L'isolant augmente la résistance thermique/.test(req[0].message), 'élément attendu transmis');
    assert.ok(/<reponse_etudiant>[\s\S]*"redaction": "L'isolant ajoute/.test(req[0].message));
    assert.ok(/recopié mot pour mot/.test(req[0].systeme) && /« incertain » à true/.test(req[0].systeme));
    const props = req[0].corps.output_config.format.schema.properties.criteres.items.properties;
    assert.ok(props.extrait_reponse && props.incertain, 'le schéma imposé demande citation et doute');
    const brut = JSON.stringify(req[0].corps);
    assert.ok(brut.indexOf('Alice') === -1 && brut.indexOf('etu-01') === -1 && brut.indexOf(alice.uid) === -1);
    const reqMixte = appelsPour(a.mixte.id)[0].message;
    assert.ok(/"nature": "bloc"/.test(reqMixte) && /"nature": "element"/.test(reqMixte) && /"valeur": /.test(reqMixte), 'exercice mixte : blocs de calcul, élément rédigé et résultat de référence');
  });
  await test('citation inventée ou absente : le serveur le relève, marque le critère incertain et met la copie en tête', async () => {
    const b = await attributionsRedigees(bilal.copieId);
    await E.appeler('saveDraft', { copie_id: bilal.copieId, attribution_id: b.redige.id, blocs: { redaction: 'IA_CITATION_INVENTEE ' + REDACTION } }, bilal.jeton);
    await E.appeler('saveDraft', { copie_id: bilal.copieId, attribution_id: b.mixte.id, blocs: { methode: 'I = P / U', redaction: 'IA_SANS_CITATION il convient' } }, bilal.jeton);
    await E.appeler('submitCopy', { copie_id: bilal.copieId }, bilal.jeton);
    assert.ok((await E.appeler('runPreCorrection', { copie_id: bilal.copieId }, prof.jeton)).ok);
    const f = (await E.lire('devoir_corrections/' + b.redige.id)).donnees;
    assert.ok(f.ia.ecarts.filter((e) => /ne figure pas tel quel dans la copie/.test(e)).length === 2, f.ia.ecarts.join(' | '));
    assert.deepStrictEqual([f.ia.incertains, f.prioritaire, f.ia.criteres.every((c) => c.incertain)], [2, true, true]);
    assert.strictEqual(f.ia.note_proposee, 100, 'la proposition reste telle quelle : l\'enseignant tranche');
    const fm = (await E.lire('devoir_corrections/' + b.mixte.id)).donnees;
    assert.ok(fm.ia.ecarts.some((e) => /« Comparaison au calibre » : points proposés sans passage cité/.test(e)), fm.ia.ecarts.join(' | '));
    const parId = {};
    fm.ia.criteres.forEach((c) => { parId[c.critere_id] = c; });
    assert.deepStrictEqual([parId.conclusion.incertain, parId.methode.incertain, fm.prioritaire], [true, false, true]);
  });
  await test('doute déclaré par l\'IA : enregistré sur le critère, copie prioritaire', async () => {
    const c = await attributionsRedigees(chloe.copieId);
    await E.appeler('saveDraft', { copie_id: chloe.copieId, attribution_id: c.redige.id, blocs: { redaction: 'IA_INCERTAIN on isole pour garder la chaleur' } }, chloe.jeton);
    await E.appeler('submitCopy', { copie_id: chloe.copieId }, chloe.jeton);
    const avant = fausseIa.journal.length;
    const r = await E.appeler('runPreCorrection', { copie_id: chloe.copieId }, prof.jeton);
    assert.deepStrictEqual([r.resultat.corrigees, r.resultat.vides], [2, 1]);
    assert.strictEqual(fausseIa.journal.length - avant, 1, 'l\'exercice mixte laissé vide ne part pas vers l\'IA');
    const f = (await E.lire('devoir_corrections/' + c.redige.id)).donnees;
    assert.deepStrictEqual([f.ia.incertains, f.ia.ecarts, f.prioritaire], [2, [], true]);
    const vide = (await E.lire('devoir_corrections/' + c.mixte.id)).donnees;
    assert.deepStrictEqual([vide.ia.note_proposee, vide.ia.alertes, vide.ia.criteres.length], [0, ['reponse_vide'], 5]);
  });
  await test('l\'enseignant modifie la note d\'un élément puis valide ; l\'étudiant ne voit toujours rien', async () => {
    const r = await E.appeler('saveCorrection', { attribution_id: a.redige.id, criteres: [{ critere_id: 'epaisseur', points_obtenus: 20 }] }, prof.jeton);
    assert.deepStrictEqual([r.resultat.note, r.resultat.note_max], [80, 100]);
    assert.strictEqual((await E.appeler('saveCorrection', { attribution_id: a.redige.id, criteres: [{ critere_id: 'pertes', points_obtenus: 61 }] }, prof.jeton)).code, 'INVALID_ARGUMENT');
    assert.strictEqual((await E.appeler('saveCorrection', { attribution_id: a.redige.id, criteres: [{ critere_id: 'redaction', points_obtenus: 5 }] }, prof.jeton)).code, 'INVALID_ARGUMENT', 'le bloc de saisie n\'est pas un critère');
    const v = await E.appeler('validateCorrection', { copie_id: alice.copieId }, prof.jeton);
    assert.deepStrictEqual([v.resultat.points, v.resultat.points_max, v.resultat.note_finale], [180, 200, 18]);
    const f = (await E.lire('devoir_corrections/' + a.redige.id)).donnees;
    assert.deepStrictEqual([f.statut, f.ia.criteres[1].points_obtenus, f.finale.criteres[1].points_obtenus], ['validee', 40, 20], 'proposition de l\'IA conservée');
    const vue = JSON.stringify((await E.lire('devoir_copies/' + alice.copieId, alice.jeton)).donnees);
    assert.ok(!/"note|"correction|"attendu|"criteres|"extrait/.test(vue));
    assert.strictEqual((await E.lire('devoir_corrections/' + a.redige.id, alice.jeton)).statut, 403);
  });
  await test('correction sans IA d\'une question rédigée : une fiche à zéro, un critère par élément attendu', async () => {
    const d = await attributionsRedigees(dimitri.copieId);
    await E.appeler('saveDraft', { copie_id: dimitri.copieId, attribution_id: d.redige.id, blocs: { redaction: 'On isole.' } }, dimitri.jeton);
    await E.appeler('submitCopy', { copie_id: dimitri.copieId }, dimitri.jeton);
    const avant = fausseIa.journal.length;
    assert.strictEqual((await E.appeler('runPreCorrection', { copie_id: dimitri.copieId, sans_ia: true }, prof.jeton)).resultat.preparees, 2);
    assert.strictEqual(fausseIa.journal.length, avant);
    const f = (await E.lire('devoir_corrections/' + d.redige.id)).donnees;
    assert.deepStrictEqual([f.ia, f.finale.note, f.finale.criteres.map((c) => c.critere_id)], [null, 0, ['pertes', 'epaisseur']]);
  });
  await E.appeler('updateSession', { session_id: s.sessionId, action: 'fermer' }, prof.jeton);
}

async function lancer() {
  const { test, etat } = E.cadre();
  await E.toutEffacer();
  const { prof, exercices, classe, rediges } = await E.semer();
  const fausseIa = require('./lib/devoir-fausse-ia.js');
  const serveur = fausseIa.demarrer();
  try {
    await suiteMvp2(test, prof, exercices, classe);
    await suiteMvp3(test, prof, exercices);
    await suiteMvp4(test, prof, exercices, fausseIa);
    await suiteRedige(test, prof, rediges, fausseIa);
    await suiteAttente(test, prof, exercices);   // en dernier : ses tirages s'ajoutent à l'historique des étudiants
  } finally {
    serveur.close();
  }
  return etat;
}

module.exports = { lancer, ouvrirSession, entrer, copie, prive, evenements };
