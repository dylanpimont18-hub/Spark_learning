// Test de bout en bout du module devoir, dans de vrais navigateurs (Puppeteer) contre les
// émulateurs : l'enseignant crée et ouvre une session depuis le panneau admin, 11 étudiants
// passent le devoir sur /devoir, chacun dans son propre contexte de navigation.
// Lancement (synchrone) : node scripts/devoir-emulateurs.js test e2e
const assert = require('assert');
const puppeteer = require('puppeteer');
const E = require('./lib/devoir-emulateur.js');

const ATTENTE = 20000;

// DEVOIR_CAPTURES=<dossier> : enregistre quelques captures d'écran pour une relecture visuelle.
async function capture(page, nom) {
  if (!process.env.DEVOIR_CAPTURES) return;
  await page.screenshot({ path: require('path').join(process.env.DEVOIR_CAPTURES, nom + '.png'), fullPage: true });
}

async function texte(page, selecteur) {
  return page.$eval(selecteur, (el) => el.textContent.trim());
}

async function cliquerTexte(page, selecteur, libelle) {
  await page.waitForFunction((sel, lib) => Array.from(document.querySelectorAll(sel)).some((b) => b.textContent.trim().indexOf(lib) === 0 && !b.disabled), { timeout: ATTENTE }, selecteur, libelle);
  await page.evaluate((sel, lib) => {
    Array.from(document.querySelectorAll(sel)).find((b) => b.textContent.trim().indexOf(lib) === 0 && !b.disabled).click();
  }, selecteur, libelle);
}

// ── Enseignant ───────────────────────────────────────────────────────────────
async function ouvrirPanneauDevoirs(navigateur) {
  const page = await navigateur.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  page.on('dialog', (d) => d.accept());           // confirm() et alert() du panneau admin
  page.on('pageerror', (e) => console.error('    [erreur page enseignant] ' + e.message));
  await page.goto(E.URL_SITE + '/connexion', { waitUntil: 'networkidle2' });
  await page.waitForSelector('#login-email', { timeout: ATTENTE });
  await page.type('#login-email', E.ENSEIGNANT.email);
  await page.type('#login-password', E.ENSEIGNANT.motDePasse);
  await page.click('#login-submit');
  await page.waitForFunction(() => typeof AuthGuard !== 'undefined' && AuthGuard.isAdmin(), { timeout: ATTENTE });
  await page.goto(E.URL_SITE + '/admin', { waitUntil: 'networkidle2' });
  // Le bandeau de consentement recouvre le bas de l'écran et masque des boutons.
  await page.evaluate(() => { const b = document.getElementById('consent-banner'); if (b) b.remove(); });
  await page.waitForSelector('[data-tab="devoirs"]', { timeout: ATTENTE });
  await page.click('[data-tab="devoirs"]');
  await cliquerTexte(page, '.dv-subtab', 'Sessions');
  await page.waitForSelector('#dv-sessions .dv-toolbar', { timeout: ATTENTE });
  return page;
}

async function creerEtOuvrirSession(page, titre) {
  await cliquerTexte(page, '#dv-sessions button', '+ Nouvelle session');
  await page.waitForSelector('#ds-titre', { timeout: ATTENTE });
  await page.type('#ds-titre', titre);
  await cliquerTexte(page, '#dv-sessions button', 'Tout cocher');
  await page.click('#ds-creer');
  await cliquerTexte(page, '#dv-sessions button', 'Ouvrir la session');
  await page.waitForSelector('#ds-code', { timeout: ATTENTE });
  return texte(page, '#ds-code');
}

async function ligneTableau(page, nom) {
  return page.evaluate((n) => {
    const tr = Array.from(document.querySelectorAll('.ds-table tbody tr')).find((r) => r.cells[0].textContent.trim() === n);
    return tr ? Array.from(tr.cells).map((c) => c.textContent.trim()) : null;
  }, nom);
}

// ── Étudiant ───────────────────────────────────────────────────────────────
async function nouvelEtudiant(navigateur) {
  const contexte = await navigateur.createBrowserContext();   // stockage et identité séparés
  const page = await contexte.newPage();
  await page.setViewport({ width: 1100, height: 850 });
  page.on('pageerror', (e) => console.error('    [erreur page étudiant] ' + e.message));
  await premierPlan(page, true);
  return { contexte, page };
}

