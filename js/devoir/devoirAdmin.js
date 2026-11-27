// Onglet « Devoirs » du panneau admin (module d'évaluation en classe) :
// banque d'exercices paramétrés (éditeur JSON + prévisualisation de variantes), classes, et
// sessions de devoir (sous-onglet délégué à DevoirSessions, js/devoir/devoirSessions.js).
// Données : DevoirStore (Firestore) ; calculs : DevoirEngine + mathjs, chargé à la demande.
var DevoirAdmin = {
  MATHJS_URL: 'https://cdn.jsdelivr.net/npm/mathjs@15.3.0/lib/browser/math.js',
  NB_VARIANTES: 3,

  _container: null,
  _vue: 'banque',          // 'banque' | 'classes' | 'sessions'
  _classes: [],
  _exercices: [],
  _calc: null,
  _mathPromise: null,
  _edition: null,          // { type: 'exercice', original, brouillon? } | { type: 'classe', classe }
  FILE_KEY: 'spark_devoir_file_import',
  LIBELLES_TYPE: { chiffre: 'Calcul', redige: 'Question rédigée', mixte: 'Calcul et rédaction' },

  _esc: function (s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },

  _toast: function (msg, type) { if (typeof showToast === 'function') showToast(msg, type); },
  _katex: function () { if (typeof renderMath === 'function') renderMath(); },

  _anneeScolaire: function () {
    var d = new Date();
    var y = d.getFullYear();
    return d.getMonth() >= 7 ? y + '-' + (y + 1) : (y - 1) + '-' + y;
  },

  _ensureCalc: function () {
    if (DevoirAdmin._calc) return Promise.resolve(DevoirAdmin._calc);
    if (!DevoirAdmin._mathPromise) {
      DevoirAdmin._mathPromise = new Promise(function (resolve, reject) {
        if (window.math && window.math.create) return resolve();
        var s = document.createElement('script');
        s.src = DevoirAdmin.MATHJS_URL;
        s.onload = function () { resolve(); };
        s.onerror = function () { DevoirAdmin._mathPromise = null; reject(new Error('mathjs indisponible (réseau ?)')); };
        document.head.appendChild(s);
      }).then(function () {
        DevoirAdmin._calc = DevoirEngine.creerCalculateur(window.math);
        return DevoirAdmin._calc;
      });
    }
    return DevoirAdmin._mathPromise;
  },

  // ── Point d'entrée (appelé par AdminPanel._loadTab('devoirs')) ──
  render: async function (container) {
    DevoirAdmin._container = container;
    DevoirAdmin._edition = null;
    container.innerHTML = '<div class="ap-loading">Chargement...</div>';
    var res = await Promise.all([DevoirStore.listExercices(), DevoirStore.listClasses(), DevoirAdmin._ensureCalc()]);
    DevoirAdmin._exercices = res[0];
    DevoirAdmin._classes = res[1];
    DevoirAdmin._renderVue();
  },

  _setVue: function (vue) {
    DevoirSessions.quitter();          // arrête les écoutes en direct du tableau de bord
    if (vue === 'sessions') DevoirSessions._vue = 'liste';
    DevoirAdmin._vue = vue;
    DevoirAdmin._edition = null;
    DevoirAdmin._renderVue();
  },

  _renderVue: function () {
    var c = DevoirAdmin._container;
    if (!c) return;
    var v = DevoirAdmin._vue;
    var nav =
      '<div class="dv-subtabs" role="tablist">' +
        '<button class="dv-subtab' + (v === 'banque' ? ' active' : '') + '" onclick="DevoirAdmin._setVue(\'banque\')">Banque d\'exercices (' + DevoirAdmin._exercices.length + ')</button>' +
        '<button class="dv-subtab' + (v === 'classes' ? ' active' : '') + '" onclick="DevoirAdmin._setVue(\'classes\')">Classes (' + DevoirAdmin._classes.length + ')</button>' +
        '<button class="dv-subtab' + (v === 'sessions' ? ' active' : '') + '" onclick="DevoirAdmin._setVue(\'sessions\')">Sessions</button>' +
        '<button class="dv-subtab' + (v === 'suivi' ? ' active' : '') + '" onclick="DevoirAdmin._setVue(\'suivi\')">Suivi</button>' +
      '</div>';
    var corps;
    if (DevoirAdmin._edition && DevoirAdmin._edition.type === 'exercice') corps = DevoirAdmin._htmlEditeurExercice();
    else if (DevoirAdmin._edition && DevoirAdmin._edition.type === 'classe') corps = DevoirAdmin._htmlEditeurClasse();
    else if (v === 'sessions') corps = '<div id="dv-sessions"></div>';
    else if (v === 'suivi') corps = '<div id="dv-suivi"></div>';
    else if (v === 'classes') corps = DevoirAdmin._htmlListeClasses();
    else corps = DevoirAdmin._htmlListeExercices();
    c.innerHTML = '<div class="dv-root">' + nav + corps + '</div>';
    if (DevoirAdmin._edition && DevoirAdmin._edition.type === 'exercice') DevoirAdmin._previsualiser();
    else if (v === 'sessions' && !DevoirAdmin._edition) DevoirSessions.render(document.getElementById('dv-sessions'));
    else if (v === 'suivi' && !DevoirAdmin._edition) DevoirSuivi.render(document.getElementById('dv-suivi'));
    else DevoirAdmin._katex();
  },

  // ══ Banque d'exercices ═════════════════════════════════════════════════════
  _htmlListeExercices: function () {
    var e = DevoirAdmin._esc;
    var liste = DevoirAdmin._exercices;
    var compte = {};
    DevoirAdmin._exercices.forEach(function (x) { compte[x.chapitre] = (compte[x.chapitre] || 0) + 1; });
    var filtre = DevoirAdmin._filtreChapitre || '';
    if (filtre) liste = liste.filter(function (x) { return x.chapitre === filtre; });
    var options = '<option value="">Tous les chapitres (' + DevoirAdmin._exercices.length + ')</option>' +
      DevoirEngine.CHAPITRES.map(function (c) {
        return '<option value="' + e(c.id) + '"' + (c.id === filtre ? ' selected' : '') + '>' + e(c.id + ' · ' + c.titre) + ' (' + (compte[c.id] || 0) + ')</option>';
      }).join('');
    var html = '<div class="dv-toolbar">' +
        '<select class="dv-input dv-filtre" aria-label="Filtrer par chapitre" onchange="DevoirAdmin._filtreChapitre = this.value; DevoirAdmin._renderVue()">' + options + '</select>' +
        '<label class="dv-btn-secondaire dv-fichier">Importer un lot (JSON)<input type="file" accept=".json,application/json" onchange="DevoirAdmin._importerLot(this)" /></label>' +
        '<button class="ap-save-btn" onclick="DevoirAdmin._ouvrirExercice(null)">+ Nouvel exercice</button>' +
        '<button class="dv-btn-secondaire" onclick="DevoirAdmin._ouvrirExercice(null, true)">+ Nouvelle question rédigée</button>' +
      '</div>' + DevoirAdmin._htmlFile();
    if (!liste.length && filtre) {
      return html + '<p class="dv-vide">Aucun exercice pour ce chapitre.</p>';
    }
    if (!liste.length) {
      return html + '<p class="dv-vide">La banque est vide. Elle accueille les exercices des chapitres que vous enseignez (dossier cours/Dylan, de 01 à 16). Créez un premier exercice paramétré : ses valeurs seront tirées au hasard pour chaque étudiant, et son corrigé recalculé automatiquement.</p>';
    }
    html += '<div class="dv-liste">';
    liste.forEach(function (ex) {
      var possibles = DevoirEngine.nombreVariantes(ex);
      html +=
        '<div class="dv-carte' + (ex.actif === false ? ' dv-carte--inactive' : '') + '">' +
          '<div class="dv-carte-info">' +
            '<div class="dv-carte-titre">' + e(ex.titre) + (ex.actif === false ? ' <span class="dv-badge">inactif</span>' : '') +
              (DevoirEngine.typeExercice(ex) !== 'chiffre' ? ' <span class="dv-etat dv-etat--info">' + e(DevoirAdmin.LIBELLES_TYPE[DevoirEngine.typeExercice(ex)].toLowerCase()) + '</span>' : '') + '</div>' +
            '<div class="dv-carte-meta">' + e(DevoirEngine.libelleChapitre(ex.chapitre)) + ' · ' + e(ex.id) + ' · difficulté ' + e(ex.difficulte || '—') + ' · ' + possibles.toLocaleString('fr-FR') + ' variante' + (possibles > 1 ? 's' : '') + ' possible' + (possibles > 1 ? 's' : '') +
              ((ex.tags || []).length ? ' · ' + (ex.tags || []).map(e).join(', ') : '') + '</div>' +
          '</div>' +
          '<div class="dv-carte-actions">' +
            '<button class="ap-save-btn" onclick="DevoirAdmin._ouvrirExercice(\'' + e(ex.id) + '\')">Modifier</button>' +
            '<button class="dv-btn-secondaire" onclick="DevoirAdmin._basculerActif(\'' + e(ex.id) + '\')">' + (ex.actif === false ? 'Activer' : 'Désactiver') + '</button>' +
            '<button class="ap-reject-btn" onclick="DevoirAdmin._supprimerExercice(\'' + e(ex.id) + '\')">Supprimer</button>' +
          '</div>' +
        '</div>';
    });
    return html + '</div>';
  },

  // ── File d'import : lots produits à partir des sources Typst (dépôt BTS FED), relus un à un ──
  // Stockée dans le localStorage du navigateur de l'enseignant (corrigés compris : poste admin).
  _lireFile: function () {
    try { return JSON.parse(localStorage.getItem(DevoirAdmin.FILE_KEY) || '[]'); } catch (e) { return []; }
  },
  _ecrireFile: function (file) {
    if (file.length) localStorage.setItem(DevoirAdmin.FILE_KEY, JSON.stringify(file));
    else localStorage.removeItem(DevoirAdmin.FILE_KEY);
  },

  _importerLot: function (input) {
    var f = input.files && input.files[0];
    if (!f) return;
    var lecteur = new FileReader();
    lecteur.onload = function () {
      var lot;
      try { lot = JSON.parse(lecteur.result); } catch (err) { DevoirAdmin._toast('Fichier illisible : ' + err.message, 'error'); return; }
      var exercices = Array.isArray(lot) ? lot : (lot && lot.exercices);
      if (!Array.isArray(exercices) || !exercices.length) { DevoirAdmin._toast('Aucun exercice dans ce fichier.', 'error'); return; }
      var file = DevoirAdmin._lireFile();
      var dejaEnFile = {};
      file.forEach(function (x) { dejaEnFile[x.id] = true; });
      var ajoutes = 0;
      exercices.forEach(function (ex) { if (ex && !dejaEnFile[ex.id]) { file.push(ex); ajoutes++; } });
      DevoirAdmin._ecrireFile(file);
      DevoirAdmin._toast(ajoutes + ' exercice(s) ajouté(s) à la file à valider.', 'success');
      DevoirAdmin._renderVue();
    };
    lecteur.readAsText(f);
  },

  _htmlFile: function () {
    var file = DevoirAdmin._lireFile();
    if (!file.length) return '';
    var e = DevoirAdmin._esc;
    var enBanque = {};
    DevoirAdmin._exercices.forEach(function (x) { enBanque[x.id] = true; });
    var lignes = file.map(function (ex, i) {
      var r = DevoirEngine.valider(ex, DevoirAdmin._calc);
      var etat = enBanque[ex.id] ? '<span class="dv-etat dv-etat--info">déjà en banque</span>'
        : r.erreurs.length ? '<span class="dv-etat dv-etat--ko">' + r.erreurs.length + ' erreur(s)</span>'
        : '<span class="dv-etat dv-etat--ok">prêt à relire</span>';
      return '<li class="dv-file-ligne">' +
        '<span class="dv-file-titre">' + e(ex.titre || ex.id) + '<span class="dv-carte-meta"> · ' + e(DevoirEngine.libelleChapitre(ex.chapitre)) + '</span></span>' + etat +
        '<span class="dv-carte-actions">' +
          '<button class="ap-save-btn" onclick="DevoirAdmin._ouvrirBrouillon(' + i + ')">Relire</button>' +
          '<button class="dv-btn-lien" onclick="DevoirAdmin._retirerDeFile(' + i + ')">Retirer</button>' +
        '</span></li>';
    }).join('');
    return '<section class="dv-file"><div class="dv-file-entete"><strong>À valider (' + file.length + ')</strong>' +
      '<span class="dv-aide">Exercices importés, pas encore dans la banque. Relisez les variantes de chacun avant de l\'enregistrer.</span>' +
      '<button class="ap-save-btn" id="dv-tout-enregistrer" onclick="DevoirAdmin._enregistrerTousPrets()">Enregistrer tous les exercices prêts</button>' +
      '<button class="dv-btn-lien" onclick="DevoirAdmin._viderFile()">Vider la file</button></div>' +
      '<ul class="dv-file-liste">' + lignes + '</ul></section>';
  },

  _ouvrirBrouillon: function (i) {
    var ex = DevoirAdmin._lireFile()[i];
    if (!ex) return;
    DevoirAdmin._edition = { type: 'exercice', original: null, brouillon: ex };
    DevoirAdmin._renderVue();
  },

  _retirerDeFile: function (i) {
    var file = DevoirAdmin._lireFile();
    file.splice(i, 1);
    DevoirAdmin._ecrireFile(file);
    DevoirAdmin._renderVue();
  },

  // Enregistre d'un coup les exercices de la file sans erreur (garde-fou compris) et absents de
  // la banque. Les autres restent dans la file. Chaque exercice reste modifiable ou désactivable.
  _enregistrerTousPrets: async function () {
    var enBanque = {};
    DevoirAdmin._exercices.forEach(function (x) { enBanque[x.id] = true; });
    var file = DevoirAdmin._lireFile();
    var prets = file.filter(function (ex) { return !enBanque[ex.id] && !DevoirEngine.valider(ex, DevoirAdmin._calc).erreurs.length; });
    if (!prets.length) { DevoirAdmin._toast('Aucun exercice prêt à enregistrer.', 'error'); return; }
    if (!confirm('Enregistrer ' + prets.length + ' exercice(s) dans la banque sans relecture individuelle ?\n\n' +
      'Ils ont passé la validation et le garde-fou (résultat du corrigé d\'origine retrouvé). Vous pourrez les modifier ou les désactiver ensuite.')) return;
    var btn = document.getElementById('dv-tout-enregistrer');
    if (btn) btn.disabled = true;
    var ok = [];
    var echecs = 0;
    for (var i = 0; i < prets.length; i++) {
      if (btn) btn.textContent = 'Enregistrement ' + (i + 1) + ' / ' + prets.length + '…';
      try { await DevoirStore.saveExercice(prets[i], true, null); ok.push(prets[i].id); }
      catch (err) { echecs++; console.error('[DevoirAdmin] enregistrement de ' + prets[i].id + ' :', err); }
    }
    DevoirAdmin._ecrireFile(DevoirAdmin._lireFile().filter(function (x) { return ok.indexOf(x.id) === -1; }));
    DevoirAdmin._exercices = await DevoirStore.listExercices();
    DevoirAdmin._toast(ok.length + ' exercice(s) enregistré(s)' + (echecs ? ', ' + echecs + ' échec(s) : voir la console' : '') + '.', echecs ? 'error' : 'success');
    DevoirAdmin._renderVue();
  },

  _viderFile: function () {
    if (!confirm('Retirer tous les exercices de la file à valider ? La banque n\'est pas touchée.')) return;
    DevoirAdmin._ecrireFile([]);
    DevoirAdmin._renderVue();
  },

  _exerciceSansMeta: function (ex) {
    var copie = JSON.parse(JSON.stringify(ex));
    delete copie.actif; delete copie.created_at; delete copie.updated_at;
    return copie;
  },

  // redige : part du gabarit d'une question rédigée (éléments attendus) plutôt que d'un calcul.
  _ouvrirExercice: function (id, redige) {
    var original = id ? DevoirAdmin._exercices.find(function (x) { return x.id === id; }) : null;
    DevoirAdmin._edition = { type: 'exercice', original: original || null, gabarit: redige ? DevoirEngine.nouvelExerciceRedige() : null };
    DevoirAdmin._renderVue();
  },

  _htmlEditeurExercice: function () {
    var e = DevoirAdmin._esc;
    var original = DevoirAdmin._edition.original;
    var brouillon = DevoirAdmin._edition.brouillon;
    var json = JSON.stringify(original ? DevoirAdmin._exerciceSansMeta(original) : (brouillon || DevoirAdmin._edition.gabarit || DevoirEngine.nouvelExercice()), null, 2);
    return '<div class="dv-editeur">' +
      '<div class="dv-editeur-entete">' +
        '<h3 class="dv-h3">' + (original ? 'Modifier « ' + e(original.titre) + ' »' : brouillon ? 'Relire l\'exercice importé' : 'Nouvel exercice') + '</h3>' +
        (brouillon && brouillon.origine ? '<p class="dv-aide">Source : ' + e(brouillon.origine.source) + ' — ' + e(brouillon.origine.exercice) + '. Le garde-fou recalcule le résultat avec les valeurs d\'origine.</p>' : '') +
        '<p class="dv-aide"><strong>Chapitres que vous enseignez uniquement</strong> : <code>chapitre</code> obligatoire parmi ' +
          DevoirEngine.CHAPITRES.map(function (c) { return '<code title="' + e(c.titre) + '">' + e(c.id) + '</code>'; }).join(', ') + ' (numérotation du dossier cours/Dylan).</p>' +
        '<p class="dv-aide">Paramètres : plage <code>{ nom, min, max, pas }</code>, liste <code>{ nom, valeurs: [..] }</code> ou ligne de catalogue <code>{ nom, colonnes: [{ nom }], lignes: [[..]] }</code>. ' +
          'Dans l\'énoncé et les étapes du corrigé, <code>{{nom}}</code> est remplacé par la valeur tirée (virgule française automatique). ' +
          'Fonctions de calcul autorisées : ' + DevoirEngine.FONCTIONS.join(', ') + ', pi.</p>' +
        '<p class="dv-aide"><strong>Question rédigée</strong> : <code>"type": "redige"</code>, pas de <code>corrige.resultat</code>, et <code>corrige.elements: [{ id, label, attendu, points }]</code> ' +
          '(un critère noté par élément attendu ; reprendre les arguments de votre corrigé). <strong>Calcul suivi d\'une conclusion</strong> : <code>"type": "mixte"</code>, ' +
          'blocs de calcul notés, un bloc <code>"long": true</code> pour la rédaction, et les mêmes <code>elements</code>. Le barème total fait 100 points.</p>' +
      '</div>' +
      '<div class="dv-editeur-grille">' +
        '<div class="dv-editeur-source">' +
          '<label class="dv-label" for="dv-json">Exercice (JSON)</label>' +
          '<textarea id="dv-json" class="dv-json" spellcheck="false">' + e(json) + '</textarea>' +
          '<label class="ap-toggle-row"><span>Exercice actif (proposé au tirage)</span><input type="checkbox" id="dv-actif"' + (!original || original.actif !== false ? ' checked' : '') + ' /></label>' +
          '<div class="dv-boutons">' +
            '<button class="dv-btn-secondaire" onclick="DevoirAdmin._previsualiser()">Vérifier et prévisualiser</button>' +
            '<button class="ap-save-btn" id="dv-enregistrer" onclick="DevoirAdmin._enregistrerExercice()">Enregistrer</button>' +
            '<button class="dv-btn-secondaire" onclick="DevoirAdmin._setVue(\'banque\')">Annuler</button>' +
          '</div>' +
        '</div>' +
        '<div class="dv-editeur-apercu" id="dv-apercu" aria-live="polite"></div>' +
      '</div>' +
    '</div>';
  },

  _lireJson: function () {
    var ta = document.getElementById('dv-json');
    try { return { ex: JSON.parse(ta.value) }; }
    catch (err) { return { erreur: 'JSON invalide : ' + err.message }; }
  },

  _htmlMessages: function (erreurs, avertissements) {
    var e = DevoirAdmin._esc;
    var h = '';
    if (erreurs.length) h += '<div class="dv-msg dv-msg--erreur"><strong>À corriger avant d\'enregistrer</strong><ul>' + erreurs.map(function (m) { return '<li>' + e(m) + '</li>'; }).join('') + '</ul></div>';
    if (avertissements.length) h += '<div class="dv-msg dv-msg--avert"><strong>À vérifier</strong><ul>' + avertissements.map(function (m) { return '<li>' + e(m) + '</li>'; }).join('') + '</ul></div>';
    return h;
  },

  _uniteDe: function (ex, nom) {
    var u = '';
    (ex.parametres || []).forEach(function (p) {
      if (p.nom === nom && p.unite) u = p.unite;
      (p.colonnes || []).forEach(function (c) { if (c.nom === nom && c.unite) u = c.unite; });
    });
    (ex.donnees_calculees || []).forEach(function (d) { if (d.nom === nom && d.unite) u = d.unite; });
    return u;
  },

  _htmlValeurs: function (ex, valeurs) {
    var e = DevoirAdmin._esc;
    return Object.keys(valeurs).map(function (k) {
      var v = valeurs[k];
      var aff = typeof v === 'number' ? DevoirEngine.formaterNombre(v, undefined, false) : v;
      var u = DevoirAdmin._uniteDe(ex, k);
      return '<span class="dv-valeur"><span class="dv-valeur-nom">' + e(k) + '</span> = ' + e(aff) + (u ? ' ' + e(u) : '') + '</span>';
    }).join('');
  },

  _htmlVariante: function (ex, v, i) {
    var e = DevoirAdmin._esc;
    var donnees = Object.keys(v.donnees).map(function (k) {
      var def = (ex.donnees_calculees || []).find(function (d) { return d.nom === k; }) || {};
      return '<li>' + e(k) + ' = ' + e(DevoirEngine.formaterNombre(v.donnees[k], def.decimales, false)) + (def.unite ? ' ' + e(def.unite) : '') + '</li>';
    }).join('');
    return '<article class="dv-variante">' +
      '<div class="dv-variante-titre">Variante ' + (i + 1) + '</div>' +
      '<div class="dv-valeurs">' + DevoirAdmin._htmlValeurs(ex, v.valeurs) + '</div>' +
      // L'énoncé est du HTML rédigé par l'enseignant (comme le contenu des modules) : non échappé.
      '<div class="dv-enonce">' + v.enonce + '</div>' +
      '<div class="dv-corrige">' +
        '<div class="dv-corrige-titre">Corrigé (jamais envoyé à l\'étudiant)</div>' +
        (v.corrige.resultat ? '<div class="dv-resultat">Résultat attendu : <strong>' + e(v.corrige.resultat) + ' = ' + e(v.corrige.valeur_affichee) + (v.corrige.unite ? ' ' + e(v.corrige.unite) : '') + '</strong></div>' : '') +
        (v.corrige.etapes.length ? '<ol class="dv-etapes">' + v.corrige.etapes.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' : '') +
        // Question rédigée ou mixte : les éléments attendus, chacun avec ses points (texte de l'enseignant, non échappé).
        ((v.corrige.elements || []).length ? '<div class="dv-corrige-titre">Éléments de réponse attendus</div><ul class="dv-elements">' + v.corrige.elements.map(function (el) {
          return '<li><strong>' + e(el.label) + '</strong> <span class="dv-carte-meta">(' + e(el.points) + ' pts)</span> — ' + el.attendu + '</li>';
        }).join('') + '</ul>' : '') +
        (v.corrige.reponse_modele ? '<p class="dv-aide">Réponse rédigée du corrigé : ' + v.corrige.reponse_modele + '</p>' : '') +
        (donnees ? '<details class="dv-details"><summary>Toutes les données calculées</summary><ul>' + donnees + '</ul></details>' : '') +
      '</div>' +
    '</article>';
  },

  _previsualiser: function () {
    var zone = document.getElementById('dv-apercu');
    if (!zone) return false;
    var lu = DevoirAdmin._lireJson();
    if (lu.erreur) { zone.innerHTML = DevoirAdmin._htmlMessages([lu.erreur], []); return false; }
    var ex = lu.ex;
    var r = DevoirEngine.valider(ex, DevoirAdmin._calc);
    var html = DevoirAdmin._htmlMessages(r.erreurs, r.avertissements);
    if (!r.erreurs.length) {
      var res = DevoirEngine.variantesDistinctes(ex, DevoirAdmin._calc, DevoirAdmin.NB_VARIANTES);
      var e = DevoirAdmin._esc;
      html += '<div class="dv-apercu-entete"><span>' + e(DevoirAdmin.LIBELLES_TYPE[DevoirEngine.typeExercice(ex)]) + ' — ' + res.possibles.toLocaleString('fr-FR') + ' variante(s) possible(s) — barème : ' +
        DevoirEngine.baremeDe(ex).map(function (b) { return e(b.label) + ' ' + e(b.points); }).join(' · ') + '</span>' +
        '<button class="dv-btn-secondaire" onclick="DevoirAdmin._previsualiser()">Autres variantes</button></div>';
      html += res.variantes.map(function (v, i) { return DevoirAdmin._htmlVariante(ex, v, i); }).join('');
    }
    zone.innerHTML = html;
    DevoirAdmin._katex();
    return !r.erreurs.length;
  },

  _enregistrerExercice: async function () {
    if (!DevoirAdmin._previsualiser()) { DevoirAdmin._toast('Corrigez les erreurs signalées avant d\'enregistrer.', 'error'); return; }
    var ex = DevoirAdmin._lireJson().ex;
    var original = DevoirAdmin._edition.original;
    var actif = document.getElementById('dv-actif').checked;
    var btn = document.getElementById('dv-enregistrer');
    if (original && ex.id !== original.id) {
      DevoirAdmin._toast('L\'identifiant d\'un exercice enregistré ne change pas (il restera lié aux copies). Remettez « ' + original.id + ' ».', 'error');
      return;
    }
    btn.disabled = true;
    try {
      if (!original && await DevoirStore.exerciceExiste(ex.id)) {
        DevoirAdmin._toast('Un exercice porte déjà l\'identifiant « ' + ex.id + ' ».', 'error');
        btn.disabled = false;
        return;
      }
      await DevoirStore.saveExercice(ex, actif, original ? original.created_at : null);
      if (DevoirAdmin._edition.brouillon) {
        // Retiré de la file par identifiant (l'id a pu être corrigé dans l'éditeur)
        var idFile = DevoirAdmin._edition.brouillon.id;
        DevoirAdmin._ecrireFile(DevoirAdmin._lireFile().filter(function (x) { return x.id !== idFile && x.id !== ex.id; }));
      }
      DevoirAdmin._toast('Exercice enregistré.', 'success');
      DevoirAdmin._exercices = await DevoirStore.listExercices();
      DevoirAdmin._setVue('banque');
    } catch (err) {
      console.error('[DevoirAdmin] enregistrement exercice :', err);
      DevoirAdmin._toast('Échec de l\'enregistrement : ' + (err.message || err.code), 'error');
      btn.disabled = false;
    }
  },

  _basculerActif: async function (id) {
    var ex = DevoirAdmin._exercices.find(function (x) { return x.id === id; });
    if (!ex) return;
    try {
      await DevoirStore.setExerciceActif(id, ex.actif === false);
      ex.actif = ex.actif === false;
      DevoirAdmin._renderVue();
    } catch (err) {
      DevoirAdmin._toast('Échec : ' + (err.message || err.code), 'error');
    }
  },

  _supprimerExercice: async function (id) {
    if (!confirm('Supprimer définitivement l\'exercice « ' + id + ' » ? Pour le retirer du tirage sans le perdre, préférez « Désactiver ».')) return;
    try {
      await DevoirStore.deleteExercice(id);
      DevoirAdmin._exercices = DevoirAdmin._exercices.filter(function (x) { return x.id !== id; });
      DevoirAdmin._renderVue();
    } catch (err) {
      DevoirAdmin._toast('Échec : ' + (err.message || err.code), 'error');
    }
  },

  // ══ Classes ════════════════════════════════════════════════════════════════
  _htmlListeClasses: function () {
    var e = DevoirAdmin._esc;
    var html = '<div class="dv-toolbar"><button class="ap-save-btn" onclick="DevoirAdmin._ouvrirClasse(null)">+ Nouvelle classe</button></div>';
    if (!DevoirAdmin._classes.length) return html + '<p class="dv-vide">Aucune classe. Créez-en une et collez la liste des noms, un par ligne.</p>';
    html += '<div class="dv-liste">';
    DevoirAdmin._classes.forEach(function (c) {
      var etu = c.etudiants || [];
      var actifs = etu.filter(function (s) { return s.actif !== false; }).length;
      var dys = etu.filter(function (s) { return s.mode_dys; }).length;
      html +=
        '<div class="dv-carte">' +
          '<div class="dv-carte-info">' +
            '<div class="dv-carte-titre">' + e(c.nom) + '</div>' +
            '<div class="dv-carte-meta">' + e(c.annee_scolaire) + ' · ' + actifs + ' étudiant' + (actifs > 1 ? 's' : '') + ' actif' + (actifs > 1 ? 's' : '') + (dys ? ' · ' + dys + ' en mode Dys' : '') + '</div>' +
          '</div>' +
          '<div class="dv-carte-actions">' +
            '<button class="ap-save-btn" onclick="DevoirAdmin._ouvrirClasse(\'' + e(c.id) + '\')">Modifier</button>' +
            '<button class="ap-reject-btn" onclick="DevoirAdmin._supprimerClasse(\'' + e(c.id) + '\')">Supprimer</button>' +
          '</div>' +
        '</div>';
    });
    return html + '</div>';
  },

  _ouvrirClasse: function (id) {
    var c = id ? DevoirAdmin._classes.find(function (x) { return x.id === id; }) : null;
    var copie = c ? JSON.parse(JSON.stringify({ id: c.id, nom: c.nom, annee_scolaire: c.annee_scolaire, etudiants: c.etudiants || [] }))
      : { id: null, nom: '', annee_scolaire: DevoirAdmin._anneeScolaire(), etudiants: [] };
    DevoirAdmin._edition = { type: 'classe', classe: copie };
    DevoirAdmin._renderVue();
  },

  _htmlEditeurClasse: function () {
    var e = DevoirAdmin._esc;
    var c = DevoirAdmin._edition.classe;
    var lignes = c.etudiants.map(function (s, i) {
      return '<tr>' +
        '<td><input class="dv-input" aria-label="Nom affiché" value="' + e(s.nom) + '" oninput="DevoirAdmin._majEtudiant(' + i + ', \'nom\', this.value)" /></td>' +
        '<td class="dv-centre"><input type="checkbox" aria-label="Mode Dys"' + (s.mode_dys ? ' checked' : '') + ' onchange="DevoirAdmin._majEtudiant(' + i + ', \'mode_dys\', this.checked)" /></td>' +
        '<td class="dv-centre"><input type="checkbox" aria-label="Actif"' + (s.actif !== false ? ' checked' : '') + ' onchange="DevoirAdmin._majEtudiant(' + i + ', \'actif\', this.checked)" /></td>' +
        '<td><button class="dv-btn-lien" onclick="DevoirAdmin._retirerEtudiant(' + i + ')">Retirer</button></td>' +
      '</tr>';
    }).join('');
    return '<div class="dv-editeur">' +
      '<h3 class="dv-h3">' + (c.id ? 'Modifier la classe' : 'Nouvelle classe') + '</h3>' +
      '<div class="dv-champs">' +
        '<label class="dv-label">Nom de la classe<input class="dv-input" id="dv-classe-nom" value="' + e(c.nom) + '" placeholder="BTS FED 2e année" oninput="DevoirAdmin._edition.classe.nom = this.value" /></label>' +
        '<label class="dv-label">Année scolaire<input class="dv-input" id="dv-classe-annee" value="' + e(c.annee_scolaire) + '" placeholder="2026-2027" oninput="DevoirAdmin._edition.classe.annee_scolaire = this.value" /></label>' +
      '</div>' +
      (c.etudiants.length
        ? '<table class="dv-table"><thead><tr><th>Nom affiché (prénom et initiale suffisent)</th><th>Mode Dys</th><th>Actif</th><th></th></tr></thead><tbody>' + lignes + '</tbody></table>' +
          '<p class="dv-aide">Pour un étudiant qui quitte la classe en cours d\'année, décochez « Actif » plutôt que de le retirer : ses copies resteront rattachées à son nom.</p>'
        : '<p class="dv-vide">Aucun étudiant pour l\'instant.</p>') +
      '<label class="dv-label" for="dv-ajout-noms">Ajouter des étudiants (un nom par ligne)</label>' +
      '<textarea id="dv-ajout-noms" class="dv-textarea" rows="4" placeholder="Alice M.&#10;Bilal K."></textarea>' +
      '<div class="dv-boutons">' +
        '<button class="dv-btn-secondaire" onclick="DevoirAdmin._ajouterEtudiants()">Ajouter à la liste</button>' +
      '</div>' +
      '<div class="dv-boutons dv-boutons--fin">' +
        '<button class="ap-save-btn" id="dv-enregistrer-classe" onclick="DevoirAdmin._enregistrerClasse()">Enregistrer la classe</button>' +
        '<button class="dv-btn-secondaire" onclick="DevoirAdmin._setVue(\'classes\')">Annuler</button>' +
      '</div>' +
    '</div>';
  },

  _majEtudiant: function (i, champ, valeur) {
    var s = DevoirAdmin._edition.classe.etudiants[i];
    if (s) s[champ] = valeur;
  },

  _retirerEtudiant: function (i) {
    DevoirAdmin._edition.classe.etudiants.splice(i, 1);
    DevoirAdmin._renderVue();
  },

  _ajouterEtudiants: function () {
    var ta = document.getElementById('dv-ajout-noms');
    var noms = ta.value.split(/\r?\n/).map(function (n) { return n.trim(); }).filter(Boolean);
    if (!noms.length) return;
    noms.forEach(function (nom) {
      DevoirAdmin._edition.classe.etudiants.push({ id: DevoirStore.nouvelId('devoir_classes'), nom: nom, mode_dys: false, actif: true });
    });
    DevoirAdmin._renderVue();
  },

  _validerClasse: function (c) {
    var erreurs = [];
    if (!c.nom.trim()) erreurs.push('Le nom de la classe est obligatoire.');
    if (!/^\d{4}-\d{4}$/.test(c.annee_scolaire.trim())) erreurs.push('Année scolaire au format 2026-2027.');
    var vus = {};
    c.etudiants.forEach(function (s, i) {
      var cle = s.nom.trim().toLocaleLowerCase('fr');
      if (!cle) erreurs.push('Ligne ' + (i + 1) + ' : nom vide.');
      else if (vus[cle]) erreurs.push('« ' + s.nom.trim() + ' » apparaît deux fois : les étudiants doivent pouvoir se reconnaître dans la liste.');
      vus[cle] = true;
    });
    return erreurs;
  },

  _enregistrerClasse: async function () {
    var c = DevoirAdmin._edition.classe;
    var reste = document.getElementById('dv-ajout-noms');
    if (reste && reste.value.trim()) { DevoirAdmin._toast('Des noms restent dans la zone d\'ajout : cliquez d\'abord sur « Ajouter à la liste ».', 'error'); return; }
    var erreurs = DevoirAdmin._validerClasse(c);
    if (erreurs.length) { DevoirAdmin._toast(erreurs[0], 'error'); return; }
    var btn = document.getElementById('dv-enregistrer-classe');
    btn.disabled = true;
    try {
      await DevoirStore.saveClasse({
        id: c.id,
        nom: c.nom.trim(),
        annee_scolaire: c.annee_scolaire.trim(),
        etudiants: c.etudiants.map(function (s) { return { id: s.id, nom: s.nom.trim(), mode_dys: !!s.mode_dys, actif: s.actif !== false }; })
      });
      DevoirAdmin._toast('Classe enregistrée.', 'success');
      DevoirAdmin._classes = await DevoirStore.listClasses();
      DevoirAdmin._setVue('classes');
    } catch (err) {
      console.error('[DevoirAdmin] enregistrement classe :', err);
      DevoirAdmin._toast('Échec de l\'enregistrement : ' + (err.message || err.code), 'error');
      btn.disabled = false;
    }
  },

  _supprimerClasse: async function (id) {
    var c = DevoirAdmin._classes.find(function (x) { return x.id === id; });
    if (!c || !confirm('Supprimer la classe « ' + c.nom + ' » et sa liste de noms ?')) return;
    try {
      await DevoirStore.deleteClasse(id);
      DevoirAdmin._classes = DevoirAdmin._classes.filter(function (x) { return x.id !== id; });
      DevoirAdmin._renderVue();
    } catch (err) {
      DevoirAdmin._toast('Échec : ' + (err.message || err.code), 'error');
    }
  }
};
