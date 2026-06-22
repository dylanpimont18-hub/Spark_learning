var GradingPanel = {
  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: function(opts) {
    var cls = opts.cls;
    var students = opts.students || [];
    var progressMap = opts.progressMap || {};
    var backIndex = opts.backIndex != null ? opts.backIndex : 0;

    // ── Collecter tous les moduleIds travaillés par au moins un élève ──
    var moduleIdSet = {};
    students.forEach(function(s) {
      var prog = progressMap[s.uid];
      var progData = prog && prog.progress ? prog.progress : {};
      Object.keys(progData).forEach(function(k) { moduleIdSet[k] = true; });
    });
    var moduleIds = Object.keys(moduleIdSet);

    // ── Tableau comparatif ──
    var theadCols = '<th>Élève</th>' + moduleIds.map(function(id) {
      var mod = getModule(id);
      var title = mod ? GradingPanel._esc(mod.title) : GradingPanel._esc(id);
      return '<th>' + title + '</th>';
    }).join('');

    var tbodyRows = students.map(function(s) {
      var prog = progressMap[s.uid];
      var progData = prog && prog.progress ? prog.progress : {};
      var cells = moduleIds.map(function(id) {
        var m = progData[id];
        if (!m) return '<td>—</td>';
        if (m.completed) return '<td>✅</td>';
        var score = m.evaluationScore != null ? m.evaluationScore : (m.score != null ? m.score : null);
        if (score != null) return '<td>' + score + '%</td>';
        return '<td>⏳</td>';
      }).join('');
      return '<tr><td>' + GradingPanel._esc(s.profile.displayName || 'Élève') + '</td>' + cells + '</tr>';
    }).join('');

    var compTable = '<div class="gp-table-wrap">' +
      '<table class="gp-table"><thead><tr>' + theadCols + '</tr></thead>' +
      '<tbody>' + tbodyRows + '</tbody></table>' +
    '</div>';

    // ── Sélecteur module pour Pronote (uniquement modules avec évaluation) ──
    var evalModules = moduleIds.filter(function(id) {
      var mod = getModule(id);
      return mod && mod.evaluation;
    });
    var moduleSelectOpts = evalModules.map(function(id) {
      var mod = getModule(id);
      return '<option value="' + GradingPanel._esc(id) + '">' + GradingPanel._esc(mod ? mod.title : id) + '</option>';
    }).join('');
    var pronoteSelect = evalModules.length > 0
      ? '<select class="gp-module-select" id="gp-module-select" onchange="GradingPanel._renderGradeTable()">' +
          moduleSelectOpts +
        '</select>'
      : '<p class="td-empty">Aucun module avec évaluation disponible.</p>';

    document.getElementById('app').innerHTML =
      '<div class="gp-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' + backIndex + ')">← Retour</button>' +
          '<h1 class="td-title">📊 ' + GradingPanel._esc(cls.name) + '</h1>' +
        '</div>' +
        '<h2 style="font-size:1rem;margin-bottom:var(--space-md);">Comparaison élèves</h2>' +
        compTable +
        '<div class="gp-pronote-section">' +
          '<h3>⬇️ Export Pronote CSV</h3>' +
          '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:var(--space-md);">Sélectionne un module d\'évaluation :</p>' +
          pronoteSelect +
          '<div id="gp-grade-table-wrap"></div>' +
          (evalModules.length > 0 ? '<button class="gp-export-btn" onclick="GradingPanel._exportCSV()">⬇️ Télécharger CSV Pronote</button>' : '') +
        '</div>' +
      '</div>';

    // Stocker le contexte pour les callbacks
    GradingPanel._students = students;
    GradingPanel._progressMap = progressMap;
    GradingPanel._evalModules = evalModules;

    if (evalModules.length > 0) GradingPanel._renderGradeTable();
  },

  _students: [],
  _progressMap: {},
  _evalModules: [],

  _renderGradeTable: function() {
    var sel = document.getElementById('gp-module-select');
    if (!sel) return;
    var moduleId = sel.value;
    var students = GradingPanel._students;
    var progressMap = GradingPanel._progressMap;

    var rows = students.map(function(s) {
      var prog = progressMap[s.uid];
      var progData = prog && prog.progress ? prog.progress : {};
      var m = progData[moduleId];
      var rawScore = m && m.evaluationScore != null ? m.evaluationScore : (m && m.score != null ? m.score : '');
      // Convertir score % en note /20
      var note20 = rawScore !== '' ? Math.round(rawScore / 100 * 20 * 2) / 2 : '';
      var safeUid = s.uid.replace(/[^a-zA-Z0-9_-]/g, '');
      return '<tr>' +
        '<td>' + GradingPanel._esc(s.profile.displayName || 'Élève') + '</td>' +
        '<td><input class="gp-grade-input" type="number" min="0" max="20" step="0.5" value="' + note20 + '" id="gp-note-' + safeUid + '" /></td>' +
        '<td><input class="gp-appreciation-input" type="text" placeholder="Appréciation..." id="gp-app-' + safeUid + '" /></td>' +
      '</tr>';
    }).join('');

    var wrap = document.getElementById('gp-grade-table-wrap');
    if (!wrap) return;
    wrap.innerHTML = '<table class="gp-grade-table">' +
      '<thead><tr><th>Nom</th><th>Note /20</th><th>Appréciation</th></tr></thead>' +
      '<tbody>' + rows + '</tbody>' +
    '</table>';
  },

  _exportCSV: function() {
    var students = GradingPanel._students;
    var lines = ['Nom;Note;Appreciation'];
    students.forEach(function(s) {
      var safeUid = s.uid.replace(/[^a-zA-Z0-9_-]/g, '');
      var noteEl = document.getElementById('gp-note-' + safeUid);
      var appEl = document.getElementById('gp-app-' + safeUid);
      var note = noteEl ? noteEl.value : '';
      var app = appEl ? appEl.value.replace(/;/g, ',') : '';
      var name = (s.profile.displayName || 'Élève').replace(/;/g, ',');
      lines.push(name + ';' + note + ';' + app);
    });
    var csvContent = lines.join('\n');
    var blob = new Blob(['﻿' + csvContent], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'export-pronote.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