// En classe, chaque étudiant a son poste, et sa page est au premier plan. Ici les 11 pages
// partagent un seul navigateur : on demande à Chrome de considérer chacune comme active, sauf
// pendant une sortie de page volontaire (quitterPage).
async function premierPlan(page, actif) {
  const cdp = await page.createCDPSession();
  await cdp.send('Emulation.setFocusEmulationEnabled', { enabled: actif });
  await cdp.detach();
}

// L'étudiant ouvre un autre onglet pendant « ms » millisecondes, puis revient à sa copie.
async function quitterPage(etu, ms) {
  await premierPlan(etu.page, false);
  const autre = await etu.contexte.newPage();
  await autre.goto('about:blank');
  await autre.bringToFront();
  const masquee = await etu.page.evaluate(() => document.hidden || !document.hasFocus());
  assert.ok(masquee, 'la page de l\'épreuve doit avoir perdu le premier plan');
  await E.attendre(ms);
  await etu.page.bringToFront();
  await premierPlan(etu.page, true);
  await etu.page.evaluate(() => window.focus());
  await autre.close();
}

async function copieDe(etudiantId, sessionId) {
  const docs = (await E.chercher('devoir_copies', 'etudiant_id', etudiantId)).docs.filter((c) => c.session_id === sessionId);
  return docs[0];
}

async function attendreCopie(etudiantId, sessionId, condition, quoi) {
  for (let i = 0; i < 60; i++) {
    const c = await copieDe(etudiantId, sessionId);
    if (c && condition(c)) return c;
    await E.attendre(250);
  }
  throw new Error('délai dépassé : ' + quoi);
}

async function saisirCode(page, code) {
  await page.goto(E.URL_SITE + '/devoir', { waitUntil: 'networkidle2' });
  await page.waitForSelector('#de-code', { timeout: ATTENTE });
  await page.type('#de-code', code);
  await page.click('#de-valider-code');
  await page.waitForSelector('.de-noms', { timeout: ATTENTE });
}

async function entrer(navigateur, code, etudiant) {
  const etu = await nouvelEtudiant(navigateur);
  await saisirCode(etu.page, code);
  await etu.page.click('.de-nom[data-id="' + etudiant.id + '"]');
  await etu.page.waitForSelector('#de-confirmer', { timeout: ATTENTE });
  await etu.page.click('#de-confirmer');
  await etu.page.waitForSelector('.de-champ', { timeout: ATTENTE });
  return Object.assign(etu, etudiant);
}

async function attendreEnregistre(page) {
  await page.waitForFunction(() => { const e = document.getElementById('de-etat'); return e && e.textContent === 'Enregistré'; }, { timeout: ATTENTE });
}

async function remplir(page, bloc, valeur) {
  // Curseur placé en fin de champ, puis frappe au clavier (comme un étudiant).
  await page.$eval('.de-champ[data-bloc="' + bloc + '"]', (t) => { t.focus(); t.setSelectionRange(t.value.length, t.value.length); });
  await page.keyboard.type(valeur);
}

// Remplit les blocs de l'exercice affiché puis quitte le dernier champ (déclenche l'enregistrement).
async function composer(page, reponses) {
  for (const bloc of Object.keys(reponses)) await remplir(page, bloc, reponses[bloc]);
  await page.evaluate(() => document.activeElement && document.activeElement.blur());
  await attendreEnregistre(page);
}

async function allerExercice(page, numero) {
  await page.evaluate((n) => document.querySelectorAll('.de-onglet')[n - 1].click(), numero);
  await page.waitForFunction((n) => { const o = document.querySelectorAll('.de-onglet')[n - 1]; return o && o.classList.contains('active'); }, { timeout: ATTENTE }, numero);
}

async function rendre(page) {
  await page.click('#de-rendre');
  await page.waitForSelector('#de-confirmer-rendu', { timeout: ATTENTE });
  await page.click('#de-confirmer-rendu');
  await page.waitForFunction(() => { const t = document.querySelector('.de-titre'); return t && t.textContent === 'Copie rendue'; }, { timeout: ATTENTE });
}

