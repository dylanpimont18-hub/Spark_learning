var AdminPanel = {
  _tab: 'pending',
  _settingsOpen: false,
  _allUsersCache: [],

  // escapeHtml (js/utils/ui-helpers.js) charge après ce fichier dans index.html :
  // wrapper nécessaire, une référence directe échouerait au chargement (ReferenceError).
  _esc: function(str) { return escapeHtml(str); },

  _timeAgo: function(ts) {
    if (!ts) return '—';
    var ms = ts.toMillis ? ts.toMillis() : (ts.seconds ? ts.seconds * 1000 : 0);
    if (!ms) return '—';
    var diff = Date.now() - ms;
    if (diff < 60000) return 'à l\'instant';
    if (diff < 3600000) return 'il y a ' + Math.floor(diff / 60000) + ' min';
    if (diff < 86400000) return 'il y a ' + Math.floor(diff / 3600000) + 'h';
    return 'il y a ' + Math.floor(diff / 86400000) + 'j';
  },

  render: async function() {
    document.getElementById('app').innerHTML = '<div class="ap-loading">Chargement...</div>';
    try {
      var statsPromise    = (typeof AuthService.getAdminStats === 'function')    ? AuthService.getAdminStats()    : Promise.resolve(null);
      var settingsPromise = (typeof AuthService.getPlatformSettings === 'function') ? AuthService.getPlatformSettings() : Promise.resolve({});
      var annPromise      = (typeof AuthService.getAnnouncement === 'function')   ? AuthService.getAnnouncement()  : Promise.resolve(null);

      var results = await Promise.allSettled([statsPromise, settingsPromise, annPromise]);
      var stats       = results[0].status === 'fulfilled' ? results[0].value : null;
      var settings    = results[1].status === 'fulfilled' ? results[1].value : {};
      var announcement = results[2].status === 'fulfilled' ? results[2].value : null;

      if (results[0].status === 'rejected') console.error('[AdminPanel] getAdminStats failed:', results[0].reason);
      if (results[1].status === 'rejected') console.error('[AdminPanel] getPlatformSettings failed:', results[1].reason);
      if (results[2].status === 'rejected') console.error('[AdminPanel] getAnnouncement failed:', results[2].reason);

      AdminPanel._renderShell(stats, settings, announcement);
      AdminPanel._loadTab(AdminPanel._tab);
    } catch(e) {
      console.error('[AdminPanel] render error:', e);
      document.getElementById('app').innerHTML = '<div class="ap-container"><div class="ap-error">Erreur de chargement : ' + AdminPanel._esc(e.message || String(e)) + '</div></div>';
    }
  },

  _renderShell: function(stats, settings, announcement) {
    document.getElementById('app').innerHTML =
      '<div class="ap-container">' +
        '<div class="ap-header">' +
          '<h1 class="ap-title">⚙️ Administration</h1>' +
          '<button class="ap-teacher-btn" onclick="TeacherDashboard.render(\'__admin__\')">Mon espace enseignant →</button>' +
        '</div>' +
        AdminPanel._renderDashboard(stats) +
        AdminPanel._renderSettingsSection(settings, announcement) +
        '<div class="ap-tabs">' +
          '<button class="ap-tab' + (AdminPanel._tab === 'pending' ? ' active' : '') + '" data-tab="pending" onclick="AdminPanel._switchTab(\'pending\')">En attente</button>' +
          '<button class="ap-tab' + (AdminPanel._tab === 'all' ? ' active' : '') + '" data-tab="all" onclick="AdminPanel._switchTab(\'all\')">Tous les comptes</button>' +
          '<button class="ap-tab' + (AdminPanel._tab === 'logs' ? ' active' : '') + '" data-tab="logs" onclick="AdminPanel._switchTab(\'logs\')">Historique</button>' +
        '</div>' +
        '<div id="ap-content"></div>' +
      '</div>';
  },

  /* ── Dashboard ── */
  _renderDashboard: function(stats) {
    if (!stats) {
      return '<div class="ap-stats-grid" style="grid-template-columns:1fr"><p class="ap-empty">Statistiques indisponibles.</p></div>';
    }
    return '<div class="ap-stats-grid">' +
      AdminPanel._statCard('👩‍🎓', stats.totalStudents, 'Élèves inscrits') +
      AdminPanel._statCard('👨‍🏫', stats.activeTeachers, 'Enseignants actifs') +
      AdminPanel._statCard('🏫', stats.totalClasses, 'Classes') +
      AdminPanel._statCard('📊', stats.totalProgressDocs, 'Progressions') +
    '</div>';
  },

  _statCard: function(icon, value, label) {
    return '<div class="ap-stat-card">' +
      '<span class="ap-stat-icon">' + icon + '</span>' +
      '<span class="ap-stat-value">' + value + '</span>' +
      '<span class="ap-stat-label">' + label + '</span>' +
    '</div>';
  },

  /* ── Paramètres & Annonces ── */
  _renderSettingsSection: function(settings, announcement) {
    var announcementText = announcement ? AdminPanel._esc(announcement.text) : '';
    var open = AdminPanel._settingsOpen;
    return '<div class="ap-settings-section">' +
      '<button class="ap-settings-toggle" onclick="AdminPanel._toggleSettings()">' +
        '⚙️ Paramètres &amp; Annonces &nbsp;' + (open ? '▲' : '▼') +
      '</button>' +
      '<div class="ap-settings-body" id="ap-settings-body" style="display:' + (open ? 'flex' : 'none') + '">' +

        '<div class="ap-settings-group">' +
          '<div class="ap-settings-group-title">Annonce globale</div>' +
          '<textarea class="ap-announce-textarea" id="ap-announce-input" placeholder="Message affiché pour tous les utilisateurs connectés...">' + announcementText + '</textarea>' +
          '<div class="ap-settings-row">' +
            '<button class="ap-save-btn" onclick="AdminPanel._saveAnnouncement()">Publier</button>' +
            (announcementText ? '<button class="ap-reject-btn" onclick="AdminPanel._clearAnnouncement()">Supprimer l\'annonce</button>' : '') +
          '</div>' +
        '</div>' +

        '<div class="ap-settings-group">' +
          '<div class="ap-settings-group-title">Paramètres plateforme</div>' +
          '<label class="ap-toggle-row">' +
            '<span>Inscription enseignants activée</span>' +
            '<input type="checkbox" id="ap-teacher-signup"' + (settings.teacherSignupEnabled !== false ? ' checked' : '') + ' />' +
          '</label>' +
          '<label class="ap-toggle-row">' +
            '<span>Mode maintenance (site en pause)</span>' +
            '<input type="checkbox" id="ap-maintenance"' + (settings.maintenanceMode ? ' checked' : '') + ' />' +
          '</label>' +
          '<div class="ap-field-row">' +
            '<span>Max élèves par classe</span>' +
            '<input type="number" id="ap-max-students" class="ap-number-input" value="' + (settings.maxStudentsPerClass || 35) + '" min="1" max="200" />' +
          '</div>' +
          '<div class="ap-settings-save-row">' +
            '<button class="ap-save-btn" onclick="AdminPanel._saveSettings()">Enregistrer</button>' +
          '</div>' +
        '</div>' +

        '<div class="ap-settings-group">' +
          '<div class="ap-settings-group-title">Sécurité</div>' +
          '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;">' +
            'À exécuter une seule fois après la mise à jour des règles Firestore : ' +
            'restaure l\'accès des enseignants à la progression de leurs élèves déjà inscrits.' +
          '</p>' +
          '<button class="ap-save-btn" onclick="AdminPanel._runBackfillTeacherIds()">Réparer les accès enseignants</button>' +
        '</div>' +

      '</div>' +
    '</div>';
  },

  _runBackfillTeacherIds: async function() {
    if (!confirm('Lancer la migration des accès enseignants ? Cette opération est sûre et peut être relancée sans risque.')) return;
    try {
      var result = await AuthService.backfillProgressTeacherIds();
      var detail = result.updated + ' mis à jour' + (result.failed > 0 ? ', ' + result.failed + ' échec(s)' : '');
      await AuthService.logAdminAction('teacherIds_backfill', null, detail);
      if (result.failed > 0) {
        showToast('Migration partielle : ' + result.updated + ' élève(s) mis à jour, ' + result.failed + ' échec(s) — relance la migration (sans risque) pour réessayer les échecs.', 'error');
      } else {
        showToast('Migration terminée : ' + result.updated + ' élève(s) mis à jour.', 'success');
      }
    } catch (e) {
      console.error('[AdminPanel] backfill error:', e);
      showToast('Erreur lors de la migration.', 'error');
    }
  },

  _toggleSettings: function() {
    AdminPanel._settingsOpen = !AdminPanel._settingsOpen;
    var body = document.getElementById('ap-settings-body');
    var btn  = document.querySelector('.ap-settings-toggle');
    if (body) body.style.display = AdminPanel._settingsOpen ? 'flex' : 'none';
    if (btn)  btn.innerHTML = '⚙️ Paramètres &amp; Annonces &nbsp;' + (AdminPanel._settingsOpen ? '▲' : '▼');
  },

  _saveAnnouncement: async function() {
    var input = document.getElementById('ap-announce-input');
    if (!input) return;
    var text = input.value.trim();
    if (!text) { AdminPanel._clearAnnouncement(); return; }
    try {
      await AuthService.setAnnouncement(text);
      await AuthService.logAdminAction('announcement_set', null, text.substring(0, 100));
      if (typeof showAnnouncementBanner === 'function') showAnnouncementBanner(text);
      showToast('Annonce publiée.', 'success');
      AdminPanel.render();
    } catch(e) {
      showToast('Erreur lors de la publication.', 'error');
    }
  },

  _clearAnnouncement: async function() {
    try {
      await AuthService.clearAnnouncement();
      await AuthService.logAdminAction('announcement_cleared', null, null);
      if (typeof hideAnnouncementBanner === 'function') hideAnnouncementBanner();
      showToast('Annonce supprimée.', 'success');
      AdminPanel.render();
    } catch(e) {
      showToast('Erreur lors de la suppression.', 'error');
    }
  },

  _saveSettings: async function() {
    var teacherSignup = document.getElementById('ap-teacher-signup');
    var maintenance   = document.getElementById('ap-maintenance');
    var maxStudents   = document.getElementById('ap-max-students');
    if (!teacherSignup || !maintenance || !maxStudents) return;
    var data = {
      teacherSignupEnabled: teacherSignup.checked,
      maintenanceMode: maintenance.checked,
      maxStudentsPerClass: parseInt(maxStudents.value) || 35
    };
    try {
      await AuthService.savePlatformSettings(data);
      await AuthService.logAdminAction('settings_saved', null, JSON.stringify(data));
      showToast('Paramètres enregistrés.', 'success');
    } catch(e) {
      showToast('Erreur lors de l\'enregistrement.', 'error');
    }
  },

  /* ── Onglets ── */
  _switchTab: function(tab) {
    AdminPanel._tab = tab;
    document.querySelectorAll('.ap-tab').forEach(function(t) {
      t.classList.toggle('active', t.dataset.tab === tab);
    });
    AdminPanel._loadTab(tab);
  },

  _loadTab: async function(tab) {
    var content = document.getElementById('ap-content');
    if (!content) return;
    content.innerHTML = '<div class="ap-loading">Chargement...</div>';
    try {
      if (tab === 'pending') {
        var pending = await AuthService.getPendingTeachers();
        AdminPanel._renderPending(pending);
      } else if (tab === 'all') {
        var results = await Promise.allSettled([
          AuthService.getAllUsers(),
          AuthService.getOrphanClasses()
        ]);
        var users   = results[0].status === 'fulfilled' ? results[0].value : [];
        var orphans = results[1].status === 'fulfilled' ? results[1].value : [];
        AdminPanel._renderAll(users, orphans);
      } else if (tab === 'logs') {
        var logs = await AuthService.getAdminLogs(50);
        AdminPanel._renderLogs(logs);
      }
    } catch(e) {
      console.error('[AdminPanel] _loadTab error:', e);
      content.innerHTML = '<div class="ap-error">Erreur : ' + AdminPanel._esc(e.message || e.code || 'inconnue') + '</div>';
    }
  },

  /* ── Tab : En attente ── */
  _renderPending: function(pending) {
    var content = document.getElementById('ap-content');
    if (!content) return;
    if (!pending || pending.length === 0) {
      content.innerHTML = '<p class="ap-empty">Aucun compte enseignant en attente.</p>';
      return;
    }
    content.innerHTML = pending.map(function(u) {
      var name    = AdminPanel._esc(u.displayName || 'Inconnu');
      var contact = AdminPanel._esc(u.phone || u.email || '—');
      var uid     = AdminPanel._esc(u.uid);
      return '<div class="ap-user-card">' +
        '<div class="ap-user-info">' +
          '<span class="ap-user-name">' + name + '</span>' +
          '<span class="ap-user-contact">' + contact + '</span>' +
        '</div>' +
        '<div class="ap-user-actions">' +
          '<button class="ap-approve-btn" onclick="AdminPanel._approve(\'' + uid + '\')">✅ Approuver</button>' +
          '<button class="ap-reject-btn"  onclick="AdminPanel._reject(\''   + uid + '\')">❌ Refuser</button>' +
        '</div>' +
      '</div>';
    }).join('');
  },

  /* ── Tab : Tous les comptes ── */
  _renderAll: function(users, orphans) {
    var content = document.getElementById('ap-content');
    if (!content) return;

    var orphanHtml = '';
    if (orphans && orphans.length > 0) {
      orphanHtml =
        '<div class="ap-orphan-section">' +
          '<div class="ap-section-title">⚠️ Classes sans enseignant actif (' + orphans.length + ')</div>' +
          orphans.map(function(cls) {
            return '<div class="ap-orphan-card">' +
              '<div class="ap-user-info">' +
                '<span class="ap-user-name">' + AdminPanel._esc(cls.name || cls.id) + '</span>' +
                '<span class="ap-user-contact">Code&nbsp;: ' + AdminPanel._esc(cls.id) + ' &nbsp;·&nbsp; ' + (cls.students ? cls.students.length : 0) + ' élève(s)</span>' +
              '</div>' +
              '<div class="ap-user-actions">' +
                '<button class="ap-reject-btn" onclick="AdminPanel._archiveClass(\'' + AdminPanel._esc(cls.id) + '\')">Archiver</button>' +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>';
    }

    content.innerHTML =
      orphanHtml +
      '<div class="ap-search-wrap">' +
        '<input class="ap-search-input" type="text" placeholder="Rechercher par nom, email ou téléphone..." oninput="AdminPanel._filterUsers(this.value)" id="ap-search" />' +
      '</div>' +
      '<div id="ap-users-list">' + AdminPanel._renderUsersList(users) + '</div>';

    AdminPanel._allUsersCache = users;
  },

  _renderUsersList: function(users) {
    if (!users || !users.length) return '<p class="ap-empty">Aucun compte trouvé.</p>';
    var roleLabel   = { student: 'Élève', teacher: 'Enseignant', admin: 'Admin' };
    var statusLabel = { active: '🟢 Actif', pending: '🟡 En attente', rejected: '🔴 Refusé' };
    return users.map(function(u) {
      var name    = AdminPanel._esc(u.displayName || 'Inconnu');
      var contact = AdminPanel._esc(u.phone || u.email || '—');
      var role    = roleLabel[u.role] || u.role;
      var status  = statusLabel[u.status] || u.status;
      var uid     = AdminPanel._esc(u.uid);

      if (u.role === 'admin') {
        return '<div class="ap-user-card">' +
          '<div class="ap-user-info">' +
            '<span class="ap-user-name">' + name + '</span>' +
            '<span class="ap-user-contact">' + contact + '</span>' +
            '<span class="ap-user-meta">' + role + ' · ' + status + '</span>' +
          '</div>' +
        '</div>';
      }

      var actions = '';
      if (u.status !== 'active') actions += '<button class="ap-approve-btn" onclick="AdminPanel._setStatus(\'' + uid + '\',\'active\')">Activer</button>';
      if (u.status === 'active') actions += '<button class="ap-reject-btn" onclick="AdminPanel._setStatus(\'' + uid + '\',\'rejected\')">Désactiver</button>';
      if (u.role === 'student') {
        actions += '<button class="ap-role-btn" onclick="AdminPanel._setRole(\'' + uid + '\',\'teacher\')">→ Enseignant</button>';
      } else if (u.role === 'teacher') {
        actions += '<button class="ap-role-btn" onclick="AdminPanel._setRole(\'' + uid + '\',\'admin\')">→ Admin</button>';
        actions += '<button class="ap-role-btn ap-role-btn--down" onclick="AdminPanel._setRole(\'' + uid + '\',\'student\')">→ Élève</button>';
      }

      return '<div class="ap-user-card">' +
        '<div class="ap-user-info">' +
          '<span class="ap-user-name">' + name + '</span>' +
          '<span class="ap-user-contact">' + contact + '</span>' +
          '<span class="ap-user-meta">' + role + ' · ' + status + '</span>' +
        '</div>' +
        '<div class="ap-user-actions">' + actions + '</div>' +
      '</div>';
    }).join('');
  },

  _filterUsers: function(query) {
    var list = document.getElementById('ap-users-list');
    if (!list) return;
    var q = query.toLowerCase();
    var filtered = AdminPanel._allUsersCache.filter(function(u) {
      return (u.displayName || '').toLowerCase().indexOf(q) !== -1 ||
             (u.email || '').toLowerCase().indexOf(q) !== -1 ||
             (u.phone || '').toLowerCase().indexOf(q) !== -1;
    });
    list.innerHTML = AdminPanel._renderUsersList(filtered);
  },

  /* ── Tab : Historique ── */
  _renderLogs: function(logs) {
    var content = document.getElementById('ap-content');
    if (!content) return;
    if (!logs || !logs.length) {
      content.innerHTML = '<p class="ap-empty">Aucune action enregistrée pour l\'instant.</p>';
      return;
    }
    var labels = {
      teacher_approved:    '✅ Enseignant approuvé',
      teacher_rejected:    '❌ Enseignant refusé',
      user_activated:      '🟢 Compte activé',
      user_deactivated:    '🔴 Compte désactivé',
      role_changed:        '🔄 Rôle modifié',
      announcement_set:    '📢 Annonce publiée',
      announcement_cleared:'🗑️ Annonce supprimée',
      settings_saved:      '⚙️ Paramètres modifiés',
      class_archived:      '📦 Classe archivée',
      teacherIds_backfill: '🔧 Migration accès enseignants'
    };
    content.innerHTML = '<div class="ap-logs-list">' +
      logs.map(function(log) {
        var label   = labels[log.action] || AdminPanel._esc(log.action);
        var time    = AdminPanel._timeAgo(log.createdAt);
        var admin   = AdminPanel._esc(log.adminName || log.adminUid || '—');
        var details = log.details ? ' — ' + AdminPanel._esc(String(log.details).substring(0, 100)) : '';
        return '<div class="ap-log-card">' +
          '<div class="ap-log-main">' +
            '<span class="ap-log-action">' + label + '</span>' +
            '<span class="ap-log-details">' + details + '</span>' +
          '</div>' +
          '<div class="ap-log-meta">' +
            '<span class="ap-log-admin">' + admin + '</span>' +
            '<span class="ap-log-time">' + time + '</span>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  },

  /* ── Actions ── */
  _approve: async function(uid) {
    try {
      await AuthService.approveTeacher(uid);
      await AuthService.logAdminAction('teacher_approved', uid, null);
      showToast('Enseignant approuvé.', 'success');
      AdminPanel._loadTab('pending');
    } catch(e) {
      showToast('Erreur lors de l\'approbation.', 'error');
    }
  },

  _reject: async function(uid) {
    try {
      await AuthService.rejectTeacher(uid);
      await AuthService.logAdminAction('teacher_rejected', uid, null);
      showToast('Demande refusée.', 'success');
      AdminPanel._loadTab('pending');
    } catch(e) {
      showToast('Erreur lors du refus.', 'error');
    }
  },

  _setStatus: async function(uid, status) {
    try {
      await AuthService.updateUserProfile(uid, { status: status });
      var action = status === 'active' ? 'user_activated' : 'user_deactivated';
      await AuthService.logAdminAction(action, uid, null);
      showToast('Statut mis à jour.', 'success');
      AdminPanel._loadTab('all');
    } catch(e) {
      showToast('Erreur lors de la mise à jour.', 'error');
    }
  },

  _setRole: async function(uid, role) {
    var roleLabel = { student: 'Élève', teacher: 'Enseignant', admin: 'Admin' }[role] || role;
    try {
      await AuthService.setUserRole(uid, role);
      await AuthService.logAdminAction('role_changed', uid, 'Nouveau rôle : ' + roleLabel);
      showToast('Rôle mis à jour : ' + roleLabel + '.', 'success');
      AdminPanel._loadTab('all');
    } catch(e) {
      showToast('Erreur lors du changement de rôle.', 'error');
    }
  },

  _archiveClass: async function(classId) {
    if (!confirm('Archiver cette classe orpheline ? Cette action est irréversible depuis ce panneau.')) return;
    try {
      await AuthService.archiveClass(classId);
      await AuthService.logAdminAction('class_archived', null, 'Classe : ' + classId);
      showToast('Classe archivée.', 'success');
      AdminPanel._loadTab('all');
    } catch(e) {
      showToast('Erreur lors de l\'archivage.', 'error');
    }
  }
};

/* ── Verrouillage/maintenance par matière ou par module (admin) ──
   IMPORTANT : `config/moduleAccess` est lu par tous les utilisateurs (y compris invités) ;
   on ne met à jour le cache local (et donc l'affichage admin) qu'APRÈS confirmation que
   l'écriture Firestore a réussi. Sinon l'admin croit le verrouillage effectif partout
   alors que seul son propre navigateur l'aurait vu (cache local optimiste, doc distant
   inchangé). */
async function setSubjectAccessMode(subjectId, mode) {
  const modules = (window.MODULES || []).filter(m => (m.subject || 'maths') === subjectId);
  const nextAccess = Object.assign({}, Storage.getModuleStatuses());
  modules.forEach(m => {
    if (mode === 'open') delete nextAccess[m.id];
    else if (mode === 'locked') nextAccess[m.id] = { locked: true, maintenance: false };
    else if (mode === 'maintenance') nextAccess[m.id] = { locked: false, maintenance: true };
  });

  try {
    await AuthService.saveModuleAccess(nextAccess);
  } catch (e) {
    console.warn('[moduleAccess] push failed:', e);
    showToast('Échec de la synchronisation : le verrouillage n\'a pas été appliqué. Réessaie.', 'error');
    return;
  }

  Storage.setAllModuleStatuses(nextAccess);
  state.moduleAccess = nextAccess;
  const subjectLabel = { maths: 'Mathématiques', physique: 'Physique-Chimie', si: 'Sciences de l\'Ingénieur' }[subjectId] || subjectId;
  const modeLabel = { open: 'activée', locked: 'verrouillée', maintenance: 'en maintenance' }[mode] || mode;
  showToast(`Matière « ${subjectLabel} » ${modeLabel} (${modules.length} modules)`, 'info');
  render();
}

async function setModuleAccessMode(moduleId, mode) {
  if (!moduleId || typeof Storage === 'undefined') return;
  const nextAccess = Object.assign({}, Storage.getModuleStatuses());
  if (mode === 'open') delete nextAccess[moduleId];
  else if (mode === 'locked') nextAccess[moduleId] = { locked: true, maintenance: false };
  else if (mode === 'maintenance') nextAccess[moduleId] = { locked: false, maintenance: true };

  try {
    await AuthService.saveModuleAccess(nextAccess);
  } catch (e) {
    console.warn('[moduleAccess] push failed:', e);
    showToast('Échec de la synchronisation : le changement n\'a pas été appliqué. Réessaie.', 'error');
    return;
  }

  Storage.setAllModuleStatuses(nextAccess);
  state.moduleAccess = nextAccess;

  // If current module becomes unavailable, bounce user back to modules list
  if (state.view === 'module' && state.moduleId === moduleId && isModuleUnavailable(moduleId)) {
    const mod = getModule(moduleId);
    if (mod) {
      navigate('modules', { level: mod.level, subject: mod.subject || 'maths' });
      showToast('Module désactivé via admin', 'info');
      return;
    }
  }

  render();
}
