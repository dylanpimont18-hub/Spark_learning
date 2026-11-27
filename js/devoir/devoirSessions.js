// Sous-onglet « Sessions » de l'onglet Devoirs (panneau admin) : création d'une session de
// devoir, ouverture (code à donner à la classe) et tableau de bord en direct pendant l'épreuve.
// Lecture : DevoirStore (Firestore, temps réel). Toute action passe par une Cloud Function
// (DevoirFirebase.appeler) : le serveur décide du code, du temps et des statuts.
var DevoirSessions = {
  _zone: null,
  _vue: 'liste',           // 'liste' | 'creation' | 'direct' | 'correction' (DevoirCorrection)
  _sessions: [],
  _session: null,          // session affichée dans le tableau de bord
  _copies: [],
  _evenements: [],
  _ecoutes: [],
  _tic: null,
  _dernierSync: 0,
  _selection: {},          // exercices cochés dans le formulaire de création
  _filtre: '',

  LIBELLES_STATUT: { brouillon: 'brouillon', ouverte: 'ouverte', terminee: 'terminée', archivee: 'archivée' },
  LIBELLES_COPIE: { en_attente: 'prêt', connecte: 'connecté', en_cours: 'en cours', rendue: 'rendu', rendue_auto: 'rendu (temps écoulé)', verrouillee: 'verrouillé' },

  _esc: function (s) { return DevoirAdmin._esc(s); },
  _toast: function (m, t) { DevoirAdmin._toast(m, t); },
  _ms: function (ts) { return ts && ts.toMillis ? ts.toMillis() : 0; },
  _heure: function (ts) {
    var ms = DevoirSessions._ms(ts);
    return ms ? new Date(ms).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '';
  },
  _secondes: function (ms) {
    if (!ms && ms !== 0) return '';
    return ms < 60000 ? String(Math.round(ms / 100) / 10).replace('.', ',') + ' s' : DevoirSessions._duree(ms);
  },
  _duree: function (ms) {
    var s = Math.max(0, Math.ceil(ms / 1000));
    return (s >= 3600 ? Math.floor(s / 3600) + ' h ' : '') + String(Math.floor((s % 3600) / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  },

  _action: async function (nom, donnees, succes) {
    try {
      var r = await DevoirFirebase.appeler(nom, donnees);
      if (succes) DevoirSessions._toast(succes, 'success');
      return r;
    } catch (err) {
      console.error('[DevoirSessions] ' + nom + ' :', err);
      DevoirSessions._toast(err.message || 'Action impossible.', 'error');
      return null;
    }
  },

  // ── Entrée et sortie (appelées par DevoirAdmin) ──────────────────────────────
  render: async function (zone) {
    DevoirSessions._zone = zone;
    if (DevoirSessions._vue === 'direct' && DevoirSessions._session) return DevoirSessions._ouvrirDirect(DevoirSessions._session.id);
    if (DevoirSessions._vue === 'correction') DevoirSessions._vue = 'liste';
    zone.innerHTML = '<div class="ap-loading">Chargement...</div>';
    try {
      DevoirSessions._sessions = await DevoirStore.listSessions();
    } catch (err) {
      zone.innerHTML = '<p class="dv-vide">Impossible de lire les sessions : ' + DevoirSessions._esc(err.message || err.code) + '</p>';
      return;
    }
    DevoirSessions._afficher();
  },

  quitter: function () {
    DevoirSessions._ecoutes.forEach(function (stop) { stop(); });
    DevoirSessions._ecoutes = [];
    if (DevoirSessions._tic) { clearInterval(DevoirSessions._tic); DevoirSessions._tic = null; }
    DevoirCorrection.quitter();
  },

  _afficher: function () {
    var S = DevoirSessions;
    if (!S._zone || !document.body.contains(S._zone)) { S.quitter(); return; }
    if (S._vue === 'correction') return;      // écran tenu par DevoirCorrection
    if (S._vue === 'creation') S._zone.innerHTML = S._htmlCreation();
    else if (S._vue === 'direct') { S._zone.innerHTML = S._htmlDirect(); S._majTemps(); }
    else S._zone.innerHTML = S._htmlListe();
  },

  _retourListe: function () {
    DevoirSessions.quitter();
    DevoirSessions._vue = 'liste';
    DevoirSessions._session = null;
    DevoirSessions.render(DevoirSessions._zone);
  },

  // ── Liste ──────────────────────────────────────────────────────────────────
  _htmlListe: function () {
    var S = DevoirSessions;
    var e = S._esc;
    var html = '<div class="dv-toolbar"><button class="ap-save-btn" onclick="DevoirSessions._nouvelle()">+ Nouvelle session</button></div>';
    if (!S._sessions.length) {
      return html + '<p class="dv-vide">Aucune session. Une session associe une classe, une sélection d\'exercices et une durée ; à son ouverture, elle reçoit un code à donner aux étudiants.</p>';
    }
    html += '<div class="dv-liste">';
    S._sessions.forEach(function (s) {
      var actions = '';
      if (s.statut === 'brouillon') {
        actions = '<button class="ap-save-btn" onclick="DevoirSessions._ouvrir(\'' + e(s.id) + '\')">Ouvrir la session</button>' +
          '<button class="ap-reject-btn" onclick="DevoirSessions._supprimer(\'' + e(s.id) + '\')">Supprimer</button>';
      } else {
        actions = '<button class="ap-save-btn" onclick="DevoirSessions._ouvrirDirect(\'' + e(s.id) + '\')">' + (s.statut === 'ouverte' ? 'Tableau de bord' : 'Voir les copies') + '</button>';
        actions += '<button class="ap-save-btn" onclick="DevoirSessions._corriger(\'' + e(s.id) + '\')">Corriger</button>';
        if (s.statut === 'terminee') actions += '<button class="dv-btn-secondaire" onclick="DevoirSessions._archiver(\'' + e(s.id) + '\')">Archiver</button>';
      }
      html +=
        '<div class="dv-carte' + (s.statut === 'archivee' ? ' dv-carte--inactive' : '') + '">' +
          '<div class="dv-carte-info">' +
            '<div class="dv-carte-titre">' + e(s.titre) + ' <span class="dv-etat dv-etat--' + (s.statut === 'ouverte' ? 'ok' : 'info') + '">' + e(S.LIBELLES_STATUT[s.statut] || s.statut) + '</span>' +
              (s.statut === 'ouverte' && s.code ? ' <span class="dv-code-mini">' + e(s.code) + '</span>' : '') + '</div>' +
            '<div class="dv-carte-meta">' + e(s.classe_nom) + ' · ' + (s.etudiants || []).length + ' étudiants · ' + e(s.exercices_par_etudiant) + ' exercice(s) parmi ' + (s.exercice_ids || []).length +
              ' · ' + e(s.duree_minutes) + ' min · ' + e(s.quota_remplacements) + ' remplacement(s) max</div>' +
          '</div>' +
          '<div class="dv-carte-actions">' + actions + '</div>' +
        '</div>';
    });
    return html + '</div>';
  },

  _ouvrir: async function (id) {
    if (!confirm('Ouvrir cette session ? Elle recevra un code, et les étudiants pourront choisir leur nom. L\'épreuve ne démarre que lorsque vous la lancez.')) return;
    var r = await DevoirSessions._action('updateSession', { session_id: id, action: 'ouvrir' }, 'Session ouverte.');
    if (r) DevoirSessions._ouvrirDirect(id);
  },

  _supprimer: async function (id) {
    if (!confirm('Supprimer cette session en brouillon ?')) return;
    if (await DevoirSessions._action('updateSession', { session_id: id, action: 'supprimer' }, 'Session supprimée.')) DevoirSessions._retourListe();
  },

  _archiver: async function (id) {
    if (await DevoirSessions._action('updateSession', { session_id: id, action: 'archiver' }, 'Session archivée.')) DevoirSessions._retourListe();
  },

  // Relecture et validation des copies (MVP-4) : js/devoir/devoirCorrection.js.
  _corriger: function (id) {
    var S = DevoirSessions;
    var session = S._sessions.find(function (s) { return s.id === id; });
    if (!session) return;
    S.quitter();
    S._vue = 'correction';
    S._session = null;
    DevoirCorrection.ouvrir(S._zone, session);
  },

  // ── Création ────────────────────────────────────────────────────────────────
  _nouvelle: function () {
    DevoirSessions._vue = 'creation';
    DevoirSessions._selection = {};
    DevoirSessions._filtre = '';
    DevoirSessions._afficher();
  },

  _exercicesActifs: function () {
    return DevoirAdmin._exercices.filter(function (x) { return x.actif !== false; });
  },

  _htmlCreation: function () {
    var S = DevoirSessions;
    var e = S._esc;
    var classes = DevoirAdmin._classes;
    if (!classes.length || !S._exercicesActifs().length) {
      return '<div class="dv-editeur"><h3 class="dv-h3">Nouvelle session</h3><p class="dv-vide">Il faut d\'abord au moins une classe et un exercice actif dans la banque.</p>' +
        '<div class="dv-boutons"><button class="dv-btn-secondaire" onclick="DevoirSessions._retourListe()">Retour</button></div></div>';
    }
    return '<div class="dv-editeur">' +
      '<h3 class="dv-h3">Nouvelle session</h3>' +
      '<div class="dv-champs">' +
        '<label class="dv-label">Titre du devoir<input class="dv-input" id="ds-titre" maxlength="120" placeholder="Devoir n° 3 — Bilan thermique" /></label>' +
        '<label class="dv-label">Classe<select class="dv-input" id="ds-classe">' + classes.map(function (c) { return '<option value="' + e(c.id) + '">' + e(c.nom) + ' (' + e(c.annee_scolaire) + ')</option>'; }).join('') + '</select></label>' +
      '</div>' +
      '<div class="dv-champs dv-champs--trois">' +
        '<label class="dv-label">Durée (minutes)<input class="dv-input" id="ds-duree" type="number" min="1" max="480" value="60" /></label>' +
        '<label class="dv-label">Exercices par étudiant<input class="dv-input" id="ds-n" type="number" min="1" max="10" value="3" oninput="DevoirSessions._majSelection()" /></label>' +
        '<label class="dv-label">Remplacements possibles (anti-triche)<input class="dv-input" id="ds-quota" type="number" min="0" max="5" value="2" oninput="DevoirSessions._majSelection()" /></label>' +
      '</div>' +
      '<div class="dv-label">Exercices proposés au tirage</div>' +
      '<div id="ds-exercices">' + S._htmlChoixExercices() + '</div>' +
      '<div class="dv-boutons dv-boutons--fin">' +
        '<button class="ap-save-btn" id="ds-creer" onclick="DevoirSessions._creer()">Créer la session</button>' +
        '<button class="dv-btn-secondaire" onclick="DevoirSessions._retourListe()">Annuler</button>' +
      '</div>' +
    '</div>';
  },

  _htmlChoixExercices: function () {
    var S = DevoirSessions;
    var e = S._esc;
    var tous = S._exercicesActifs();
    var visibles = S._filtre ? tous.filter(function (x) { return x.chapitre === S._filtre; }) : tous;
    var compte = {};
    tous.forEach(function (x) { compte[x.chapitre] = (compte[x.chapitre] || 0) + 1; });
    var options = '<option value="">Tous les chapitres (' + tous.length + ')</option>' + DevoirEngine.CHAPITRES.filter(function (c) { return compte[c.id]; }).map(function (c) {
      return '<option value="' + e(c.id) + '"' + (c.id === S._filtre ? ' selected' : '') + '>' + e(c.id + ' · ' + c.titre) + ' (' + compte[c.id] + ')</option>';
    }).join('');
    var nb = Object.keys(S._selection).length;
    var n = parseInt((document.getElementById('ds-n') || {}).value, 10) || 3;
    var quota = parseInt((document.getElementById('ds-quota') || {}).value, 10);
    if (isNaN(quota)) quota = 2;
    var avis = nb < n ? '<span class="dv-etat dv-etat--ko">il en faut au moins ' + n + '</span>'
      : nb < n + quota ? '<span class="dv-etat dv-etat--info">conseillé : ' + (n + quota) + ' ou plus, pour couvrir les remplacements</span>' : '';
    return '<div class="dv-toolbar">' +
        '<select class="dv-input dv-filtre" aria-label="Filtrer par chapitre" onchange="DevoirSessions._filtre = this.value; DevoirSessions._majSelection()">' + options + '</select>' +
        '<span class="dv-aide"><strong>' + nb + '</strong> exercice(s) sélectionné(s) ' + avis + '</span>' +
        '<button class="dv-btn-secondaire" onclick="DevoirSessions._toutCocher(true)">Tout cocher</button>' +
        '<button class="dv-btn-secondaire" onclick="DevoirSessions._toutCocher(false)">Tout décocher</button>' +
      '</div>' +
      '<div class="ds-choix">' + visibles.map(function (x) {
        return '<label class="ds-choix-ligne"><input type="checkbox" value="' + e(x.id) + '"' + (S._selection[x.id] ? ' checked' : '') + ' onchange="DevoirSessions._cocher(this.value, this.checked)" />' +
          '<span>' + e(x.titre) + '<span class="dv-carte-meta"> · chapitre ' + e(x.chapitre) + ' · difficulté ' + e(x.difficulte || '—') + '</span></span></label>';
      }).join('') + '</div>';
  },

  _majSelection: function () {
    var z = document.getElementById('ds-exercices');
    if (z) z.innerHTML = DevoirSessions._htmlChoixExercices();
  },

  _cocher: function (id, coche) {
    if (coche) DevoirSessions._selection[id] = true; else delete DevoirSessions._selection[id];
    DevoirSessions._majSelection();
  },

  _toutCocher: function (coche) {
    var S = DevoirSessions;
    S._exercicesActifs().filter(function (x) { return !S._filtre || x.chapitre === S._filtre; })
      .forEach(function (x) { if (coche) S._selection[x.id] = true; else delete S._selection[x.id]; });
    S._majSelection();
  },

  _creer: async function () {
    var S = DevoirSessions;
    var titre = document.getElementById('ds-titre').value.trim();
    if (!titre) { S._toast('Donnez un titre au devoir.', 'error'); return; }
    var btn = document.getElementById('ds-creer');
    btn.disabled = true;
    var r = await S._action('createSession', {
      titre: titre,
      classe_id: document.getElementById('ds-classe').value,
      exercice_ids: Object.keys(S._selection),
      duree_minutes: parseInt(document.getElementById('ds-duree').value, 10),
      exercices_par_etudiant: parseInt(document.getElementById('ds-n').value, 10),
      quota_remplacements: parseInt(document.getElementById('ds-quota').value, 10)
    }, 'Session créée (brouillon).');
    if (!r) { btn.disabled = false; return; }
    if (r.avertissement) alert(r.avertissement);
    S._retourListe();
  },

  // ── Tableau de bord en direct ────────────────────────────────────────────────
  _ouvrirDirect: function (id) {
    var S = DevoirSessions;
    S.quitter();
    S._vue = 'direct';
    S._session = S._sessions.find(function (s) { return s.id === id; }) || { id: id };
    S._copies = [];
    S._evenements = [];
    var erreur = function (err) { console.error('[DevoirSessions] écoute :', err); S._toast('Lecture en direct interrompue : ' + (err.message || err.code), 'error'); };
    S._ecoutes.push(DevoirStore.ecouterSession(id, function (s) { if (s) { S._session = s; S._afficher(); } }, erreur));
    S._ecoutes.push(DevoirStore.ecouterCopies(id, function (copies) { S._copies = copies; S._afficher(); }, erreur));
    S._ecoutes.push(DevoirStore.ecouterEvenements(id, function (evts) { S._evenements = evts; S._afficher(); }, erreur));
    S._tic = setInterval(S._majTemps, 1000);
    S._afficher();
  },

  _estActive: function (c) { return c.statut === 'connecte' || c.statut === 'en_cours'; },

  _htmlDirect: function () {
    var S = DevoirSessions;
    var e = S._esc;
    var s = S._session;
    if (!s || !s.titre) return '<div class="ap-loading">Chargement...</div>';
    var parEtudiant = {};
    S._copies.forEach(function (c) { parEtudiant[c.etudiant_id] = c; });
    var ouverte = s.statut === 'ouverte';
    if (ouverte && !s.lancee_a) return S._htmlAttente();
    var compte = { absent: 0, actif: 0, rendu: 0, verrouille: 0 };
    var lignes = (s.etudiants || []).map(function (etu) {
      var c = parEtudiant[etu.id];
      if (!c) { compte.absent++; return '<tr class="ds-ligne ds-ligne--absent"><td>' + e(etu.nom) + '</td><td><span class="dv-etat dv-etat--info">absent</span></td><td colspan="5"></td></tr>'; }
      if (S._estActive(c)) compte.actif++; else if (c.statut === 'verrouillee') compte.verrouille++; else compte.rendu++;
      var visibles = (c.attributions || []).filter(function (a) { return a.statut === 'active' || a.statut === 'rendue'; }).sort(function (a, b) { return a.rang - b.rang; });
      var rang = visibles.findIndex(function (a) { return a.id === c.exercice_courant; });
      var courant = visibles[rang];
      var remplis = 0;
      var total = 0;
      visibles.forEach(function (a) {
        total += (a.blocs || []).length;
        var rep = ((c.reponses || {})[a.id] || {}).blocs || {};
        remplis += (a.blocs || []).filter(function (b) { return (rep[b.id] || '').trim(); }).length;
      });
      var classeEtat = S._estActive(c) ? 'ok' : c.statut === 'verrouillee' ? 'ko' : 'info';
      var incidents = S._evenements.filter(function (ev) { return ev.copie_id === c.id && ev.incident && !ev.annule; })
        .sort(function (a, b) { return (b.numero || 0) - (a.numero || 0); });
      var breves = S._evenements.filter(function (ev) { return ev.copie_id === c.id && ev.bref; }).length;
      var cellule = [];
      if (c.changements_utilises) cellule.push('<span class="dv-etat dv-etat--' + (c.changements_utilises > c.quota_remplacements ? 'ko' : 'avert') + '">' + c.changements_utilises + ' sortie' + (c.changements_utilises > 1 ? 's' : '') + ' de page</span>');
      if (breves) cellule.push('<span class="dv-carte-meta">' + breves + ' brève' + (breves > 1 ? 's' : '') + '</span>');
      if (c.collages_bloques) cellule.push('<span class="dv-etat dv-etat--avert">' + c.collages_bloques + ' collage' + (c.collages_bloques > 1 ? 's' : '') + ' bloqué' + (c.collages_bloques > 1 ? 's' : '') + '</span>');
      if (c.absence_depuis && S._estActive(c)) cellule.push('<span class="dv-etat dv-etat--ko ds-absence" data-depuis="' + S._ms(c.absence_depuis) + '">hors de la page</span>');
      if (incidents.length) {
        cellule.push('<span class="dv-carte-meta">dernière : ' + e(S._heure(incidents[0].horodatage)) + ', ' + e(S._secondes(incidents[0].duree_absence_ms)) + '</span>');
      }
      var actions = '';
      if (incidents.length) actions += '<button class="dv-btn-secondaire" onclick="DevoirSessions._annulerIncident(\'' + e(incidents[0].id) + '\')" title="Faux positif : rétablit l\'exercice d\'origine et décrémente le compteur">Annuler le dernier incident</button>';
      if (c.statut === 'verrouillee' && ouverte) actions += '<button class="ap-save-btn" onclick="DevoirSessions._deverrouiller(\'' + e(c.id) + '\')">Déverrouiller</button>';
      if (ouverte && c.uid) actions += '<button class="dv-btn-secondaire" onclick="DevoirSessions._liberer(\'' + e(c.id) + '\')" title="Permet à l\'étudiant de reprendre sa copie sur un autre poste">Libérer le nom</button>';
      if (!c.uid) actions += '<span class="dv-etat dv-etat--info">nom libéré</span>';
      return '<tr class="ds-ligne">' +
        '<td>' + e(etu.nom) + '</td>' +
        '<td><span class="dv-etat dv-etat--' + classeEtat + '">' + e(S.LIBELLES_COPIE[c.statut] || c.statut) + '</span></td>' +
        '<td>' + (courant && S._estActive(c) ? (rang + 1) + ' / ' + visibles.length + ' <span class="dv-carte-meta">' + e(courant.titre) + '</span>' : '—') + '</td>' +
        '<td>' + remplis + ' / ' + total + '</td>' +
        '<td class="ds-temps" data-fin="' + (S._estActive(c) ? S._ms(c.fin) : 0) + '">' + (S._estActive(c) ? '' : '—') + '</td>' +
        '<td class="ds-incidents">' + (cellule.join(' ') || '—') + '</td>' +
        '<td class="dv-carte-actions">' + actions + '</td>' +
      '</tr>';
    }).join('');
    return '<div class="ds-direct">' +
      '<div class="ds-entete">' +
        '<div><button class="dv-btn-lien ds-retour" onclick="DevoirSessions._retourListe()">← Sessions</button>' +
          '<h3 class="dv-h3">' + e(s.titre) + ' <span class="dv-etat dv-etat--' + (ouverte ? 'ok' : 'info') + '">' + e(S.LIBELLES_STATUT[s.statut] || s.statut) + '</span></h3>' +
          '<p class="dv-aide">' + e(s.classe_nom) + ' · ' + e(s.exercices_par_etudiant) + ' exercice(s) par étudiant · ' + e(s.duree_minutes) + ' min · ' +
            compte.actif + ' en cours, ' + compte.rendu + ' rendu(s), ' + compte.absent + ' absent(s)' + (compte.verrouille ? ', ' + compte.verrouille + ' verrouillé(s)' : '') + '</p></div>' +
        (ouverte ? '<div class="ds-code" aria-label="Code de la session"><span class="ds-code-label">sparklearning.fr/devoirs · code</span><span class="ds-code-valeur" id="ds-code">' + e(s.code) + '</span></div>' : '') +
      '</div>' +
      (ouverte ? '<div class="dv-boutons">' +
        '<button class="dv-btn-secondaire" onclick="DevoirSessions._prolonger()">Prolonger la durée…</button>' +
        '<button class="ap-reject-btn" onclick="DevoirSessions._fermer()">Fermer la session</button>' +
      '</div>' : '') +
      '<table class="dv-table ds-table"><thead><tr><th>Étudiant</th><th>État</th><th>Exercice en cours</th><th>Blocs remplis</th><th>Temps restant</th><th>Incidents</th><th></th></tr></thead><tbody>' + lignes + '</tbody></table>' +
      S._htmlJournal() +
    '</div>';
  },

  // Salle d'attente : session ouverte, épreuve pas encore lancée. Une tuile par étudiant, pour
  // voir d'un coup d'œil qui a choisi son nom ; le lancement tire les exercices et démarre le temps.
  _htmlAttente: function () {
    var S = DevoirSessions;
    var e = S._esc;
    var s = S._session;
    var parEtudiant = {};
    S._copies.forEach(function (c) { parEtudiant[c.etudiant_id] = c; });
    var prets = 0;
    var tuiles = (s.etudiants || []).map(function (etu) {
      var c = parEtudiant[etu.id];
      var pret = !!(c && c.uid);
      if (pret) prets++;
      return '<div class="ds-tuile' + (pret ? ' ds-tuile--pret' : '') + '" data-etudiant="' + e(etu.id) + '">' +
        '<span class="ds-tuile-nom">' + e(etu.nom) + '</span>' +
        '<span class="ds-tuile-etat">' + (pret ? 'prêt' : 'en attente') + '</span>' +
        (pret ? '<button class="dv-btn-lien" onclick="DevoirSessions._liberer(\'' + e(c.id) + '\')" title="L\'étudiant s\'est trompé de nom : il pourra en choisir un autre">Libérer</button>' : '') +
      '</div>';
    }).join('');
    var total = (s.etudiants || []).length;
    return '<div class="ds-direct">' +
      '<div class="ds-entete">' +
        '<div><button class="dv-btn-lien ds-retour" onclick="DevoirSessions._retourListe()">← Sessions</button>' +
          '<h3 class="dv-h3">' + e(s.titre) + ' <span class="dv-etat dv-etat--avert">salle d\'attente</span></h3>' +
          '<p class="dv-aide">' + e(s.classe_nom) + ' · ' + e(s.exercices_par_etudiant) + ' exercice(s) par étudiant · ' + e(s.duree_minutes) + ' min</p></div>' +
        '<div class="ds-code" aria-label="Code de la session"><span class="ds-code-label">sparklearning.fr/devoirs · ' + e(s.classe_nom) + ' · code</span><span class="ds-code-valeur" id="ds-code">' + e(s.code) + '</span></div>' +
      '</div>' +
      '<p class="ds-prets" id="ds-prets"><strong>' + prets + ' / ' + total + '</strong> ' + (prets > 1 ? 'étudiants prêts' : 'étudiant prêt') + '</p>' +
      '<div class="ds-tuiles">' + tuiles + '</div>' +
      '<div class="dv-boutons">' +
        '<button class="ap-save-btn ds-lancer" id="ds-lancer" onclick="DevoirSessions._lancer()">Lancer l\'épreuve</button>' +
        '<button class="ap-reject-btn" onclick="DevoirSessions._fermer()">Fermer la session</button>' +
      '</div>' +
    '</div>';
  },

  _lancer: async function () {
    var S = DevoirSessions;
    var s = S._session;
    var prets = S._copies.filter(function (c) { return c.statut === 'en_attente' && c.uid; }).length;
    var manquants = (s.etudiants || []).length - prets;
    var texte = 'Lancer l\'épreuve pour ' + prets + ' étudiant(s) ? Les exercices sont tirés et le temps (' + s.duree_minutes + ' min) démarre maintenant, pour tous en même temps.';
    if (manquants > 0) texte += '\n\n' + manquants + ' étudiant(s) n\'ont pas encore choisi leur nom. Ils pourront entrer après le lancement : leur temps démarrera à leur arrivée.';
    if (!confirm(texte)) return;
    var bouton = document.getElementById('ds-lancer');
    if (bouton) bouton.disabled = true;
    await S._action('updateSession', { session_id: s.id, action: 'lancer' }, 'Épreuve lancée.');
  },

  // Journal de la session, du plus récent au plus ancien (entrées, reconnexions, rendus).
  _htmlJournal: function () {
    var S = DevoirSessions;
    var e = S._esc;
    if (!S._evenements.length) return '';
    var noms = {};
    ((S._session && S._session.etudiants) || []).forEach(function (x) { noms[x.id] = x.nom; });
    var LIB = {
      join: 'entrée', depart: 'début de l\'épreuve', nom_rendu: 'nom rendu par l\'étudiant', reconnect: 'reconnexion', submit: 'copie rendue', timeout: 'rendu automatique', nom_libere: 'nom libéré',
      blur: 'fenêtre inactive', visibility_hidden: 'onglet masqué', paste_blocked: 'collage bloqué', drop_blocked: 'glisser-déposer bloqué',
      incident_annule: 'incident annulé', copie_deverrouillee: 'copie déverrouillée', remplacement_manuel: 'exercice remplacé par l\'enseignant'
    };
    var EFFET = { remplacement: 'exercice remplacé', verrouillage: 'copie verrouillée', sans_remplacement: 'incident compté, plus d\'exercice de remplacement' };
    var lignes = S._evenements.slice(0, 80).map(function (ev) {
      var precisions = [];
      if (ev.duree_absence_ms) precisions.push('absence de ' + S._secondes(ev.duree_absence_ms));
      if (ev.bref) precisions.push('brève, sans conséquence');
      if (ev.incident) precisions.push('incident n° ' + ev.numero + ' : ' + (EFFET[ev.effet] || ev.effet));
      if (ev.detail) precisions.push(ev.detail);
      return '<li' + (ev.incident && !ev.annule ? ' class="ds-journal-incident"' : '') + '><span class="ds-journal-heure">' + e(S._heure(ev.horodatage)) + '</span> <strong>' + e(noms[ev.etudiant_id] || ev.etudiant_id) + '</strong> — ' +
        e(LIB[ev.type] || ev.type) + (precisions.length ? ' <span class="dv-carte-meta">(' + e(precisions.join(' ; ')) + ')</span>' : '') +
        (ev.annule ? ' <span class="dv-etat dv-etat--info">annulé</span>' : '') + '</li>';
    }).join('');
    return '<details class="ds-journal"><summary>Journal de la session (' + S._evenements.length + ' événement' + (S._evenements.length > 1 ? 's' : '') + ')</summary><ul>' + lignes + '</ul></details>';
  },

  // Rafraîchit les minuteurs sans reconstruire le tableau ; déclenche le rendu automatique des
  // copies dont le temps est écoulé (étudiant parti sans rendre).
  _majTemps: function () {
    var S = DevoirSessions;
    if (!S._zone || !document.body.contains(S._zone)) { S.quitter(); return; }
    var maintenant = Date.now();
    var expiree = false;
    Array.prototype.forEach.call(S._zone.querySelectorAll('.ds-temps'), function (td) {
      var fin = Number(td.getAttribute('data-fin'));
      if (!fin) return;
      td.textContent = S._duree(fin - maintenant);
      td.classList.toggle('ds-temps--fin', fin - maintenant < 5 * 60 * 1000);
      if (fin - maintenant < -8000) expiree = true;
    });
    Array.prototype.forEach.call(S._zone.querySelectorAll('.ds-absence'), function (el) {
      el.textContent = 'hors de la page depuis ' + S._duree(maintenant - Number(el.getAttribute('data-depuis')));
    });
    if (expiree && maintenant - S._dernierSync > 10000 && S._session) {
      S._dernierSync = maintenant;
      DevoirFirebase.appeler('syncSession', { session_id: S._session.id }).catch(function (err) { console.error('[DevoirSessions] syncSession :', err); });
    }
  },

  _prolonger: async function () {
    var saisie = prompt('Prolonger toutes les copies en cours de combien de minutes ?', '5');
    if (saisie === null) return;
    var minutes = parseInt(saisie, 10);
    if (!(minutes >= 1 && minutes <= 120)) { DevoirSessions._toast('Entre 1 et 120 minutes.', 'error'); return; }
    var r = await DevoirSessions._action('updateSession', { session_id: DevoirSessions._session.id, action: 'prolonger', minutes: minutes });
    if (r) DevoirSessions._toast(r.copies_prolongees + ' copie(s) prolongée(s) de ' + minutes + ' min.', 'success');
  },

  _fermer: async function () {
    var actives = DevoirSessions._copies.filter(DevoirSessions._estActive).length;
    if (!confirm('Fermer la session ?' + (actives ? '\n\n' + actives + ' copie(s) encore en cours seront rendues automatiquement, en l\'état.' : '') + '\n\nPlus aucun étudiant ne pourra entrer.')) return;
    await DevoirSessions._action('updateSession', { session_id: DevoirSessions._session.id, action: 'fermer' }, 'Session fermée.');
  },

  _annulerIncident: async function (evenementId) {
    if (!confirm('Annuler cet incident (faux positif) ?\n\nL\'exercice d\'origine est rétabli avec les réponses de l\'étudiant, l\'exercice de remplacement est conservé dans la copie sans être noté, et le compteur de sorties est décrémenté.')) return;
    var r = await DevoirSessions._action('cancelIncident', { evenement_id: evenementId });
    if (r) DevoirSessions._toast('Incident annulé : ' + r.effet + '.', 'success');
  },

  _deverrouiller: async function (copieId) {
    if (!confirm('Déverrouiller cette copie ? L\'étudiant pourra continuer. Le compteur d\'incidents est conservé : une nouvelle sortie de page la verrouillera de nouveau.')) return;
    await DevoirSessions._action('unlockCopy', { copie_id: copieId }, 'Copie déverrouillée.');
  },

  _liberer: async function (copieId) {
    if (!confirm('Libérer ce nom ? L\'étudiant pourra le choisir à nouveau depuis un autre poste et reprendre sa copie là où elle en était. Le poste actuel perd la main.')) return;
    await DevoirSessions._action('releaseName', { copie_id: copieId }, 'Nom libéré.');
  }
};