async function suiteMvp2(test, ctx) {
  console.log('MVP-2 — passage en classe dans le navigateur');
  await test('l\'enseignant crée une session dans le panneau admin et obtient un code', async () => {
    ctx.prof = await ouvrirPanneauDevoirs(ctx.navigateur);
    ctx.code = await creerEtOuvrirSession(ctx.prof, 'Devoir E2E');
    assert.ok(/^[A-Z2-9]{6}$/.test(ctx.code), 'code affiché : ' + ctx.code);
    assert.strictEqual((await ligneTableau(ctx.prof, 'Alice M.'))[1], 'absent');
  });
  await test('un code faux affiche un message neutre', async () => {
    const etu = await nouvelEtudiant(ctx.navigateur);
    await etu.page.goto(E.URL_SITE + '/devoir', { waitUntil: 'networkidle2' });
    await etu.page.waitForSelector('#de-code', { timeout: ATTENTE });
    await etu.page.type('#de-code', 'zzzzzz');
    await etu.page.click('#de-valider-code');
    await etu.page.waitForFunction(() => document.getElementById('de-erreur') && document.getElementById('de-erreur').textContent.length > 0, { timeout: ATTENTE });
    assert.strictEqual(await texte(etu.page, '#de-erreur'), 'Code invalide ou session fermée.');
    await etu.contexte.close();
  });
  await test('11 étudiants entrent par code et nom, et voient 3 exercices, un minuteur, 4 blocs', async () => {
    ctx.etudiants = [];
    for (const e of ctx.classe.etudiants) ctx.etudiants.push(await entrer(ctx.navigateur, ctx.code, e));
    for (const etu of ctx.etudiants) {
      assert.strictEqual(await etu.page.$$eval('.de-onglet', (l) => l.length), 3);
      assert.strictEqual(await etu.page.$$eval('.de-champ', (l) => l.length), 4);
      assert.ok(/^(\d:)?\d{1,2}:\d{2}$/.test(await texte(etu.page, '#de-minuteur')), 'minuteur');
    }
    const m = await texte(ctx.etudiants[10].page, '#de-minuteur');
    assert.ok(/^(59:5\d|1:00:00)$/.test(m), 'le minuteur démarre à 60 min (heure du serveur) : ' + m);
  });
  await test('l\'énoncé est rendu (formules KaTeX) et ne contient ni corrigé ni barème', async () => {
    const page = ctx.etudiants[0].page;
    assert.ok(await page.$('.de-enonce .katex'), 'formules rendues');
    const html = await page.content();
    assert.ok(!/corrig|barème|bareme|points/i.test(html), 'aucune trace de corrigé ou de barème dans la page');
  });
  await test('un nom pris est grisé pour un autre poste', async () => {
    const etu = await nouvelEtudiant(ctx.navigateur);
    await saisirCode(etu.page, ctx.code);
    assert.strictEqual(await etu.page.$$eval('.de-nom:disabled', (l) => l.length), 11);
    await etu.contexte.close();
  });
  await test('chaque étudiant compose : le brouillon est enregistré automatiquement', async () => {
    for (const [i, etu] of ctx.etudiants.entries()) {
      await composer(etu.page, { methode: 'Formule de ' + etu.nom, calcul: '12 x ' + (i + 1), resultat: String(12 * (i + 1)), unite: 'W' });
    }
    const alice = ctx.etudiants[0];
    await allerExercice(alice.page, 2);
    await composer(alice.page, { methode: 'Deuxième exercice' });
  });
  await test('le tableau de bord suit la classe en direct', async () => {
    await ctx.prof.waitForFunction(() => Array.from(document.querySelectorAll('.ds-table tbody tr')).filter((r) => r.cells[1].textContent.trim() === 'en cours').length === 11, { timeout: ATTENTE });
    const alice = await ligneTableau(ctx.prof, 'Alice M.');
    assert.ok(/^2 \/ 3/.test(alice[2]), 'exercice en cours d\'Alice : ' + alice[2]);
    assert.strictEqual(alice[3], '5 / 12');
    await capture(ctx.prof, 'mvp2-tableau-de-bord');
    await capture(ctx.etudiants[2].page, 'mvp2-copie-etudiant');
    assert.strictEqual((await ligneTableau(ctx.prof, 'Bilal K.'))[3], '4 / 12');
    assert.ok(/^(5\d|60):\d{2}$/.test(alice[4]), 'temps restant : ' + alice[4]);
  });
  await test('reconnexion : après un rafraîchissement, la copie reprend au même exercice, réponses comprises', async () => {
    const alice = ctx.etudiants[0];
    await alice.page.reload({ waitUntil: 'networkidle2' });
    await alice.page.waitForSelector('.de-champ', { timeout: ATTENTE });
    assert.strictEqual(await alice.page.$eval('.de-onglet.active', (o) => o.textContent.trim()), 'Exercice 2');
    assert.strictEqual(await alice.page.$eval('.de-champ[data-bloc="methode"]', (t) => t.value), 'Deuxième exercice');
    await allerExercice(alice.page, 1);
    assert.strictEqual(await alice.page.$eval('.de-champ[data-bloc="calcul"]', (t) => t.value), '12 x 1');
  });
  await test('reconnexion : onglet fermé puis rouvert, la saisie non encore envoyée est retrouvée', async () => {
    const bilal = ctx.etudiants[1];
    // Saisie sans quitter le champ : pas encore envoyée au serveur, seulement gardée sur le poste.
    await remplir(bilal.page, 'methode', ' + suite');
    await bilal.page.close({ runBeforeUnload: false });
    bilal.page = await bilal.contexte.newPage();
    await bilal.page.goto(E.URL_SITE + '/devoir', { waitUntil: 'networkidle2' });
    await bilal.page.waitForSelector('.de-champ', { timeout: ATTENTE });
    assert.strictEqual(await bilal.page.$eval('.de-champ[data-bloc="methode"]', (t) => t.value), 'Formule de Bilal K. + suite');
    await attendreEnregistre(bilal.page);
    const copies = (await E.chercher('devoir_copies', 'etudiant_id', 'etu-02')).docs;
    assert.strictEqual(copies.length, 1, 'une seule copie pour Bilal');
    const rep = copies[0].reponses[copies[0].attributions[0].id];
    assert.strictEqual(rep.blocs.methode, 'Formule de Bilal K. + suite');
    assert.ok((await E.chercher('devoir_evenements', 'copie_id', copies[0]._id)).docs.some((e) => e.type === 'reconnect'), 'reconnexion journalisée');
  });
  await test('rendu anticipé : écran de confirmation seul, sans note ni corrigé', async () => {
    for (const etu of ctx.etudiants.slice(0, 10)) await rendre(etu.page);
    const html = await ctx.etudiants[0].page.content();
    assert.ok(!/corrig|barème|note|\/ ?20/i.test(html.replace(/<head[\s\S]*<\/head>/, '')), 'écran final sans note ni corrigé');
    await ctx.etudiants[0].page.reload({ waitUntil: 'networkidle2' });
    await ctx.etudiants[0].page.waitForFunction(() => { const t = document.querySelector('.de-titre'); return t && t.textContent === 'Copie rendue'; }, { timeout: ATTENTE });
  });
  await test('fin du temps : la copie du dernier étudiant est rendue automatiquement', async () => {
    const kenza = ctx.etudiants[10];
    await remplir(kenza.page, 'methode', ' (dernière seconde)');
    const copies = (await E.chercher('devoir_copies', 'etudiant_id', kenza.id)).docs;
    await E.majChamps('devoir_copies/' + copies[0]._id, { fin: new Date(Date.now() + 3000) });   // il reste 3 secondes
    await kenza.page.waitForFunction(() => { const t = document.querySelector('.de-titre'); return t && t.textContent === 'Copie rendue'; }, { timeout: ATTENTE });
    assert.ok(/automatiquement/.test(await texte(kenza.page, '.de-info')));
    const c = (await E.lire('devoir_copies/' + copies[0]._id)).donnees;
    assert.strictEqual(c.statut, 'rendue_auto');
    assert.ok(/\(dernière seconde\)$/.test(c.reponses[c.attributions[0].id].blocs.methode), 'la saisie de la dernière seconde est dans la copie');
  });
  await test('11 copies rendues ; l\'enseignant ferme la session', async () => {
    await ctx.prof.waitForFunction(() => Array.from(document.querySelectorAll('.ds-table tbody tr')).filter((r) => /^rendu/.test(r.cells[1].textContent.trim())).length === 11, { timeout: ATTENTE });
    await cliquerTexte(ctx.prof, '#dv-sessions button', 'Fermer la session');
    await ctx.prof.waitForFunction(() => !document.getElementById('ds-code'), { timeout: ATTENTE });
    const sessions = (await E.lister('devoir_sessions')).docs;
    ctx.sessionId = sessions[0]._id;
    assert.strictEqual(sessions[0].statut, 'terminee');
    const copies = (await E.chercher('devoir_copies', 'session_id', ctx.sessionId)).docs;
    assert.deepStrictEqual(copies.map((c) => c.statut).sort(), Array(10).fill('rendue').concat(['rendue_auto']));
  });
}

