/* =========================================================
   Spark Learning – tutoringHome.js
   Liste des élèves de cours particuliers (tutorat privé)
   ========================================================= */

var TutoringHome = {
  _students: [],

  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: async function() {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      TutoringHome._students = await TutoringService.getStudents();
      TutoringHome._renderList('');
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Erreur de chargement.</div>';
    }
  },

  _renderList: function(filter) {
    var q = (filter || '').toLowerCase().trim();
    var students = TutoringHome._students.filter(function(s) {
      if (!q) return true;
      return (s.firstName + ' ' + s.lastName).toLowerCase().indexOf(q) !== -1;
    });

    var cardsHtml = students.length === 0
      ? '<p class="tt-empty">Aucun élève pour l\'instant.</p>'
      : students.map(function(s) {
          return '<div class="tt-student-card" onclick="navigate(\'tutoringStudent\', {studentId: \'' + s.id + '\'})">' +
            '<h3 class="tt-student-name">' + TutoringHome._esc(s.firstName) + ' ' + TutoringHome._esc(s.lastName) + '</h3>' +
            '<div class="tt-student-level">' + TutoringHome._esc(s.level) + '</div>' +
            '<div class="tt-student-subjects">' + (s.subjects || []).map(TutoringHome._esc).join(' · ') + '</div>' +
          '</div>';
        }).join('');

    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<h1 class="tt-title">Tutorat privé</h1>' +
          '<button class="tt-add-btn" onclick="TutoringHome._showAddForm()">+ Ajouter un élève</button>' +
        '</div>' +
        '<input type="text" class="tt-search" placeholder="Rechercher un élève..." ' +
          'oninput="TutoringHome._renderList(this.value)" value="' + TutoringHome._esc(q) + '"/>' +
        '<div class="tt-students-grid">' + cardsHtml + '</div>' +
      '</div>';
  },

  _showAddForm: function() {
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="TutoringHome._renderList(\'\')">← Retour</button>' +
          '<h1 class="tt-title">Ajouter un élève</h1>' +
        '</div>' +
        '<form class="tt-form" onsubmit="return TutoringHome._submitAddForm(event)">' +
          '<label class="tt-label">Prénom<input type="text" id="tt-new-firstname" class="tt-input" required/></label>' +
          '<label class="tt-label">Nom<input type="text" id="tt-new-lastname" class="tt-input" required/></label>' +
          '<label class="tt-label">Niveau<input type="text" id="tt-new-level" class="tt-input" placeholder="ex: 1re, Tle, BTS 1"/></label>' +
          '<label class="tt-label">Matières (séparées par une virgule)<input type="text" id="tt-new-subjects" class="tt-input" placeholder="Maths, Physique-Chimie"/></label>' +
          '<label class="tt-label">Email parent (optionnel)<input type="email" id="tt-new-parent-email" class="tt-input"/></label>' +
          '<button type="submit" class="tt-submit-btn">Créer la fiche élève</button>' +
        '</form>' +
      '</div>';
    document.getElementById('tt-new-firstname').focus();
  },

  _submitAddForm: function(e) {
    e.preventDefault();
    var firstName = document.getElementById('tt-new-firstname').value.trim();
    var lastName = document.getElementById('tt-new-lastname').value.trim();
    var level = document.getElementById('tt-new-level').value.trim();
    var subjects = document.getElementById('tt-new-subjects').value
      .split(',').map(function(s) { return s.trim(); }).filter(Boolean);
    var parentEmail = document.getElementById('tt-new-parent-email').value.trim();

    if (!firstName || !lastName) {
      showToast('Prénom et nom sont obligatoires.', 'error');
      return false;
    }

    TutoringService.createStudent({
      firstName: firstName,
      lastName: lastName,
      level: level,
      subjects: subjects,
      contact: { parentEmail: parentEmail || null, parentPhone: null, studentEmail: null }
    }).then(function() {
      showToast('Élève ajouté !', 'success');
      TutoringHome.render();
    }).catch(function() {
      showToast('Erreur lors de la création.', 'error');
    });

    return false;
  }
};
