// Tests des Cloud Functions du module devoir contre les émulateurs (API appelable, sans navigateur).
// Vérifie ce que le serveur décide seul : accès, tirage, temps, statuts, quotas.
// Lancement : node scripts/devoir-emulateurs.js test fonctions
const assert = require('assert');
const E = require('./lib/devoir-emulateur.js');

async function ouvrirSession(prof, exercices, options) {
  const c = await E.appeler('createSession', Object.assign({
    titre: 'Devoir de test', classe_id: 'classe-demo', exercice_ids: exercices.map((x) => x.id)
  }, options || {}), prof.jeton);
  assert.ok(c.ok, 'createSession : ' + c.message);
  const o = await E.appeler('updateSession', { session_id: c.resultat.session_id, action: 'ouvrir' }, prof.jeton);
  assert.ok(o.ok, 'ouverture : ' + o.message);
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

async function lancer() {
  const { test, etat } = E.cadre();
  await E.toutEffacer();
  const { prof, exercices, classe } = await E.semer();
  await suiteMvp2(test, prof, exercices, classe);
  return etat;
}

module.exports = { lancer, ouvrirSession, entrer, copie, prive, evenements };
