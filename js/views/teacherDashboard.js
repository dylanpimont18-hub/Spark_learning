var TeacherDashboard = {
  _classes: [],
  _backCode: null,
  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: async function(backCode) {
    // backCode : si '__admin__', le bouton retour va vers AdminPanel; sinon, retour normal
    TeacherDashboard._backCode = backCode || null;
    var app = document.getElementById('app');
    app.innerHTML = '<div class="td-loading">Chargement...</div>';
    try {
      var uid = AuthService.getCurrentUser().uid;
      TeacherDashboard._classes = await AuthService.getTeacherClasses(uid);
      TeacherDashboard._renderDashboard();
    } catch (e) {
      app.innerHTML = '<div class="td-error">Erreur de chargement.</div>';
    }
  },

  _renderDashboard: function() {
    var backBtn = TeacherDashboard._backCode === '__admin__'
      ? '<button class="td-back-btn" onclick="AdminPanel.render()">← Retour Admin</button>'
      : '<button class="td-back-btn" onclick="navigate(\'home\')">← Accueil</button>';

    var classesHtml = TeacherDashboard._classes.length === 0
      ? '<p class="td-empty">Vous n\'avez pas encore de classe.</p>'
      : TeacherDashboard._classes.map(function(cls, i) {
          return '<div class="td-class-card">' +
            '<div class="td-class-header">' +
              '<div>' +
                '<h3 class="td-class-name">' + TeacherDashboard._esc(cls.name) + '</h3>' +
                '<span class="td-class-code">Code : ' + TeacherDashboard._esc(cls.id) + '</span>' +
              '</div>' +
              '<span class="td-student-count">' + (cls.students ? cls.students.length : 0) + ' élève(s)</span>' +
            '</div>' +
            '<button class="td-view-btn" onclick="TeacherDashboard._viewClass(\'' + i + '\')">Voir les élèves →</button>' +
          '</div>';
        }).join('');

    document.getElementById('app').innerHTML =
      '<div class="td-container">' +
        '<div class="td-header">' +
          backBtn +
          '<h1 class="td-title">Tableau de bord</h1>' +
          '<button class="td-create-btn" onclick="TeacherDashboard._createClass()">+ Créer une classe</button>' +
        '</div>' +
        '<div class="td-classes">' + classesHtml + '</div>' +
      '</div>';
  },

  _createClass: async function() {
    var name = prompt('Nom de la nouvelle classe (ex: Terminale TS1) :');
    if (!name || !name.trim()) return;
    try {
      var uid = AuthService.getCurrentUser().uid;
      var code = await AuthService.createClass(uid, name.trim());
      showToast('Classe créée ! Code : ' + code, 'success');
      TeacherDashboard.render(TeacherDashboard._backCode);
    } catch (e) {
      showToast('Erreur lors de la création de la classe.', 'error');
    }
  },

  _viewClass: async function(classIndex) {
    var cls = TeacherDashboard._classes[parseInt(classIndex)];
    if (!cls) return;
    var app = document.getElementById('app');
    app.innerHTML = '<div class="td-loading">Chargement des élèves...</div>';
    try {
      var students = [];
      if (cls.students && cls.students.length > 0) {
        for (var i = 0; i < cls.students.length; i++) {
          var profile = await AuthService.getUserProfile(cls.students[i]);
          if (profile) students.push({ uid: cls.students[i], profile: profile });
        }
      }
      TeacherDashboard._renderClassDetail(cls, students);
    } catch (e) {
      app.innerHTML = '<div class="td-error">Erreur de chargement.</div>';
    }
  },

  _renderClassDetail: function(cls, students) {
    var studentsHtml = students.length === 0
      ? '<p class="td-empty">Aucun élève dans cette classe.</p>'
      : students.map(function(s) {
          return '<div class="td-student-row">' +
            '<span class="td-student-name">' + TeacherDashboard._esc(s.profile.displayName || 'Élève') + '</span>' +
            '<button class="td-view-btn" onclick="TeacherDashboard._viewStudent(\'' + s.uid + '\', \'' + TeacherDashboard._esc(cls.id) + '\')">Voir progression →</button>' +
          '</div>';
        }).join('');

    document.getElementById('app').innerHTML =
      '<div class="td-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard.render(TeacherDashboard._backCode)">← Retour</button>' +
          '<h1 class="td-title">' + TeacherDashboard._esc(cls.name) + '</h1>' +
          '<span class="td-class-code">Code : ' + TeacherDashboard._esc(cls.id) + '</span>' +
        '</div>' +
        '<div class="td-students">' + studentsHtml + '</div>' +
      '</div>';
  },

  _viewStudent: async function(studentUid, classId) {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="td-loading">Chargement de la progression...</div>';
    try {
      var profile = await AuthService.getUserProfile(studentUid);
      var progress = await AuthService.getStudentProgress(studentUid);
      TeacherDashboard._renderStudentProgress(studentUid, classId, profile, progress);
    } catch (e) {
      app.innerHTML = '<div class="td-error">Erreur de chargement.</div>';
    }
  },

  _renderStudentProgress: function(studentUid, classId, profile, progress) {
    var name = profile ? profile.displayName || 'Élève' : 'Élève';
    var prog = (progress && progress.progress) ? progress.progress : {};
    var tracking = (progress && progress.tracking) ? progress.tracking : {};
    var streak = (progress && progress.streak) ? progress.streak : {};

    var modules = Object.keys(prog);
    var modulesHtml = modules.length === 0
      ? '<p class="td-empty">Aucun module commencé.</p>'
      : modules.map(function(key) {
          var m = prog[key];
          var score = m && m.score != null ? m.score + '%' : '—';
          var done = m && m.completed ? '✅' : '⏳';
          return '<div class="td-module-row">' +
            '<span class="td-module-name">' + done + ' ' + TeacherDashboard._esc(key) + '</span>' +
            '<span class="td-module-score">' + score + '</span>' +
          '</div>';
        }).join('');

    var streakVal = (streak && streak.current) ? streak.current : 0;

    document.getElementById('app').innerHTML =
      '<div class="td-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' +
            (function(){ var idx = TeacherDashboard._classes.findIndex(function(c){ return c.id === classId; }); return idx >= 0 ? idx : 0; })() + ')">← Retour</button>' +
          '<h1 class="td-title">' + TeacherDashboard._esc(name) + '</h1>' +
          '<span class="td-streak">🔥 Série : ' + streakVal + ' jours</span>' +
        '</div>' +
        '<div class="td-modules">' + modulesHtml + '</div>' +
      '</div>';
  }
};
