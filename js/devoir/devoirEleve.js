// Vue étudiant du module « devoir » (page devoir.html, servie sur /devoir).
// Entrée par code de session puis choix du nom, composition en blocs de réponse, brouillon
// automatique, minuteur, rendu. Le navigateur n'est qu'un affichage : le temps, le tirage et
// les statuts sont décidés par les Cloud Functions (functions/src/session.ts). Cette page ne
// reçoit jamais ni corrigé, ni barème, ni note (voir firestore.rules).
var DevoirEleve = {
  CLE: 'spark_devoir_eleve',                 // { code, copie_id } : reprise après rafraîchissement
  CLE_BROUILLON: 'spark_devoir_brouillon_',  // + copie_id : saisie conservée hors ligne
  AUTOSAVE_MS: 10000,
  ALERTE_FIN_MS: 5 * 60 * 1000,
  SYMBOLES: ['×', '÷', '²', '³', '√', '·', '≈', '≤', '≥', '→', '°', 'Δ', 'θ', 'λ', 'η', 'ρ', 'Φ', 'π', 'Ω', 'µ'],

  _racine: null,
  _app: null,
  _uid: null,
  _code: '',
  _session: null,        // résumé { titre, classe_nom, duree_minutes, exercices_par_etudiant }
  _copieId: null,
  _copie: null,          // dernier état reçu du serveur
  _decalage: 0,          // heure serveur − heure du poste (ms)
  _brouillons: {},       // { attributionId: { blocId: texte } } : ce qui est à l'écran
  _sales: {},            // attributions modifiées depuis le dernier enregistrement réussi
  _envois: {},           // attributions en cours d'envoi
  _courant: null,
  _horsLigne: false,
  _renduEnCours: false,
  _desabonner: null,
  _tic: null,
  _dernierEnvoi: 0,
  _champActif: null,

  _esc: function (s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },

  _maintenant: function () { return Date.now() + DevoirEleve._decalage; },
  _caler: function (heureServeur) { if (typeof heureServeur === 'number') DevoirEleve._decalage = heureServeur - Date.now(); },
  _ms: function (ts) { return ts && ts.toMillis ? ts.toMillis() : 0; },
  _active: function (c) { return !!c && (c.statut === 'connecte' || c.statut === 'en_cours'); },

  _katex: function () {
    if (!window.renderMathInElement) return;
    try {
      renderMathInElement(DevoirEleve._racine, {
        delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
        macros: { '\\cdotp': '⋅' },
        throwOnError: false
      });
    } catch (e) { /* un énoncé mal formé ne doit pas bloquer l'épreuve */ }
  },

  _memoire: function (cle, valeur) {
    try {
      if (valeur === undefined) return JSON.parse(localStorage.getItem(cle) || 'null');
      if (valeur === null) localStorage.removeItem(cle);
      else localStorage.setItem(cle, JSON.stringify(valeur));
    } catch (e) { /* stockage indisponible : l'épreuve continue sans reprise locale */ }
    return null;
  },

  // ── Démarrage ──────────────────────────────────────────────────────────────
  init: function () {
    var D = DevoirEleve;
    D._racine = document.getElementById('devoir');
    D._ecranMessage('Chargement…');
    DevoirFirebase.preparer();
    // Application nommée : l'identité anonyme de l'épreuve est séparée de la session du site.
    D._app = firebase.initializeApp(FIREBASE_CONFIG, 'devoir');
    DevoirFirebase.brancher(D._app);
    var pret = false;
    D._app.auth().onAuthStateChanged(function (user) {
      if (!user) {
        D._app.auth().signInAnonymously().catch(function (err) {
          console.error('[DevoirEleve] connexion anonyme :', err);
          D._ecranMessage('Le service est momentanément indisponible. Prévenez votre enseignant.');
        });
        return;
      }
      D._uid = user.uid;
      if (pret) return;
      pret = true;
      D._reprendre();
    });
    window.addEventListener('online', function () { D._toutEnvoyer(); });
    window.addEventListener('beforeunload', function (e) {
      if (D._active(D._copie) && Object.keys(D._sales).length) { e.preventDefault(); e.returnValue = ''; }
    });
  },

  // Rafraîchissement ou plantage du navigateur : la copie mémorisée est rouverte directement.
  _reprendre: function () {
    var D = DevoirEleve;
    var m = D._memoire(D.CLE);
    if (!m || !m.copie_id) return D._ecranCode();
    D._code = m.code || '';
    D._app.firestore().collection('devoir_copies').doc(m.copie_id).get().then(function (doc) {
      if (!doc.exists) throw new Error('copie absente');
      D._ouvrirCopie(m.copie_id);
      // Fait constater la reconnexion au serveur (journal, temps écoulé) et recale l'horloge.
      if (D._active(doc.data()) && D._code) {
        DevoirFirebase.appeler('joinSession', { code: D._code }).then(function (r) { D._caler(r.maintenant); }).catch(function () {});
      }
    }).catch(function () {
      // Copie reprise sur un autre poste, ou session d'un autre jour : retour à la saisie du code.
      D._memoire(D.CLE, null);
      D._ecranCode();
    });
  },

  // ── Écrans d'entrée ────────────────────────────────────────────────────────
  _ecranMessage: function (texte) {
    DevoirEleve._racine.innerHTML = '<main class="de-centre"><div class="de-carte"><p class="de-info">' + DevoirEleve._esc(texte) + '</p></div></main>';
  },

  _ecranCode: function (erreur) {
    var D = DevoirEleve;
    D._racine.innerHTML =
      '<main class="de-centre"><form class="de-carte" id="de-form-code" autocomplete="off">' +
        '<h1 class="de-titre">Devoir en classe</h1>' +
        '<label class="de-label" for="de-code">Code de la session, donné par votre enseignant</label>' +
        '<input class="de-code" id="de-code" name="code" inputmode="text" maxlength="6" autocapitalize="characters" spellcheck="false" value="' + D._esc(D._code) + '" />' +
        '<p class="de-erreur" id="de-erreur" role="alert">' + D._esc(erreur || '') + '</p>' +
        '<button class="de-btn" type="submit" id="de-valider-code">Continuer</button>' +
      '</form></main>';
    var champ = document.getElementById('de-code');
    champ.focus();
    champ.addEventListener('input', function () { champ.value = champ.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); });
    document.getElementById('de-form-code').addEventListener('submit', function (e) {
      e.preventDefault();
      D._code = champ.value;
      if (D._code.length < 6) { document.getElementById('de-erreur').textContent = 'Le code comporte 6 caractères.'; return; }
      D._entrer(null);
    });
  },

  // etudiantId absent : demande la liste des noms ; présent : prend ce nom et démarre.
  _entrer: function (etudiantId) {
    var D = DevoirEleve;
    var bouton = document.getElementById(etudiantId ? 'de-confirmer' : 'de-valider-code');
    if (bouton) bouton.disabled = true;
    var donnees = { code: D._code };
    if (etudiantId) donnees.etudiant_id = etudiantId;
    DevoirFirebase.appeler('joinSession', donnees).then(function (r) {
      D._caler(r.maintenant);
      D._session = r.session;
      if (r.etape === 'copie') {
        D._memoire(D.CLE, { code: D._code, copie_id: r.copie_id });
        D._ouvrirCopie(r.copie_id);
      } else {
        D._ecranChoix(r.etudiants, null);
      }
    }).catch(function (err) {
      var message = D._messageErreur(err);
      if (etudiantId) {
        // Nom pris entre-temps : la liste est redemandée pour griser le nom.
        DevoirFirebase.appeler('joinSession', { code: D._code }).then(function (r) { D._ecranChoix(r.etudiants, message); })
          .catch(function () { D._ecranCode(message); });
      } else {
        D._ecranCode(message);
      }
    });
  },

  _messageErreur: function (err) {
    var code = (err && err.code) || '';
    if (/not-found|already-exists|resource-exhausted|failed-precondition|permission-denied|invalid-argument/.test(code)) return err.message;
    return 'Connexion impossible pour le moment. Vérifiez le réseau, puis réessayez.';
  },

  _ecranChoix: function (etudiants, erreur) {
    var D = DevoirEleve;
    var e = D._esc;
    var s = D._session || {};
    D._racine.innerHTML =
      '<main class="de-centre"><div class="de-carte de-carte--large">' +
        '<h1 class="de-titre">' + e(s.titre || 'Devoir') + '</h1>' +
        '<p class="de-info">' + e(s.classe_nom || '') + ' · ' + e(s.exercices_par_etudiant) + ' exercice' + (s.exercices_par_etudiant > 1 ? 's' : '') + ' · ' + e(s.duree_minutes) + ' minutes</p>' +
        '<p class="de-label">Choisissez votre nom dans la liste</p>' +
        '<p class="de-erreur" role="alert">' + e(erreur || '') + '</p>' +
        '<div class="de-noms">' + etudiants.map(function (x) {
          return '<button class="de-nom" data-id="' + e(x.id) + '"' + (x.pris ? ' disabled title="Déjà connecté sur un autre poste"' : '') + '>' + e(x.nom) + (x.pris ? '<span class="de-nom-etat">déjà connecté</span>' : '') + '</button>';
        }).join('') + '</div>' +
        '<div id="de-confirmation"></div>' +
        '<button class="de-lien" id="de-retour-code">Changer de code</button>' +
      '</div></main>';
    document.getElementById('de-retour-code').addEventListener('click', function () { D._ecranCode(); });
    Array.prototype.forEach.call(D._racine.querySelectorAll('.de-nom'), function (b) {
      b.addEventListener('click', function () {
        var etu = etudiants.find(function (x) { return x.id === b.getAttribute('data-id'); });
        D._confirmerNom(etu);
      });
    });
  },

  _confirmerNom: function (etu) {
    var D = DevoirEleve;
    var zone = document.getElementById('de-confirmation');
    zone.innerHTML =
      '<div class="de-confirmation" role="dialog" aria-label="Confirmation du nom">' +
        '<p>Vous êtes bien <strong>' + D._esc(etu.nom) + '</strong> ?</p>' +
        '<p class="de-info">Le temps démarre dès que vous confirmez. Pendant l\'épreuve, vos réponses sont enregistrées automatiquement ; ' +
          'les sorties de la page et les tentatives de collage sont consignées pour votre enseignant.</p>' +
        '<div class="de-actions"><button class="de-btn" id="de-confirmer">Oui, commencer</button>' +
        '<button class="de-btn de-btn--secondaire" id="de-annuler-nom">Non, revenir à la liste</button></div>' +
      '</div>';
    document.getElementById('de-confirmer').addEventListener('click', function () { D._entrer(etu.id); });
    document.getElementById('de-annuler-nom').addEventListener('click', function () { zone.innerHTML = ''; });
    document.getElementById('de-confirmer').focus();
  },

  // ── Copie ────────────────────────────────────────────────────────────────
  _ouvrirCopie: function (copieId) {
    var D = DevoirEleve;
    D._copieId = copieId;
    D._copie = null;
    if (D._desabonner) D._desabonner();
    D._desabonner = D._app.firestore().collection('devoir_copies').doc(copieId).onSnapshot(function (doc) {
      if (!doc.exists) return;
      D._surCopie(doc.data());
    }, function () {
      // Le nom a été libéré puis repris sur un autre poste : cette page n'a plus la main.
      D._arreter();
      D._memoire(D.CLE, null);
      D._ecranMessage('Cette copie est maintenant ouverte sur un autre poste. Vous pouvez fermer cette page.');
    });
  },

  _exercicesVisibles: function (copie) {
    // Un exercice invalidé (anti-triche) disparaît pour l'étudiant ; son remplaçant prend sa place.
    return (copie.attributions || []).filter(function (a) { return a.statut === 'active' || a.statut === 'rendue'; })
      .sort(function (a, b) { return a.rang - b.rang; });
  },

  // Ce qui impose de reconstruire l'écran. Le passage « connecté » → « en cours » n'en fait pas
  // partie : il arrive pendant que l'étudiant tape sa première réponse.
  _signature: function (copie) {
    return (DevoirEleve._active(copie) ? 'active' : copie.statut) + '|' + (copie.attributions || []).map(function (a) { return a.id + ':' + a.statut; }).join(',') +
      '|' + (copie.message && copie.message.a ? DevoirEleve._ms(copie.message.a) : '');
  },

  _surCopie: function (copie) {
    var D = DevoirEleve;
    var premiere = !D._copie;
    var avant = D._copie ? D._signature(D._copie) : '';
    D._copie = copie;
    if (premiere) D._initialiserBrouillons(copie);
    if (!D._active(copie)) { D._ecranFin(copie); return; }
    var visibles = D._exercicesVisibles(copie);
    if (!visibles.some(function (a) { return a.id === D._courant; })) {
      var remplacant = D._courant ? visibles.find(function (a) { return a.remplace === D._courant; }) : null;
      var reprise = visibles.find(function (a) { return a.id === copie.exercice_courant; });
      D._courant = (remplacant || reprise || visibles[0] || {}).id || null;
    }
    if (premiere || avant !== D._signature(copie)) D._ecranCopie();
    if (!D._tic) D._tic = setInterval(D._battement, 500);
    D._battement();
  },

  _initialiserBrouillons: function (copie) {
    var D = DevoirEleve;
    D._brouillons = {};
    D._sales = {};
    Object.keys(copie.reponses || {}).forEach(function (attId) {
      D._brouillons[attId] = Object.assign({}, copie.reponses[attId].blocs || {});
    });
    // Saisie restée sur ce poste (coupure réseau, onglet fermé avant l'enregistrement).
    var local = D._memoire(D.CLE_BROUILLON + D._copieId);
    if (local && local.sales) {
      Object.keys(local.sales).forEach(function (attId) {
        if (local.brouillons && local.brouillons[attId]) { D._brouillons[attId] = local.brouillons[attId]; D._sales[attId] = true; }
      });
    }
  },

  _ecranCopie: function () {
    var D = DevoirEleve;
    var e = D._esc;
    var copie = D._copie;
    var visibles = D._exercicesVisibles(copie);
    var att = visibles.find(function (a) { return a.id === D._courant; });
    // Si l'écran est reconstruit pendant la frappe (message du serveur, prolongation…), le
    // curseur est remis où il était.
    var actif = document.activeElement;
    var foyer = actif && actif.classList && actif.classList.contains('de-champ')
      ? { bloc: actif.getAttribute('data-bloc'), debut: actif.selectionStart, fin: actif.selectionEnd } : null;
    var onglets = visibles.map(function (a, i) {
      var rempli = Object.keys(D._brouillons[a.id] || {}).some(function (k) { return (D._brouillons[a.id][k] || '').trim(); });
      return '<button class="de-onglet' + (a.id === D._courant ? ' active' : '') + '" data-att="' + e(a.id) + '" role="tab" aria-selected="' + (a.id === D._courant) + '">' +
        'Exercice ' + (i + 1) + (rempli ? '<span class="de-onglet-puce" aria-label="commencé"></span>' : '') + '</button>';
    }).join('');
    var corps = '';
    if (att) {
      var valeurs = D._brouillons[att.id] || {};
      corps =
        '<section class="de-enonce"><h2 class="de-h2">' + e(att.titre) + '</h2>' +
          // Énoncé rédigé par l'enseignant (HTML et formules) : inséré tel quel.
          '<div class="de-enonce-texte">' + att.enonce + '</div>' + D._htmlMedias(att) +
        '</section>' +
        '<section class="de-reponse" aria-label="Votre réponse">' +
          att.blocs.map(function (b) {
            return '<label class="de-bloc"><span class="de-bloc-label">' + e(b.label) + '</span>' +
              '<textarea class="de-champ" data-bloc="' + e(b.id) + '" rows="' + (b.id === 'unite' || b.id === 'resultat' ? 1 : 3) + '" maxlength="2000" spellcheck="false" autocomplete="off">' + e(valeurs[b.id] || '') + '</textarea></label>';
          }).join('') +
          '<div class="de-symboles" aria-label="Symboles">' + D.SYMBOLES.map(function (s) { return '<button type="button" class="de-symbole" data-symbole="' + e(s) + '" tabindex="-1">' + e(s) + '</button>'; }).join('') + '</div>' +
        '</section>';
    }
    D._racine.innerHTML =
      '<header class="de-entete">' +
        '<div class="de-entete-titre"><strong>' + e(copie.titre || 'Devoir') + '</strong><span>' + e(copie.nom) + '</span></div>' +
        '<div class="de-etat" id="de-etat" aria-live="polite"></div>' +
        '<div class="de-minuteur" id="de-minuteur" role="timer" aria-label="Temps restant"></div>' +
        '<button class="de-btn" id="de-rendre">Rendre ma copie</button>' +
      '</header>' +
      '<div class="de-bandeau" id="de-bandeau" role="status"></div>' +
      (copie.message && copie.message.texte ? '<div class="de-message" role="alert">' + e(copie.message.texte) + '</div>' : '') +
      '<nav class="de-onglets" role="tablist">' + onglets + '</nav>' +
      '<main class="de-copie">' + corps + '</main>' +
      '<div id="de-modale"></div>';
    D._katex();
    Array.prototype.forEach.call(D._racine.querySelectorAll('.de-onglet'), function (b) {
      b.addEventListener('click', function () { D._changerExercice(b.getAttribute('data-att')); });
    });
    Array.prototype.forEach.call(D._racine.querySelectorAll('.de-champ'), function (t) {
      t.addEventListener('input', function () { D._surSaisie(t); });
      // « À chaque changement de bloc » (§5) : on enregistre en quittant un champ.
      t.addEventListener('blur', function () { D._envoyer(D._courant); });
      t.addEventListener('focus', function () { D._champActif = t; });
    });
    Array.prototype.forEach.call(D._racine.querySelectorAll('.de-symbole'), function (b) {
      b.addEventListener('mousedown', function (ev) { ev.preventDefault(); });   // garde le curseur dans le champ
      b.addEventListener('click', function () { D._insererSymbole(b.getAttribute('data-symbole')); });
    });
    document.getElementById('de-rendre').addEventListener('click', D._demanderRendu);
    if (foyer) {
      var champ = D._racine.querySelector('.de-champ[data-bloc="' + foyer.bloc + '"]');
      if (champ) { champ.focus(); champ.setSelectionRange(foyer.debut, foyer.fin); }
    }
    D._majEtat();
  },

  _htmlMedias: function (att) {
    var e = DevoirEleve._esc;
    return (att.medias || []).map(function (m) {
      if (m.type === 'image' && /^(https?:\/\/|\/|media\/)/.test(m.ref)) {
        return '<figure class="de-media"><img src="' + e(m.ref) + '" alt="' + e(m.legende || 'Illustration de l\'énoncé') + '" />' + (m.legende ? '<figcaption>' + e(m.legende) + '</figcaption>' : '') + '</figure>';
      }
      return m.legende ? '<p class="de-info">' + e(m.legende) + '</p>' : '';
    }).join('');
  },

  _surSaisie: function (champ) {
    var D = DevoirEleve;
    var attId = D._courant;
    if (!D._brouillons[attId]) D._brouillons[attId] = {};
    D._brouillons[attId][champ.getAttribute('data-bloc')] = champ.value;
    D._sales[attId] = true;
    D._memoire(D.CLE_BROUILLON + D._copieId, { brouillons: D._brouillons, sales: D._sales });
    D._majEtat();
  },

  _insererSymbole: function (symbole) {
    var t = DevoirEleve._champActif;
    if (!t || !document.body.contains(t)) return;
    t.focus();
    t.setRangeText(symbole, t.selectionStart, t.selectionEnd, 'end');
    DevoirEleve._surSaisie(t);
  },

  _changerExercice: function (attId) {
    var D = DevoirEleve;
    if (attId === D._courant) return;
    var quitte = D._courant;
    D._courant = attId;
    D._ecranCopie();
    // Enregistre l'exercice quitté et signale au serveur l'exercice affiché (tableau de bord).
    D._envoyer(quitte, true);
  },

  // ── Brouillon automatique ───────────────────────────────────────────────────
  // force : envoie même sans modification (pour signaler le changement d'exercice).
  _envoyer: function (attId, force) {
    var D = DevoirEleve;
    if (!attId || !D._active(D._copie) || D._renduEnCours) return Promise.resolve();
    if (!D._sales[attId] && !force) return Promise.resolve();
    if (D._envois[attId]) return D._envois[attId];
    var envoye = JSON.stringify(D._brouillons[attId] || {});
    D._dernierEnvoi = Date.now();
    D._envois[attId] = DevoirFirebase.appeler('saveDraft', {
      copie_id: D._copieId, attribution_id: attId, blocs: D._brouillons[attId] || {}, exercice_courant: D._courant
    }).then(function (r) {
      delete D._envois[attId];
      D._caler(r.maintenant);
      D._horsLigne = false;
      // Rien n'a été tapé pendant l'envoi : l'exercice est à jour sur le serveur.
      if (JSON.stringify(D._brouillons[attId] || {}) === envoye) delete D._sales[attId];
      D._memoire(D.CLE_BROUILLON + D._copieId, Object.keys(D._sales).length ? { brouillons: D._brouillons, sales: D._sales } : null);
      D._majEtat();
    }).catch(function (err) {
      delete D._envois[attId];
      var code = (err && err.code) || '';
      if (/invalid-argument|permission-denied|not-found/.test(code)) {
        console.error('[DevoirEleve] enregistrement refusé :', err);
        D._bandeau('Cet enregistrement a été refusé (' + err.message + '). Prévenez votre enseignant.');
      } else {
        // Coupure réseau : la saisie reste sur ce poste et repart au retour de la connexion.
        D._horsLigne = true;
      }
      D._majEtat();
    });
    return D._envois[attId];
  },

  _toutEnvoyer: function () {
    var D = DevoirEleve;
    return Promise.all(Object.keys(D._sales).map(function (attId) { return D._envoyer(attId); }));
  },

  _bandeau: function (texte) {
    var b = document.getElementById('de-bandeau');
    if (b) { b.textContent = texte || ''; b.classList.toggle('visible', !!texte); }
  },

  _majEtat: function () {
    var D = DevoirEleve;
    var etat = document.getElementById('de-etat');
    if (!etat) return;
    var sale = Object.keys(D._sales).length > 0;
    if (D._horsLigne) {
      etat.textContent = 'Hors connexion';
      etat.className = 'de-etat de-etat--alerte';
      D._bandeau('Connexion perdue : vos réponses sont conservées sur ce poste et seront envoyées dès le retour du réseau. Continuez à composer.');
    } else {
      etat.textContent = sale ? 'Enregistrement…' : 'Enregistré';
      etat.className = 'de-etat' + (sale ? '' : ' de-etat--ok');
      var b = document.getElementById('de-bandeau');
      if (b && /^Connexion perdue/.test(b.textContent)) D._bandeau('');
    }
  },

  // ── Minuteur (reflet de l'heure de fin fixée par le serveur) ──────────────────
  _battement: function () {
    var D = DevoirEleve;
    if (!D._active(D._copie)) return;
    var reste = D._ms(D._copie.fin) - D._maintenant();
    var m = document.getElementById('de-minuteur');
    if (m) {
      var s = Math.max(0, Math.ceil(reste / 1000));
      m.textContent = (s >= 3600 ? Math.floor(s / 3600) + ':' : '') + String(Math.floor((s % 3600) / 60)).padStart(s >= 3600 ? 2 : 1, '0') + ':' + String(s % 60).padStart(2, '0');
      m.classList.toggle('de-minuteur--fin', reste <= D.ALERTE_FIN_MS);
    }
    if (reste <= 0) { D._rendre(true); return; }
    // Toutes les 10 secondes après modification ; plus souvent hors ligne, pour repartir vite.
    var delai = D._horsLigne ? 3000 : D.AUTOSAVE_MS;
    if (Object.keys(D._sales).length && Date.now() - D._dernierEnvoi >= delai) D._toutEnvoyer();
  },

  // ── Rendu ────────────────────────────────────────────────────────────────
  // Fenêtre de confirmation dans la page : une boîte de dialogue du navigateur ferait perdre
  // le focus à la fenêtre.
  _demanderRendu: function () {
    var D = DevoirEleve;
    var zone = document.getElementById('de-modale');
    if (!zone) return;
    zone.innerHTML =
      '<div class="de-voile"><div class="de-carte" role="dialog" aria-modal="true" aria-labelledby="de-modale-titre">' +
        '<h2 class="de-h2" id="de-modale-titre">Rendre votre copie ?</h2>' +
        '<p class="de-info">Après le rendu, vous ne pourrez plus rien modifier.</p>' +
        '<div class="de-actions"><button class="de-btn" id="de-confirmer-rendu">Oui, rendre ma copie</button>' +
        '<button class="de-btn de-btn--secondaire" id="de-annuler-rendu">Continuer à composer</button></div>' +
      '</div></div>';
    document.getElementById('de-confirmer-rendu').addEventListener('click', function () { D._rendre(false); });
    document.getElementById('de-annuler-rendu').addEventListener('click', function () { zone.innerHTML = ''; });
    document.getElementById('de-annuler-rendu').focus();
  },

  _rendre: function (auto) {
    var D = DevoirEleve;
    if (D._renduEnCours) return;
    D._renduEnCours = true;
    Array.prototype.forEach.call(D._racine.querySelectorAll('.de-champ, .de-btn, .de-onglet'), function (x) { x.disabled = true; });
    D._bandeau(auto ? 'Temps écoulé : envoi de votre copie…' : 'Envoi de votre copie…');
    var brouillons = {};
    Object.keys(D._sales).forEach(function (attId) { brouillons[attId] = D._brouillons[attId] || {}; });
    DevoirFirebase.appeler('submitCopy', { copie_id: D._copieId, auto: !!auto, brouillons: brouillons }).then(function (r) {
      D._caler(r.maintenant);
      D._renduEnCours = false;
      if (r.trop_tot) {
        // L'horloge de ce poste avançait : l'épreuve continue, à l'heure du serveur.
        D._ecranCopie();
        return;
      }
      D._sales = {};
      D._memoire(D.CLE_BROUILLON + D._copieId, null);
      // L'écran final est affiché à la réception du nouvel état de la copie (_surCopie).
    }).catch(function () {
      D._renduEnCours = false;
      D._horsLigne = true;
      D._bandeau('Connexion perdue : votre copie sera envoyée dès le retour du réseau. Ne fermez pas cette page.');
      setTimeout(function () { if (D._active(D._copie)) D._rendre(auto); }, 3000);
    });
  },

  _arreter: function () {
    var D = DevoirEleve;
    if (D._tic) { clearInterval(D._tic); D._tic = null; }
    if (D._desabonner) { D._desabonner(); D._desabonner = null; }
  },

  // Écran final : confirmation seule. Aucune note, aucune correction, aucun corrigé (§5).
  _ecranFin: function (copie) {
    var D = DevoirEleve;
    if (D._tic) { clearInterval(D._tic); D._tic = null; }
    D._memoire(D.CLE_BROUILLON + D._copieId, null);
    var verrouillee = copie.statut === 'verrouillee';
    D._racine.innerHTML =
      '<main class="de-centre"><div class="de-carte">' +
        '<h1 class="de-titre">' + (verrouillee ? 'Copie en attente' : 'Copie rendue') + '</h1>' +
        '<p class="de-info">' + (verrouillee
          ? D._esc((copie.message && copie.message.texte) || 'Votre copie est en attente. Levez la main : votre enseignant va venir vous voir.')
          : (copie.statut === 'rendue_auto' ? 'Le temps est écoulé : votre copie a été rendue automatiquement, avec tout ce que vous aviez saisi.' : 'Votre copie a bien été rendue.') +
            ' Vous pouvez fermer cette page.') + '</p>' +
        '<p class="de-nom-final">' + D._esc(copie.nom) + '</p>' +
      '</div></main>';
  }
};

document.addEventListener('DOMContentLoaded', DevoirEleve.init);
