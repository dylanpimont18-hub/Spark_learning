// Suivi dans le temps du module « devoir », pour l'enseignant seul (sous-onglet « Suivi » de
// l'onglet Devoirs). Par étudiant et par chapitre : les notes validées, les critères où les
// points se perdent, les erreurs qui reviennent d'un devoir à l'autre.
// Ne lit que des corrections VALIDÉES par l'enseignant (cahier des charges §3, principe 5).
// Rien n'est écrit, rien n'est montré aux étudiants : lecture seule de collections que les
// règles Firestore réservent à l'admin. Aucun appel à l'IA : le regroupement des erreurs se fait
// sur l'étiquette, telle que l'enseignant l'a validée.
// `agreger` est une fonction pure (testée sous Node : scripts/test-devoir-suivi.js).
var DevoirSuivi = {
  SEUIL_RECURRENT: 2,        // une erreur « revient » à partir de 2 devoirs différents
  SEUIL_MANQUANT: 0.5,       // élément attendu non acquis : moins de la moitié de ses points
  CLE_ELEMENTS: '__elements',

  _zone: null,
  _donnees: null,            // résultat de agreger()
  _sessions: [],
  _classeId: null,
  _etudiantId: null,

  _esc: function (s) { return DevoirAdmin._esc(s); },
  _fr: function (x, d) { return Number(x).toFixed(d === undefined ? 1 : d).replace('.', ','); },
  _ms: function (ts) { return ts && ts.toMillis ? ts.toMillis() : (ts instanceof Date ? ts.getTime() : (typeof ts === 'number' ? ts : 0)); },

  // Étiquette d'erreur comparable d'une copie à l'autre : casse, espaces et ponctuation finale.
  cleErreur: function (etiquette) {
    return String(etiquette || '').toLowerCase().replace(/\s+/g, ' ').replace(/[.;:!]+$/, '').trim();
  },

  // fiches : devoir_corrections ; copies : devoir_copies_prive (avec id) ; sessions :
  // devoir_sessions (avec id) ; exercices : banque (pour retrouver le chapitre d'une fiche
  // ancienne, enregistrée avant que la fiche ne le porte). dateDe : horodatage → millisecondes.
  agreger: function (fiches, copies, sessions, exercices, dateDe) {
    var S = DevoirSuivi;
    var ms = dateDe || S._ms;
    var chapitreExo = {};
    (exercices || []).forEach(function (x) { chapitreExo[x.id] = x.chapitre; });
    var parSession = {};
    (sessions || []).forEach(function (s) { parSession[s.id] = s; });
    var etudiants = {};
    var chapitresVus = {};
    function etu(id) {
      if (!etudiants[id]) etudiants[id] = { id: id, devoirs: [], chapitres: {}, criteres: {}, erreurs: {}, manquants: [], points: 0, max: 0 };
      return etudiants[id];
    }
    function dateSession(id) {
      var s = parSession[id] || {};
      return ms(s.lancee_a) || ms(s.ouverte_a) || ms(s.created_at) || 0;
    }

    // Notes finales : une par copie validée.
    (copies || []).forEach(function (c) {
      var corr = c.correction;
      if (!corr || corr.statut !== 'validee' || typeof corr.note_finale !== 'number') return;
      var s = parSession[c.session_id] || {};
      etu(c.etudiant_id).devoirs.push({
        session_id: c.session_id, copie_id: c.id, titre: s.titre || 'Devoir', classe_id: s.classe_id || null,
        date_ms: dateSession(c.session_id) || ms(corr.validee_a), note: corr.note_finale, note_sur: corr.note_sur || 20
      });
    });

    // Détail par exercice : fiches validées et comptées dans la note.
    (fiches || []).forEach(function (f) {
      if (f.statut !== 'validee' || !f.compte_dans_note || !f.finale) return;
      var e = etu(f.etudiant_id);
      var chapitre = f.chapitre || chapitreExo[f.exercice_id] || '?';
      chapitresVus[chapitre] = true;
      var ch = e.chapitres[chapitre] || (e.chapitres[chapitre] = { points: 0, max: 0, n: 0, sessions: {} });
      ch.points += f.finale.note || 0;
      ch.max += f.finale.note_max || 0;
      ch.n++;
      ch.sessions[f.session_id] = true;
      e.points += f.finale.note || 0;
      e.max += f.finale.note_max || 0;
      (f.finale.criteres || []).forEach(function (c) {
        var element = c.nature === 'element';
        var cle = element ? S.CLE_ELEMENTS : c.critere_id;
        var k = e.criteres[cle] || (e.criteres[cle] = { cle: cle, label: element ? 'Éléments rédigés' : c.label, points: 0, max: 0, n: 0 });
        k.points += c.points_obtenus || 0;
        k.max += c.points_max || 0;
        k.n++;
        if (element && c.points_max > 0 && (c.points_obtenus || 0) < S.SEUIL_MANQUANT * c.points_max) {
          e.manquants.push({ label: c.label, chapitre: chapitre, titre: f.titre || f.exercice_id || '', session_id: f.session_id, points: c.points_obtenus || 0, max: c.points_max, date_ms: dateSession(f.session_id) });
        }
      });
      (f.finale.erreurs || []).forEach(function (x) {
        var cle = S.cleErreur(x && x.etiquette);
        if (!cle) return;
        var r = e.erreurs[cle] || (e.erreurs[cle] = { cle: cle, etiquette: String(x.etiquette).trim(), n: 0, majeures: 0, sessions: {}, chapitres: {}, exemples: [], derniere_ms: 0 });
        r.n++;
        if (x.gravite === 'majeure') r.majeures++;
        r.sessions[f.session_id] = true;
        r.chapitres[chapitre] = true;
        if (x.description && r.exemples.length < 3 && r.exemples.indexOf(x.description) === -1) r.exemples.push(x.description);
        r.derniere_ms = Math.max(r.derniere_ms, dateSession(f.session_id));
      });
    });

    Object.keys(etudiants).forEach(function (id) {
      var e = etudiants[id];
      e.devoirs.sort(function (a, b) { return a.date_ms - b.date_ms; });
      e.moyenne = e.devoirs.length ? e.devoirs.reduce(function (s, d) { return s + d.note; }, 0) / e.devoirs.length : null;
      e.manquants.sort(function (a, b) { return b.date_ms - a.date_ms; });
      var liste = Object.keys(e.erreurs).map(function (k) {
        var r = e.erreurs[k];
        r.devoirs = Object.keys(r.sessions).length;
        r.recurrent = r.devoirs >= S.SEUIL_RECURRENT;
        return r;
      }).sort(function (a, b) { return b.devoirs - a.devoirs || b.n - a.n || a.etiquette.localeCompare(b.etiquette, 'fr'); });
      e.recurrentes = liste.filter(function (r) { return r.recurrent; });
      e.isolees = liste.filter(function (r) { return !r.recurrent; });
    });
    return { etudiants: etudiants, chapitres: Object.keys(chapitresVus).sort() };
  },

  // Note sur 20 d'un cumul de points (affichage ; l'arrondi officiel reste celui de la copie).
  sur20: function (points, max) { return max > 0 ? points / max * 20 : null; },

  // Erreurs les plus répandues dans un groupe d'étudiants : { etiquette, etudiants, occurrences }.
  frequentes: function (donnees, ids) {
    var S = DevoirSuivi;
    var parCle = {};
    ids.forEach(function (id) {
      var e = donnees.etudiants[id];
      if (!e) return;
      Object.keys(e.erreurs).forEach(function (k) {
        var r = e.erreurs[k];
        var g = parCle[k] || (parCle[k] = { etiquette: r.etiquette, etudiants: 0, occurrences: 0 });
        g.etudiants++;
        g.occurrences += r.n;
      });
    });
    return Object.keys(parCle).map(function (k) { return parCle[k]; })
      .sort(function (a, b) { return b.etudiants - a.etudiants || b.occurrences - a.occurrences || a.etiquette.localeCompare(b.etiquette, 'fr'); });
  },

  // ── Écran ────────────────────────────────────────────────────────────────
  render: async function (zone) {
    var S = DevoirSuivi;
    S._zone = zone;
    zone.innerHTML = '<div class="ap-loading">Chargement...</div>';
    try {
      var r = await Promise.all([DevoirStore.listFichesValidees(), DevoirStore.listCopiesValidees(), DevoirStore.listSessions()]);
      S._sessions = r[2];
      S._donnees = S.agreger(r[0], r[1], r[2], DevoirAdmin._exercices);
    } catch (err) {
      console.error('[DevoirSuivi] lecture :', err);
      zone.innerHTML = '<p class="dv-vide">Impossible de lire les corrections : ' + S._esc(err.message || err.code) + '</p>';
      return;
    }
    var classes = DevoirAdmin._classes;
    if (!S._classeId || !classes.some(function (c) { return c.id === S._classeId; })) S._classeId = classes.length ? classes[0].id : null;
    S._etudiantId = null;
    S._afficher();
  },

  _etudiantsDeLaClasse: function () {
    var S = DevoirSuivi;
    var classe = DevoirAdmin._classes.find(function (c) { return c.id === S._classeId; });
    var liste = classe ? (classe.etudiants || []).map(function (x) { return { id: x.id, nom: x.nom }; }) : [];
    // Étudiant sorti de la liste depuis, mais qui a des copies validées dans cette classe.
    var connus = {};
    liste.forEach(function (x) { connus[x.id] = true; });
    S._sessions.filter(function (s) { return s.classe_id === S._classeId; }).forEach(function (s) {
      (s.etudiants || []).forEach(function (x) {
        if (!connus[x.id] && S._donnees.etudiants[x.id]) { connus[x.id] = true; liste.push({ id: x.id, nom: x.nom }); }
      });
    });
    return liste.sort(function (a, b) { return a.nom.localeCompare(b.nom, 'fr'); });
  },

  _niveau: function (note) { return note === null ? 'info' : note >= 12 ? 'ok' : note >= 8 ? 'avert' : 'ko'; },

  _afficher: function () {
    var S = DevoirSuivi;
    var e = S._esc;
    if (!S._zone || !document.body.contains(S._zone)) return;
    var classes = DevoirAdmin._classes;
    if (!classes.length) { S._zone.innerHTML = '<p class="dv-vide">Aucune classe pour l\'instant.</p>'; return; }
    var etudiants = S._etudiantsDeLaClasse();
    var D = S._donnees;
    var avecDonnees = etudiants.filter(function (x) { return D.etudiants[x.id]; });
    var chapitres = D.chapitres.filter(function (ch) { return avecDonnees.some(function (x) { return D.etudiants[x.id].chapitres[ch]; }); });
    var entete = '<div class="dv-toolbar"><label class="dv-label su-classe">Classe<select class="dv-input" id="su-classe" onchange="DevoirSuivi._classeId = this.value; DevoirSuivi._etudiantId = null; DevoirSuivi._afficher()">' +
      classes.map(function (c) { return '<option value="' + e(c.id) + '"' + (c.id === S._classeId ? ' selected' : '') + '>' + e(c.nom) + ' (' + e(c.annee_scolaire) + ')</option>'; }).join('') + '</select></label></div>' +
      '<p class="dv-aide">Suivi réservé à l\'enseignant : il ne repose que sur les copies que vous avez <strong>validées</strong>, et rien n\'est communiqué aux étudiants. ' +
      'Dans chaque case : la note sur 20 obtenue sur les exercices du chapitre, et le nombre d\'exercices notés.</p>';
    if (!avecDonnees.length) {
      S._zone.innerHTML = entete + '<p class="dv-vide" id="su-vide">Aucune copie validée pour cette classe. Le suivi se remplit à mesure que vous validez des corrections (onglet Sessions → Corriger).</p>';
      return;
    }
    var lignes = etudiants.map(function (x) {
      var d = D.etudiants[x.id];
      if (!d) return '<tr class="ds-ligne ds-ligne--absent"><td>' + e(x.nom) + '</td><td colspan="' + (chapitres.length + 2) + '"><span class="dv-carte-meta">aucune copie validée</span></td></tr>';
      var cases = chapitres.map(function (ch) {
        var c = d.chapitres[ch];
        if (!c) return '<td class="su-case">—</td>';
        var note = S.sur20(c.points, c.max);
        return '<td class="su-case" data-chapitre="' + e(ch) + '"><span class="dv-etat dv-etat--' + S._niveau(note) + '">' + e(S._fr(note)) + '</span> <span class="dv-carte-meta">' + c.n + ' ex.</span></td>';
      }).join('');
      var rec = d.recurrentes.length;
      return '<tr class="ds-ligne su-ligne' + (x.id === S._etudiantId ? ' su-ligne--active' : '') + '" data-etudiant="' + e(x.id) + '">' +
        '<td><button class="dv-btn-lien su-nom" onclick="DevoirSuivi._ouvrir(\'' + e(x.id) + '\')">' + e(x.nom) + '</button></td>' +
        '<td class="su-case su-moyenne">' + (d.moyenne === null ? '—' : '<strong>' + e(S._fr(d.moyenne)) + '</strong> <span class="dv-carte-meta">' + d.devoirs.length + ' devoir' + (d.devoirs.length > 1 ? 's' : '') + '</span>') + '</td>' +
        cases +
        '<td>' + (rec ? '<span class="dv-etat dv-etat--avert">' + rec + ' erreur' + (rec > 1 ? 's' : '') + ' qui revien' + (rec > 1 ? 'nent' : 't') + '</span>' : '<span class="dv-carte-meta">—</span>') + '</td>' +
      '</tr>';
    }).join('');
    var titres = chapitres.map(function (ch) {
      var c = DevoirEngine.chapitreDe(ch);
      return '<th title="' + e(c ? c.titre : 'chapitre inconnu') + '">' + e(ch) + '</th>';
    }).join('');
    var frequentes = S.frequentes(D, avecDonnees.map(function (x) { return x.id; })).filter(function (g) { return g.etudiants >= 2; }).slice(0, 8);
    S._zone.innerHTML = entete +
      '<div class="su-defilement"><table class="dv-table ds-table su-table"><thead><tr><th>Étudiant</th><th>Moyenne des devoirs</th>' + titres + '<th>Erreurs</th></tr></thead><tbody>' + lignes + '</tbody></table></div>' +
      (frequentes.length ? '<section class="su-bloc" id="su-classe-erreurs"><h4 class="dv-h4">Erreurs partagées par plusieurs étudiants</h4><ul class="dc-liste">' + frequentes.map(function (g) {
        return '<li><strong>' + e(g.etiquette) + '</strong> — ' + g.etudiants + ' étudiants, ' + g.occurrences + ' fois</li>';
      }).join('') + '</ul><p class="dv-aide">Utile pour préparer une correction collective.</p></section>' : '') +
      '<div id="su-detail">' + (S._etudiantId ? S._htmlEtudiant(S._etudiantId) : '<p class="dv-aide">Cliquez sur un nom pour voir le détail : devoirs, chapitres, critères, erreurs qui reviennent.</p>') + '</div>';
  },

  _ouvrir: function (id) {
    DevoirSuivi._etudiantId = id;
    DevoirSuivi._afficher();
    var z = document.getElementById('su-detail');
    if (z && z.scrollIntoView) z.scrollIntoView({ block: 'nearest' });
  },

  _date: function (ms) { return ms ? new Date(ms).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : ''; },

  _htmlEtudiant: function (id) {
    var S = DevoirSuivi;
    var e = S._esc;
    var d = S._donnees.etudiants[id];
    var nom = (S._etudiantsDeLaClasse().find(function (x) { return x.id === id; }) || {}).nom || id;
    if (!d) return '<p class="dv-vide">Aucune copie validée pour ' + e(nom) + '.</p>';
    var devoirs = d.devoirs.map(function (x) {
      return '<tr><td>' + e(S._date(x.date_ms)) + '</td><td>' + e(x.titre) + '</td><td class="dc-note">' + e(S._fr(x.note)) + ' / ' + e(x.note_sur) + '</td></tr>';
    }).join('');
    var chapitres = Object.keys(d.chapitres).sort().map(function (ch) {
      var c = d.chapitres[ch];
      var note = S.sur20(c.points, c.max);
      var def = DevoirEngine.chapitreDe(ch);
      return '<tr><td>' + e(ch + (def ? ' · ' + def.titre : '')) + '</td><td>' + c.n + '</td><td>' + Object.keys(c.sessions).length + '</td>' +
        '<td class="dc-note"><span class="dv-etat dv-etat--' + S._niveau(note) + '">' + e(S._fr(note)) + ' / 20</span></td></tr>';
    }).join('');
    var ordre = ['methode', 'calcul', 'resultat', 'unite', S.CLE_ELEMENTS];
    var criteres = Object.keys(d.criteres).sort(function (a, b) {
      var ia = ordre.indexOf(a), ib = ordre.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b);
    }).map(function (k) {
      var c = d.criteres[k];
      var taux = c.max > 0 ? Math.round(c.points / c.max * 100) : 0;
      return '<div class="su-critere" data-critere="' + e(k) + '"><span class="su-critere-label">' + e(c.label) + '</span>' +
        '<span class="su-barre" role="img" aria-label="' + taux + ' % des points"><span class="su-barre-plein su-barre-plein--' + (taux >= 60 ? 'ok' : taux >= 40 ? 'avert' : 'ko') + '" style="width:' + taux + '%"></span></span>' +
        '<span class="su-critere-taux">' + taux + ' %</span><span class="dv-carte-meta">' + c.n + ' fois noté</span></div>';
    }).join('');
    function ligneErreur(r) {
      return '<li><strong>' + e(r.etiquette) + '</strong> — ' + r.n + ' fois, sur ' + r.devoirs + ' devoir' + (r.devoirs > 1 ? 's' : '') +
        ' <span class="dv-carte-meta">(chapitre' + (Object.keys(r.chapitres).length > 1 ? 's' : '') + ' ' + e(Object.keys(r.chapitres).sort().join(', ')) +
        (r.majeures ? ' ; ' + r.majeures + ' majeure' + (r.majeures > 1 ? 's' : '') : '') + (r.derniere_ms ? ' ; dernière fois le ' + e(S._date(r.derniere_ms)) : '') + ')</span>' +
        (r.exemples.length ? '<span class="su-exemple">' + e(r.exemples[0]) + '</span>' : '') + '</li>';
    }
    var manquants = d.manquants.slice(0, 12).map(function (m) {
      return '<li><strong>' + e(m.label) + '</strong> <span class="dv-carte-meta">(chapitre ' + e(m.chapitre) + ', ' + e(m.titre) + ' : ' + e(S._fr(m.points, 0)) + ' / ' + e(S._fr(m.max, 0)) + ')</span></li>';
    }).join('');
    return '<section class="su-etudiant" data-etudiant="' + e(id) + '">' +
      '<h4 class="dv-h4" id="su-etudiant-nom">' + e(nom) + (d.moyenne !== null ? ' <span class="dv-carte-meta">moyenne ' + e(S._fr(d.moyenne)) + ' / 20 sur ' + d.devoirs.length + ' devoir' + (d.devoirs.length > 1 ? 's' : '') + '</span>' : '') + '</h4>' +
      '<div class="su-grille">' +
        '<div class="su-bloc"><div class="dc-colonne-titre">Devoirs validés</div>' +
          (devoirs ? '<table class="dv-table"><thead><tr><th>Date</th><th>Devoir</th><th>Note</th></tr></thead><tbody>' + devoirs + '</tbody></table>' : '<p class="dv-vide">Aucun.</p>') + '</div>' +
        '<div class="su-bloc"><div class="dc-colonne-titre">Par chapitre</div>' +
          '<table class="dv-table"><thead><tr><th>Chapitre</th><th>Exercices</th><th>Devoirs</th><th>Résultat</th></tr></thead><tbody>' + chapitres + '</tbody></table></div>' +
        '<div class="su-bloc"><div class="dc-colonne-titre">Où les points se perdent</div>' + criteres +
          '<p class="dv-aide">Part des points obtenus sur chaque critère du barème, tous devoirs validés confondus.</p></div>' +
        '<div class="su-bloc" id="su-recurrentes"><div class="dc-colonne-titre">Erreurs qui reviennent</div>' +
          (d.recurrentes.length ? '<ul class="dc-liste">' + d.recurrentes.map(ligneErreur).join('') + '</ul>'
            : '<p class="dv-vide">Aucune erreur relevée sur deux devoirs différents.</p>') +
          (d.isolees.length ? '<details class="dv-details"><summary>Erreurs relevées une seule fois (' + d.isolees.length + ')</summary><ul class="dc-liste">' + d.isolees.map(ligneErreur).join('') + '</ul></details>' : '') + '</div>' +
        (manquants ? '<div class="su-bloc" id="su-manquants"><div class="dc-colonne-titre">Arguments attendus non acquis (questions rédigées)</div><ul class="dc-liste">' + manquants + '</ul></div>' : '') +
      '</div></section>';
  }
};

if (typeof module !== 'undefined' && module.exports) module.exports = DevoirSuivi;
