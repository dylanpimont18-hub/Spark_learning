var AdminPanel = {
  _tab: 'pending',

  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: async function() {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="ap-loading">Chargement...</div>';
    AdminPanel._renderShell();
    AdminPanel._loadTab(AdminPanel._tab);
  },

  _renderShell: function() {
    document.getElementById('app').innerHTML =
      '<div class="ap-container">' +
        '<div class="ap-header">' +
          '<h1 class="ap-title">⚙️ Administration</h1>' +
          '<button class="ap-teacher-btn" onclick="TeacherDashboard.render(\'__admin__\')">Mon espace enseignant →</button>' +
        '</div>' +
        '<div class="ap-tabs">' +
          '<button class="ap-tab' + (AdminPanel._tab === 'pending' ? ' active' : '') + '" onclick="AdminPanel._switchTab(\'pending\')">En attente</button>' +
          '<button class="ap-tab' + (AdminPanel._tab === 'all' ? ' active' : '') + '" onclick="AdminPanel._switchTab(\'all\')">Tous les comptes</button>' +
        '</div>' +
        '<div id="ap-content"></div>' +
      '</div>';
  },

  _switchTab: function(tab) {
    AdminPanel._tab = tab;
    document.querySelectorAll('.ap-tab').forEach(function(t) {
      t.classList.toggle('active', t.textContent === (tab === 'pending' ? 'En attente' : 'Tous les comptes'));
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
      } else {
        var users = await AuthService.getAllUsers();
        AdminPanel._renderAll(users);
      }
    } catch (e) {
      content.innerHTML = '<div class="ap-error">Erreur de chargement.</div>';
    }
  },

  _renderPending: function(pending) {
    var content = document.getElementById('ap-content');
    if (!content) return;
    if (!pending || pending.length === 0) {
      content.innerHTML = '<p class="ap-empty">Aucun compte enseignant en attente.</p>';
      return;
    }
    content.innerHTML = pending.map(function(u) {
      var name = AdminPanel._esc(u.displayName || 'Inconnu');
      var contact = AdminPanel._esc(u.phone || u.email || '—');
      return '<div class="ap-user-card">' +
        '<div class="ap-user-info">' +
          '<span class="ap-user-name">' + name + '</span>' +
          '<span class="ap-user-contact">' + contact + '</span>' +
        '</div>' +
        '<div class="ap-user-actions">' +
          '<button class="ap-approve-btn" onclick="AdminPanel._approve(\'' + u.uid + '\')">✅ Approuver</button>' +
          '<button class="ap-reject-btn" onclick="AdminPanel._reject(\'' + u.uid + '\')">❌ Refuser</button>' +
        '</div>' +
      '</div>';
    }).join('');
  },

  _renderAll: function(users) {
    var content = document.getElementById('ap-content');
    if (!content) return;
    if (!users || users.length === 0) {
      content.innerHTML = '<p class="ap-empty">Aucun compte trouvé.</p>';
      return;
    }
    content.innerHTML =
      '<div class="ap-search-wrap">' +
        '<input class="ap-search-input" type="text" placeholder="Rechercher par nom..." oninput="AdminPanel._filterUsers(this.value)" id="ap-search" />' +
      '</div>' +
      '<div id="ap-users-list">' +
        AdminPanel._renderUsersList(users) +
      '</div>';
    AdminPanel._allUsersCache = users;
  },

  _allUsersCache: [],

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

  _renderUsersList: function(users) {
    return users.map(function(u) {
      var name = AdminPanel._esc(u.displayName || 'Inconnu');
      var contact = AdminPanel._esc(u.phone || u.email || '—');
      var roleLabel = { student: 'Élève', teacher: 'Enseignant', admin: 'Admin' }[u.role] || u.role;
      var statusLabel = { active: '🟢 Actif', pending: '🟡 En attente', rejected: '🔴 Refusé' }[u.status] || u.status;
      return '<div class="ap-user-card">' +
        '<div class="ap-user-info">' +
          '<span class="ap-user-name">' + name + '</span>' +
          '<span class="ap-user-contact">' + contact + '</span>' +
          '<span class="ap-user-meta">' + roleLabel + ' · ' + statusLabel + '</span>' +
        '</div>' +
        (u.role !== 'admin'
          ? '<div class="ap-user-actions">' +
              (u.status !== 'active' ? '<button class="ap-approve-btn" onclick="AdminPanel._setStatus(\'' + u.uid + '\',\'active\')">Activer</button>' : '') +
              (u.status === 'active' ? '<button class="ap-reject-btn" onclick="AdminPanel._setStatus(\'' + u.uid + '\',\'rejected\')">Désactiver</button>' : '') +
            '</div>'
          : '') +
      '</div>';
    }).join('');
  },

  _approve: async function(uid) {
    try {
      await AuthService.approveTeacher(uid);
      showToast('Enseignant approuvé.', 'success');
      AdminPanel._loadTab('pending');
    } catch (e) {
      showToast('Erreur lors de l\'approbation.', 'error');
    }
  },

  _reject: async function(uid) {
    try {
      await AuthService.rejectTeacher(uid);
      showToast('Demande refusée.', 'success');
      AdminPanel._loadTab('pending');
    } catch (e) {
      showToast('Erreur lors du refus.', 'error');
    }
  },

  _setStatus: async function(uid, status) {
    try {
      await AuthService.updateUserProfile(uid, { status: status });
      showToast('Statut mis à jour.', 'success');
      AdminPanel._loadTab('all');
    } catch (e) {
      showToast('Erreur lors de la mise à jour.', 'error');
    }
  }
};