async function suiteMvp3(test, ctx) {
  console.log('MVP-3 — anti-triche dans le navigateur (délai par défaut : 2 s)');
  let alice, bilal, sessionId, titreAvant;
  await test('nouvelle session, deux étudiants entrent', async () => {
    await cliquerTexte(ctx.prof, '#dv-sessions button', '← Sessions');
    ctx.code3 = await creerEtOuvrirSession(ctx.prof, 'Devoir anti-triche');
    sessionId = (await E.lister('devoir_sessions')).docs.find((s) => s.titre === 'Devoir anti-triche')._id;
    ctx.sessionId3 = sessionId;
    alice = await entrer(ctx.navigateur, ctx.code3, ctx.classe.etudiants[0]);
    bilal = await entrer(ctx.navigateur, ctx.code3, ctx.classe.etudiants[1]);
    await composer(alice.page, { methode: 'Réponse avant la sortie', calcul: '6 x 7' });
    titreAvant = await texte(alice.page, '.de-enonce .de-h2');
  });
  await test('un passage de moins de 2 s sur un autre onglet ne change rien, mais il est journalisé', async () => {
    await quitterPage(alice, 500);
    const c = await attendreCopie(alice.id, sessionId, (x) => x.absence_depuis === null, 'retour constaté');
    const ev = await E.chercher('devoir_evenements', 'copie_id', c._id);
    for (let i = 0; i < 40 && !(await E.chercher('devoir_evenements', 'copie_id', c._id)).docs.some((e) => e.bref); i++) await E.attendre(250);
    const breves = (await E.chercher('devoir_evenements', 'copie_id', c._id)).docs.filter((e) => e.bref);
    assert.strictEqual(breves.length, 1, 'une absence brève journalisée (' + ev.docs.map((e) => e.type).join() + ')');
    assert.ok(breves[0].duree_absence_ms < 2000, 'durée ' + breves[0].duree_absence_ms);
    assert.strictEqual((await copieDe(alice.id, sessionId)).changements_utilises, 0);
    assert.strictEqual(await texte(alice.page, '.de-enonce .de-h2'), titreAvant);
    assert.strictEqual(await alice.page.$eval('.de-champ[data-bloc="methode"]', (t) => t.value), 'Réponse avant la sortie');
  });
  await test('un changement d\'onglet de plus de 2 s remplace l\'exercice en cours', async () => {
    await quitterPage(alice, 2600);
    const c = await attendreCopie(alice.id, sessionId, (x) => x.changements_utilises === 1, 'incident compté');
    const invalide = c.attributions.find((a) => a.statut === 'invalidee');
    const remplacant = c.attributions.find((a) => a.remplace === invalide.id);
    assert.ok(invalide && remplacant && remplacant.statut === 'active');
    assert.strictEqual(c.reponses[invalide.id].blocs.methode, 'Réponse avant la sortie', 'réponses archivées');
    const incident = (await E.chercher('devoir_evenements', 'copie_id', c._id)).docs.find((e) => e.incident);
    assert.ok(incident.duree_absence_ms >= 2000 && incident.effet === 'remplacement', JSON.stringify(incident));
    // À l'écran : message clair et sans accusation, nouvel énoncé, blocs vides.
    await alice.page.waitForSelector('.de-message', { timeout: ATTENTE });
    const message = await texte(alice.page, '.de-message');
    assert.ok(/remplacé par un nouvel exercice/.test(message) && !/trich|fraud/i.test(message), message);
    await alice.page.waitForFunction((t) => document.querySelector('.de-enonce .de-h2').textContent.trim() !== t, { timeout: ATTENTE }, titreAvant);
    assert.strictEqual(await alice.page.$eval('.de-champ[data-bloc="methode"]', (t) => t.value), '');
    assert.strictEqual(await alice.page.$$eval('.de-onglet', (l) => l.length), 3, 'toujours 3 exercices');
    await capture(alice.page, 'mvp3-exercice-remplace');
  });
  await test('un collage est refusé et journalisé', async () => {
    await remplir(bilal.page, 'methode', 'tapé au clavier');
    // Vrai copier-coller au clavier : Ctrl+C dans un champ étranger à l'épreuve, Ctrl+V dans la réponse.
    await bilal.page.evaluate(() => {
      window.__collages = [];
      document.addEventListener('paste', (ev) => window.__collages.push(ev.defaultPrevented), false);
      const source = document.createElement('input');
      source.id = 'source-test';
      source.value = 'TEXTE COLLÉ DEPUIS AILLEURS';
      document.body.appendChild(source);
      source.focus();
      source.select();
    });
    await bilal.page.keyboard.down('Control');
    await bilal.page.keyboard.press('KeyC');
    await bilal.page.keyboard.up('Control');
    await bilal.page.$eval('.de-champ[data-bloc="methode"]', (t) => { t.focus(); t.setSelectionRange(t.value.length, t.value.length); });
    await bilal.page.keyboard.down('Control');
    await bilal.page.keyboard.press('KeyV');
    await bilal.page.keyboard.up('Control');
    await E.attendre(300);
    let reel = (await bilal.page.evaluate(() => window.__collages)).length > 0;
    if (!reel) {
      // Navigateur sans presse-papiers pilotable : même geste par un événement « paste » construit.
      await bilal.page.$eval('.de-champ[data-bloc="methode"]', (t) => {
        const dt = new DataTransfer();
        dt.setData('text/plain', 'TEXTE COLLÉ DEPUIS AILLEURS');
        t.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
      });
    }
    console.log('        (collage ' + (reel ? 'réel, Ctrl+V' : 'simulé par événement') + ')');
    assert.deepStrictEqual(await bilal.page.evaluate(() => window.__collages), [true], 'le collage a été intercepté et annulé');
    assert.strictEqual(await bilal.page.$eval('.de-champ[data-bloc="methode"]', (t) => t.value), 'tapé au clavier', 'rien n\'a été inséré');
    assert.ok(/collage est désactivé/.test(await texte(bilal.page, '#de-bandeau')));
    // Glisser-déposer : même refus.
    await bilal.page.$eval('.de-champ[data-bloc="calcul"]', (t) => {
      const dt = new DataTransfer();
      dt.setData('text/plain', 'TEXTE DÉPOSÉ');
      window.__depot = !t.dispatchEvent(new DragEvent('drop', { dataTransfer: dt, bubbles: true, cancelable: true }));
    });
    await E.attendre(500);
    const c = await attendreCopie(bilal.id, sessionId, (x) => x.collages_bloques === 1, 'collage compté');
    const ev = (await E.chercher('devoir_evenements', 'copie_id', c._id)).docs.filter((e) => e.type === 'paste_blocked');
    assert.strictEqual(ev.length, 1);
    assert.strictEqual(ev[0].detail, 'bloc « methode »');
    assert.strictEqual(await bilal.page.evaluate(() => window.__depot), true, 'dépôt annulé');
    assert.strictEqual(await bilal.page.$eval('.de-champ[data-bloc="calcul"]', (t) => t.value), '');
    assert.strictEqual(c.changements_utilises, 0);
  });
  await test('le tableau de bord affiche les incidents et le collage bloqué', async () => {
    await ctx.prof.waitForFunction(() => {
      const lignes = Array.from(document.querySelectorAll('.ds-table tbody tr'));
      const a = lignes.find((r) => r.cells[0].textContent.trim() === 'Alice M.');
      const b = lignes.find((r) => r.cells[0].textContent.trim() === 'Bilal K.');
      return a && b && /1 sortie de page/.test(a.cells[5].textContent) && /1 brève/.test(a.cells[5].textContent) && /1 collage bloqué/.test(b.cells[5].textContent);
    }, { timeout: ATTENTE });
    await ctx.prof.evaluate(() => { document.querySelector('.ds-journal').open = true; });
    const journal = await texte(ctx.prof, '.ds-journal');
    assert.ok(/onglet masqué|fenêtre inactive/.test(journal) && /incident n° 1 : exercice remplacé/.test(journal) && /collage bloqué/.test(journal), journal.slice(0, 400));
    await capture(ctx.prof, 'mvp3-tableau-de-bord');
  });
  await test('l\'enseignant annule l\'incident : l\'étudiant retrouve son exercice et ses réponses', async () => {
    await cliquerTexte(ctx.prof, '.ds-table button', 'Annuler le dernier incident');
    const c = await attendreCopie(alice.id, sessionId, (x) => x.changements_utilises === 0, 'incident annulé');
    assert.strictEqual(c.attributions.filter((a) => a.statut === 'remplacement_annule').length, 1);
    await alice.page.waitForFunction((t) => document.querySelector('.de-enonce .de-h2').textContent.trim() === t, { timeout: ATTENTE }, titreAvant);
    assert.strictEqual(await alice.page.$eval('.de-champ[data-bloc="methode"]', (t) => t.value), 'Réponse avant la sortie');
    assert.ok(/annulé le remplacement/.test(await texte(alice.page, '.de-message')));
  });
  await test('3 sorties de plus de 2 s : 2 remplacements, puis copie verrouillée ; l\'enseignant déverrouille', async () => {
    for (let n = 1; n <= 3; n++) {
      await quitterPage(alice, 2400);
      await attendreCopie(alice.id, sessionId, (x) => x.changements_utilises === n, 'incident n° ' + n);
    }
    const c = await copieDe(alice.id, sessionId);
    assert.strictEqual(c.statut, 'verrouillee');
    assert.strictEqual(c.attributions.filter((a) => a.statut === 'invalidee').length, 2, 'deux remplacements au plus');
    await alice.page.waitForFunction(() => { const t = document.querySelector('.de-titre'); return t && t.textContent === 'Copie en attente'; }, { timeout: ATTENTE });
    assert.ok(/Levez la main/.test(await texte(alice.page, '.de-info')));
    await capture(alice.page, 'mvp3-copie-en-attente');
    await cliquerTexte(ctx.prof, '.ds-table button', 'Déverrouiller');
    await alice.page.waitForSelector('.de-champ', { timeout: ATTENTE });
    assert.strictEqual((await copieDe(alice.id, sessionId)).statut, 'en_cours');
    await composer(alice.page, { resultat: '42' });
  });
  await test('rafraîchir la page n\'est pas compté comme une sortie', async () => {
    const avant = (await copieDe(bilal.id, sessionId)).changements_utilises;
    await bilal.page.reload({ waitUntil: 'networkidle2' });
    await bilal.page.waitForSelector('.de-champ', { timeout: ATTENTE });
    await E.attendre(1500);
    const c = await copieDe(bilal.id, sessionId);
    assert.strictEqual(c.changements_utilises, avant);
    assert.strictEqual(c.absence_depuis, null);
    await rendre(bilal.page);
    await rendre(alice.page);
  });
}

async function lancer() {
  const { test, etat } = E.cadre();
  await E.toutEffacer();
  const semis = await E.semer();
  const navigateur = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const ctx = { navigateur, classe: semis.classe, exercices: semis.exercices, profCompte: semis.prof };
  try {
    await suiteMvp2(test, ctx);
    await suiteMvp3(test, ctx);
  } finally {
    await navigateur.close();
  }
  return etat;
}

module.exports = { lancer };
