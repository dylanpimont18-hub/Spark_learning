var TeacherDashboard = {
  _classes: [],
  _backCode: null,
  // escapeHtml (js/utils/ui-helpers.js) charge après ce fichier dans index.html :
  // wrapper nécessaire, une référence directe échouerait au chargement (ReferenceError).
  _esc: function(str) { return escapeHtml(str); },

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
      app.innerHTML = '<div class="td-error">Erreur de chargement.<button class="td-back-btn" onclick="TeacherDashboard.render(\'' + (backCode || '') + '\')">Réessayer</button></div>';
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
      var progressMap = {};
      var loadErrorCount = 0;
      if (cls.students && cls.students.length > 0) {
        var profilePromises = cls.students.map(function(uid) {
          return AuthService.getUserProfile(uid);
        });
        var progressPromises = cls.students.map(function(uid) {
          return AuthService.getStudentProgress(uid);
        });
        // allSettled plutôt que Promise.all : un seul élève dont le doc progress/{uid}
        // est inaccessible (ex. teacherIds pas encore backfillé) ne doit pas faire
        // échouer l'affichage de toute la classe.
        var profileResults = await Promise.allSettled(profilePromises);
        var progressResults = await Promise.allSettled(progressPromises);
        for (var i = 0; i < cls.students.length; i++) {
          var uid = cls.students[i];
          var profileOk = profileResults[i].status === 'fulfilled' && profileResults[i].value;
          var progressOk = progressResults[i].status === 'fulfilled';
          if (!profileOk || !progressOk) loadErrorCount++;
          students.push({
            uid: uid,
            profile: profileOk ? profileResults[i].value : { displayName: 'Élève (profil inaccessible)' },
            dataUnavailable: !profileOk || !progressOk
          });
          progressMap[uid] = progressOk ? progressResults[i].value : null;
        }
      }
      TeacherDashboard._renderClassDetail(cls, students, progressMap, loadErrorCount);
    } catch (e) {
      app.innerHTML = '<div class="td-error">Erreur de chargement.<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' + classIndex + ')">Réessayer</button></div>';
    }
  },

  // Agrège les scores réels (tracking) de la classe par module pour repérer les notions
  // les plus fragiles collectivement. Utilise sparkTracking (quiz.bestScore, evaluation.bestScore,
  // exercice.correct/attempts), synchronisé côté Firestore par SyncService — distinct de
  // progress[moduleId] qui ne contient que des booléens completed/quiz/exercice/evaluation.
  _computeWeakPoints: function(students, progressMap) {
    var moduleAgg = {};
    students.forEach(function(s) {
      var prog = progressMap[s.uid];
      var tracking = (prog && prog.tracking) ? prog.tracking : {};
      Object.keys(tracking).forEach(function(moduleId) {
        var mod = getModule(moduleId);
        if (!mod) return;
        var t = tracking[moduleId];
        var sectionPcts = [];
        if (t.quiz && t.quiz.bestScore != null && mod.quiz && mod.quiz.length) {
          sectionPcts.push({ section: 'quiz', pct: (t.quiz.bestScore / mod.quiz.length) * 100 });
        }
        if (t.evaluation && t.evaluation.bestTotal) {
          sectionPcts.push({ section: 'évaluation', pct: (t.evaluation.bestScore / t.evaluation.bestTotal) * 100 });
        }
        if (t.exercice && t.exercice.attempts > 0) {
          sectionPcts.push({ section: 'exercice', pct: (t.exercice.correct / t.exercice.attempts) * 100 });
        }
        if (sectionPcts.length === 0) return;

        if (!moduleAgg[moduleId]) moduleAgg[moduleId] = { studentAvgs: [], sectionPcts: {} };
        var studentAvg = sectionPcts.reduce(function(sum, sp) { return sum + sp.pct; }, 0) / sectionPcts.length;
        moduleAgg[moduleId].studentAvgs.push(studentAvg);
        sectionPcts.forEach(function(sp) {
          if (!moduleAgg[moduleId].sectionPcts[sp.section]) moduleAgg[moduleId].sectionPcts[sp.section] = [];
          moduleAgg[moduleId].sectionPcts[sp.section].push(sp.pct);
        });
      });
    });

    var results = Object.keys(moduleAgg).map(function(moduleId) {
      var agg = moduleAgg[moduleId];
      var mod = getModule(moduleId);
      var avgScore = agg.studentAvgs.reduce(function(a, b) { return a + b; }, 0) / agg.studentAvgs.length;

      var weakestSection = null;
      var weakestPct = 101;
      Object.keys(agg.sectionPcts).forEach(function(sec) {
        var arr = agg.sectionPcts[sec];
        var secAvg = arr.reduce(function(a, b) { return a + b; }, 0) / arr.length;
        if (secAvg < weakestPct) { weakestPct = secAvg; weakestSection = sec; }
      });

      return {
        moduleId: moduleId,
        title: mod ? mod.title : moduleId,
        avgScoreRaw: avgScore,
        avgScore: Math.round(avgScore),
        studentCount: agg.studentAvgs.length,
        weakestSection: weakestSection,
        weakestPct: Math.round(weakestPct)
      };
    });

    return results
      .filter(function(r) { return r.avgScoreRaw < 80; })
      .sort(function(a, b) { return a.avgScoreRaw - b.avgScoreRaw; })
      .slice(0, 5);
  },

  _prefillAssignment: function(classIndex, moduleId) {
    var sel = document.getElementById('td-assign-module');
    if (!sel) return;
    sel.value = moduleId;
    sel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    sel.focus();
  },

  _renderClassDetail: async function(cls, students, progressMap, loadErrorCount) {
    // ── Calcul stats ──
    var sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    var totalCompleted = 0;
    var totalModuleSlots = 0;
    var inactiveCount = 0;
    students.forEach(function(s) {
      var prog = progressMap[s.uid];
      var progData = (prog && prog.progress) ? prog.progress : {};
      var keys = Object.keys(progData);
      keys.forEach(function(k) {
        totalModuleSlots++;
        if (progData[k] && progData[k].completed) totalCompleted++;
      });
      var lastActive = null;
      if (prog && prog.tracking && prog.tracking.lastActive) {
        lastActive = prog.tracking.lastActive.toMillis
          ? prog.tracking.lastActive.toMillis()
          : Number(prog.tracking.lastActive);
      } else if (prog && prog.streak && prog.streak.lastDate) {
        lastActive = new Date(prog.streak.lastDate).getTime();
      }
      if (!lastActive || lastActive < sevenDaysAgo) inactiveCount++;
    });
    var avgCompletion = totalModuleSlots > 0
      ? Math.round((totalCompleted / totalModuleSlots) * 100)
      : 0;

    var weakPoints = TeacherDashboard._computeWeakPoints(students, progressMap);

    var classIndex = TeacherDashboard._classes.findIndex(function(c) { return c.id === cls.id; });

    // ── Stats bar ──
    var statsBar = '<div class="td-stats-bar">' +
      '<div class="td-stats-bar-item">' +
        '<span class="td-stats-bar-value">' + students.length + '</span>' +
        '<span class="td-stats-bar-label">élèves</span>' +
      '</div>' +
      '<div class="td-stats-bar-item">' +
        '<span class="td-stats-bar-value">' + avgCompletion + '%</span>' +
        '<span class="td-stats-bar-label">complétion moyenne</span>' +
      '</div>' +
      '<div class="td-stats-bar-item">' +
        '<span class="td-stats-bar-value">' + inactiveCount + '</span>' +
        '<span class="td-stats-bar-label">inactifs +7j</span>' +
      '</div>' +
    '</div>';

    // ── Points faibles de la classe ──
    var weakPointsHtml = '<div class="td-weakpoints-section">' +
      '<h3>🎯 Points faibles de la classe</h3>' +
      (weakPoints.length === 0
        ? '<p class="td-empty" style="font-size:0.85rem;padding:1rem;">Pas encore assez de quiz/exercices/évaluations réalisés pour détecter des points faibles.</p>'
        : weakPoints.map(function(wp) {
            return '<div class="td-weakpoint-card">' +
              '<div class="td-weakpoint-info">' +
                '<span class="td-weakpoint-title">' + TeacherDashboard._esc(wp.title) + '</span>' +
                '<span class="td-weakpoint-detail">Moyenne classe ' + wp.avgScore + '% · ' + wp.studentCount + ' élève(s) · le plus faible en ' + TeacherDashboard._esc(wp.weakestSection) + ' (' + wp.weakestPct + '%)</span>' +
              '</div>' +
              '<button class="td-weakpoint-assign-btn" onclick="TeacherDashboard._prefillAssignment(' + classIndex + ', \'' + TeacherDashboard._esc(wp.moduleId) + '\')">Assigner</button>' +
            '</div>';
          }).join('')
      ) +
    '</div>';

    // ── Liste élèves ──
    var studentsHtml = students.length === 0
      ? '<p class="td-empty">Aucun élève dans cette classe.</p>'
      : students.map(function(s) {
          var safeUid = TeacherDashboard._esc(s.uid);
          var safeCode = TeacherDashboard._esc(cls.id);
          var unavailableBadge = s.dataUnavailable
            ? ' <span class="td-student-unavailable" title="Données indisponibles (erreur réseau ou permissions)">⚠️ données incomplètes</span>'
            : '';
          return '<div class="td-student-row">' +
            '<span class="td-student-name">' + TeacherDashboard._esc(s.profile.displayName || 'Élève') + unavailableBadge + '</span>' +
            '<button class="td-view-btn" onclick="TeacherDashboard._viewStudent(\'' + safeUid + '\', \'' + safeCode + '\')">Voir progression →</button>' +
            '<button class="td-remove-btn" onclick="TeacherDashboard._removeStudent(\'' + safeUid + '\', \'' + safeCode + '\', ' + classIndex + ')">Retirer</button>' +
          '</div>';
        }).join('');

    // ── Devoirs ──
    var assignments = [];
    var assignmentsLoadFailed = false;
    try {
      assignments = await AuthService.getClassAssignments(cls.id);
    } catch(e) { assignments = []; assignmentsLoadFailed = true; }

    var assignmentsHtml = assignmentsLoadFailed
      ? '<p class="td-inline-warning">Impossible de charger les devoirs (erreur réseau).<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' + classIndex + ')">Réessayer</button></p>'
      : assignments.length === 0
      ? '<p class="td-empty" style="font-size:0.85rem;">Aucun devoir assigné.</p>'
      : assignments.map(function(a) {
          var mod = getModule(a.moduleId);
          var title = mod ? TeacherDashboard._esc(mod.title) : TeacherDashboard._esc(a.moduleId);
          var due = a.dueDate ? TeacherDashboard._esc(new Date(a.dueDate).toLocaleDateString('fr-FR')) : '—';
          var completedCount = students.filter(function(s) {
            var prog = progressMap[s.uid];
            var progData = prog && prog.progress ? prog.progress : {};
            return progData[a.moduleId] && progData[a.moduleId].completed;
          }).length;
          var safeId = TeacherDashboard._esc(a.id);
          return '<div class="td-assignment-card">' +
            '<span class="td-assignment-card-title">' + title + '</span>' +
            '<span class="td-assignment-card-meta">Avant le ' + due + '</span>' +
            '<span class="td-assignment-card-count">✅ ' + completedCount + '/' + students.length + '</span>' +
            '<button class="td-delete-btn" onclick="TeacherDashboard._deleteAssignment(\'' + safeId + '\', ' + classIndex + ')">🗑</button>' +
          '</div>';
        }).join('');

    // ── Formulaire devoir ──
    var moduleOptions = (window.MODULES || []).map(function(m) {
      return '<option value="' + TeacherDashboard._esc(m.id) + '">' + TeacherDashboard._esc(m.title) + '</option>';
    }).join('');
    var assignForm = '<div class="td-assignment-form">' +
      '<label>Module' +
        '<select id="td-assign-module">' + moduleOptions + '</select>' +
      '</label>' +
      '<label>Date limite' +
        '<input type="date" id="td-assign-date" />' +
      '</label>' +
      '<button class="td-assign-btn" onclick="TeacherDashboard._addAssignment(' + classIndex + ')">Assigner</button>' +
    '</div>';

    // Stocker dans l'objet pour que GradingPanel puisse y accéder
    TeacherDashboard._currentStudents = students;
    TeacherDashboard._currentProgressMap = progressMap;

    document.getElementById('app').innerHTML =
      '<div class="td-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard.render(TeacherDashboard._backCode)">← Retour</button>' +
          '<h1 class="td-title">' + TeacherDashboard._esc(cls.name) + '</h1>' +
          '<span class="td-class-code">Code : ' + TeacherDashboard._esc(cls.id) + '</span>' +
          '<button class="td-grading-btn" onclick="TeacherDashboard._openGrading(' + classIndex + ')">📊 Notes & Pronote</button>' +
        '</div>' +
        (loadErrorCount > 0
          ? '<p class="td-inline-warning">' + loadErrorCount + ' élève(s) affiché(s) avec des données incomplètes (erreur réseau/permissions) — les stats ci-dessous peuvent être sous-estimées.<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' + classIndex + ')">Réessayer</button></p>'
          : '') +
        statsBar +
        weakPointsHtml +
        '<div class="td-students">' + studentsHtml + '</div>' +
        '<div class="td-assignment-section">' +
          '<h3>📋 Devoirs</h3>' +
          assignmentsHtml +
          assignForm +
        '</div>' +
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
    var streak = (progress && progress.streak) ? progress.streak : {};

    var modules = Object.keys(prog).map(function(key) {
      var m = prog[key];
      var completed = m && m.completed ? 1 : 0;
      var hasQuiz = m && m.quiz != null;
      var hasExo = m && m.exercice != null;
      var hasEval = m && m.evaluation != null;
      return { key: key, data: m, completed: completed, hasQuiz: hasQuiz, hasExo: hasExo, hasEval: hasEval };
    });
    // Trier par complétion décroissante
    modules.sort(function(a, b) {
      if (b.completed !== a.completed) return b.completed - a.completed;
      return 0;
    });

    var modulesHtml = modules.length === 0
      ? '<p class="td-empty">Aucun module commencé.</p>'
      : modules.map(function(item) {
          var m = item.data;
          // Même ordre de priorité que GradingPanel._renderGradeTable() / _renderAll()
          // (js/views/gradingPanel.js) : sans ça, le même élève peut afficher un
          // pourcentage différent selon l'écran quand les deux champs sont présents.
          var score = m && m.evaluationScore != null ? m.evaluationScore + '%' : (m && m.score != null ? m.score + '%' : '—');
          var done = item.completed ? '✅' : '⏳';
          var modObj = getModule(item.key);
          var modTitle = (modObj && modObj.title) ? modObj.title : item.key;
          var quizIcon = item.hasQuiz ? '✅' : '—';
          var exoIcon = item.hasExo ? '✅' : '—';
          var evalIcon = item.hasEval ? '✅' : '—';
          return '<div class="td-module-row">' +
            '<div>' +
              '<span class="td-module-name">' + done + ' ' + TeacherDashboard._esc(modTitle) + '</span>' +
              '<div class="td-module-detail">Quiz ' + quizIcon + ' · Exercice ' + exoIcon + ' · Évaluation ' + evalIcon + '</div>' +
            '</div>' +
            '<span class="td-module-score">' + score + '</span>' +
          '</div>';
        }).join('');

    var streakVal = (streak && streak.current) ? streak.current : 0;
    var classIndex = TeacherDashboard._classes.findIndex(function(c) { return c.id === classId; });

    document.getElementById('app').innerHTML =
      '<div class="td-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' + (classIndex >= 0 ? classIndex : 0) + ')">← Retour</button>' +
          '<h1 class="td-title">' + TeacherDashboard._esc(name) + '</h1>' +
          '<span class="td-streak">🔥 Série : ' + streakVal + ' jours</span>' +
        '</div>' +
        '<div class="td-modules">' + modulesHtml + '</div>' +
      '</div>';
  },

  _removeStudent: async function(studentUid, classCode, classIndex) {
    if (!confirm('Retirer cet élève de la classe ?')) return;
    try {
      await AuthService.removeStudentFromClass(studentUid, classCode);
      showToast('Élève retiré de la classe.', 'success');
      // Mettre à jour la liste locale
      var cls = TeacherDashboard._classes[classIndex];
      if (cls && cls.students) {
        cls.students = cls.students.filter(function(uid) { return uid !== studentUid; });
      }
      TeacherDashboard._viewClass(classIndex);
    } catch (e) {
      showToast('Erreur lors de la suppression.', 'error');
    }
  },

  _openGrading: function(classIndex) {
    var cls = TeacherDashboard._classes[classIndex];
    if (!cls) return;
    GradingPanel.render({
      cls: cls,
      students: TeacherDashboard._currentStudents || [],
      progressMap: TeacherDashboard._currentProgressMap || {},
      backIndex: classIndex
    });
  },

  _addAssignment: async function(classIndex) {
    var cls = TeacherDashboard._classes[classIndex];
    if (!cls) return;
    var moduleId = document.getElementById('td-assign-module').value;
    var dueDate = document.getElementById('td-assign-date').value;
    if (!moduleId || !dueDate) {
      showToast('Sélectionne un module et une date limite.', 'error');
      return;
    }
    try {
      await AuthService.createAssignment(cls.id, moduleId, dueDate);
      showToast('Devoir assigné !', 'success');
      TeacherDashboard._viewClass(classIndex);
    } catch (e) {
      showToast('Erreur lors de l\'assignation.', 'error');
    }
  },

  _deleteAssignment: async function(assignmentId, classIndex) {
    if (!confirm('Supprimer ce devoir ?')) return;
    try {
      await AuthService.deleteAssignment(assignmentId);
      showToast('Devoir supprimé.', 'success');
      TeacherDashboard._viewClass(classIndex);
    } catch (e) {
      showToast('Erreur lors de la suppression.', 'error');
    }
  },

  _currentStudents: [],
  _currentProgressMap: {}
};
